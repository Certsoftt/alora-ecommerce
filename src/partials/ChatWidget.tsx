import React from 'react'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material"
import { ChatBubble, Mail, Phone, WhatsApp } from '@mui/icons-material'

const ChatWidget = () => {
    const handleWhatsApp = ()=>{
        window.location.href="https://wa.me/+2348148106698"
    }
    const handleMail = ()=>{
        window.location.href="mailto:makemorelive@gmail.com"
    }
    const handleCall = ()=>{
        window.location.href="tel:+2348135217281"
    }
  return (
    <React.Fragment>
        <SpeedDial id="speeddail" ariaLabel="chat widgets" sx={{position:"fixed", bottom:80,right:16, zIndex:99}} icon={<SpeedDialIcon openIcon={<ChatBubble/>}/>}>
            <SpeedDialAction icon={<WhatsApp color="action"/>} tooltipTitle="Chat" tooltipOpen onClick={handleWhatsApp}/>
            <SpeedDialAction icon={<Mail color="inherit"/>} tooltipTitle="Mail" tooltipOpen onClick={handleMail}/>
            <SpeedDialAction icon={<Phone color="primary"/>} tooltipTitle="Call" tooltipOpen onClick={handleCall}/>
        </SpeedDial>
    </React.Fragment>
  )
}

export default ChatWidget