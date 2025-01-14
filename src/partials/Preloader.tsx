import { Avatar, Badge, Stack } from '@mui/material'
import React,{useEffect,useRef, useState} from 'react'
import logo from '../../../aloralogo.jpg'
import {TiShoppingCart} from 'react-icons/ti'

const Preloader = () => {
  return (
    <React.Fragment>
        <Stack spacing={2} direction="column" sx={{justifyContent: "center", alignItems: "center",width:"100%",height:"550px"}}>
          <Badge badgeContent={<Avatar  sx={{backgroundColor:"orangered", width:25, height:25}} className="blinking"><TiShoppingCart color="white" size={15}/></Avatar>}>
            <Avatar src={logo} alt="logo" sx={{width:120,height:100}} className="blinking"/>
          </Badge>
            {/* <img src={logo} alt="logo" loading="lazy" style={{width:120,height:100}} className="blinking"/><br/> */}
        </Stack>
    </React.Fragment>
  )
}

export default Preloader