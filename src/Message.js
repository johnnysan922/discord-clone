import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

function Message() {
  return (
    <div className='message'>
        <Avatar />

        <div className="message_info">
            <h4>
                User
                <span className='message_timestamp'>Timestamp</span>
            </h4>
            <p>Message</p>
        </div>
    </div>
  )
}

export default Message