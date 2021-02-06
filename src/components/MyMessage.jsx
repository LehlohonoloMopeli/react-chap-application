import React from 'react'
import MessageForm from './MessageForm';

// The message bubble that we send.
function MyMessage({message}) {

    // First check if the message is an image
    if(message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className='message-image'
                style={{ float : 'right' }}
            />
        )
    }

    return (
        <div className="message" style={{ float : 'right', marginRight : '18px', color : 'white', backgroundColor : '#800080'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;
