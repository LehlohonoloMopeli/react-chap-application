import React from 'react'

import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


function ChatFeed(props) {              // Props stands for all properties. This function will give us all teh info from the chat feed
    console.log(props);

    const { chats, activeChat, userName, messages } = props;        // The props we'll be using among the many sent by the chat engine (check dev-tools for more)

    const chat = chats && chats[activeChat];        // If chats exist (current chat), finds the chats, and then the active chats
    

    // Used for generating messages

    const renderMessages = () => {                  
        const keys = Object.keys(messages);         // Takes the keys from our messages and puts them under keys
        
        return keys.map((key, index) => {
            const message = messages[key]           // Take the message with that specific key
            const lastMessage = index === 0 ? null : keys[index - 1];       // If index === 0, return null. Else return keys[index -1] (Meaning that if there are messages, find the last message). The question mark checks if the index exists before we access it.
            const isMyMessage = userName === message.sender.username;       // Check if the message is mine using the username
            
            return (
                <div key={ `msg_${index}`} style={{ width : `100%` }}>      {/* React requires us to define a unique key for each elemnt in a list (can be anything, as long as it is unique) */}
                    <div className="message-block">   
                        {
                            isMyMessage                                     // If it's my message
                            ? <MyMessage message={message}/>                // Render the component "MyMessage" (we pass in the prop "message" to have access to the message inside this component)
                            : <TheirMessage message={message} lastMessage={messages[lastMessage]}/>                              // If it is not their message, render the component "TheirMessage"
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight : isMyMessage? '9px' : '0px', marginLeft : isMyMessage? '0px' : '68px'}}>
                        read-receipts
                    </div>

                </div>
            )
        })

    }    


    // Creating the structure of our chat feed

    if (!chat) return "Loading...";         // If there is nothing in our chat list, return the string "Loading..."

    return (                                // Otherwise, return this
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>{chat.title}</div>      {/* Chat Title at the top */}
                <div className='chat-subtitle'>
                    {chat.people.map(((person) => ` ${person.person.username}`))};      {/* Shows all the people in the group just under the title */}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height : '100px' }} />        {/* Leaves space under the messages (so that we can show the message-form) */}
            <div className='message-form-container'>
                <MessageForm {...props} chatId={activeChat}/>       {/* We pass the chatId because only active people can write messages to the group. By default, the chat engine defines active chats via their Id(s) */}
            </div>

        </div>
    )
}

export default ChatFeed;
