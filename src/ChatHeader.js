import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EditLocationIcon from '@mui/icons-material/EditLocation'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { HelpRounded, SearchRounded, SendRounded } from '@mui/icons-material'

function ChatHeader() {
  return (
    <div className='chatHeader'>
        <div className="chatHeader_left">
            <h3>
                <span className='chatHeader_hash'>#</span>
                TEST CHANNEL NAME
            </h3>
        </div>

        <div className="chatHeader_right">
            <NotificationsIcon />
            <EditLocationIcon />
            <PeopleAltIcon />

            <div className="chatHeader_search">
                <input placeholderSearch />
                <SearchRounded />
            </div>

            <SendRounded />
            <HelpRounded />
        </div>
    </div>
  )
}

export default ChatHeader