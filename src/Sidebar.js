import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CallIcon from '@mui/icons-material/Call';
import { InfoOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);       //EMPTY ARRAY BY DEFAULT

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            )
        ))
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter a channel name");

        if(channelName){            //if 'channelName' exists; it will exist when a user inputs a name
            db.collection("channels").add({     //adds 'channelName' to "channels" collection in Firebase
                channelName: channelName,
            });
        }
    };

  return (
    <div className='sidebar'>

        <div className='sidebar_top'>
            <h3>Server</h3>
            <ExpandMoreIcon />
        </div>

        <div className='sidebar_channels'>

            <div className="sidebar_channelsHeader">
                <div className="sidebar_header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>

                <AddIcon onClick={handleAddChannel} className='sidebar_addChannel'/>
            </div>

            <div className='sidebar_channelsList'>
                {channels.map(( {id, channel}) => (    //DISPLAYS EVERY COMPONENT IN DATABASE
                    <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                ))}
            </div>

        </div>        

        <div className="sidebar_voice">
            <SignalCellularAltIcon 
            className='sidebar_voiceIcon'
            fontSize='large'
            />

            <div className="sidebar_voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>

            <div className="sidebar_voiceIcons">
                <InfoOutlined />
                <CallIcon />
            </div>
        </div>

        <div className="sidebar_profile">
            <Avatar onClick={() => auth.signOut()} src={user.photo} />
            <div className="sidebar_profileInfo">
                <h3>{user.displayName}</h3>
                {/* FIRST 5 CHAR'S OF UID */}
                <p>#{user.uid.substring(0,5)}</p>   
            </div>

            <div className="sidebar_profileIcons">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
        </div>
    </div>
  )
}

export default Sidebar