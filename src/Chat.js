import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import GifIcon from '@mui/icons-material/Gif'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { selectUser } from './features/userSlice'
import db from './firebase'
import firebase from 'firebase/compat/app'

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    /* messages is a GLOBAL variable, even though this function is local and everything inside
    is short lived. setMessages UPDATES the internal global variable meaning anywhere inside
    this function, you can update the variable and see the new results even if the component refreshes
    
    EVERY STATE UPDATE, the component REFRESHES
    */

    useEffect(() => {
        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [channelId]);

    const sendMessage = (event) => {
        event.preventDefault();

        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user
            })
        setInput("");
    };

  return (
    <div className='chat'>
        <ChatHeader channelName={channelName} />

        <div className="chat_messages">
            {messages.slice().reverse().map((message) => (       //For EVERY message, render out a message component (IN REVERSE)
                <Message 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                />
            ))}
        </div>

        <div className="chat_input">
            <AddCircleIcon fontSize='large' />

            <form>
                <input 
                value={input}
                disabled={!channelId} // IF CHANNEL HASNT BEEN SELECTED
                onChange={(event) => setInput(event.target.value)}
                placeholder={channelId? `Message #${channelName}` : 'Select a text channel'} 
                />
                <button 
                disabled={!channelId}
                className='chat_inputButton' 
                type='submit'
                onClick={sendMessage}
                >
                    Send Message
                </button>
            </form>

            <div className="chat_inputIcons">
                <CardGiftcardIcon fontSize='large' />
                <GifIcon fontSize='large' />
                <EmojiEmotionsIcon fontSize='large' />
            </div>
        </div>

    </div>
  )
}

export default Chat