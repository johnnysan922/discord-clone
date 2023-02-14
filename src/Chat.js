import React from 'react'
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

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

  return (
    <div className='chat'>
        <ChatHeader channelName={channelName} />

        <div className="chat_messages">
            <Message />
            <Message />
        </div>

        <div className="chat_input">
            <AddCircleIcon fontSize='large' />

            <form>
                <input placeholder={'Message'} />
                <button className='chat_inputButton' type='submit'>Send Message</button>
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