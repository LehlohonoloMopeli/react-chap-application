import React from 'react';
import {useState} from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';      //These functions come pre-Built
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import './MessageForm.css'

// Will be used for sending messages.
function MessageForm(props) {

    const [value, setValue] = useState('');
    const { chatId, creds } = props

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0 ) sendMessage( creds, chatId, { text });

        setValue('');
    }


    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }


    const handleUpload = (event) => {
        sendMessage(props, chatId, { files : event.target.files, text : '' })
    }


    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input
                className='message-input'
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PhotoLibraryIcon className='picture-icon'/>
                </span>
            </label>
            <input
                type='file'
                multiple={false}
                id='upload-button'
                style={{ display : 'none'}}
                onChange={handleUpload}
                onSubmit={handleSubmit}
            />
            <div className='sendIconButton'>
                <button type='submit' className='send-button'>
                    <SendRoundedIcon className='send-icon'/>
                </button>
            </div>
        </form>
    )
}

export default MessageForm;
