import React from 'react'
import MessageForm from './MessageForm'

// For the messages that other people send
function TheirMessage({lastMessage, message}) {

    //For other users, we want to know if a message is their 1st message. Just check if it is not generally the last message (between all parties in the chat)
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;   //Gives us a boolean value

    return(
        <div className="message-row">
            {/* How we display the first message, if it is the first message. */}
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage : `url(${message?.sender?.avatar})`}}
                />
            )}

            {/* For all other messages, we render them like MyMessages */}

            {message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className='message-image'
                        style={{ marginLeft : isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className="message" style={{ float : 'right', backgroundColor : '#CABCDC', marginLeft : isFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )  
            }
        </div>
    )
}

export default TheirMessage;