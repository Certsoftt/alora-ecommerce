import React/*, {useEffect,useState}*/ from 'react'
import {AppBar, Toolbar,ImageList, ImageListItem, Stack, 
Badge, ButtonGroup, Button, Avatar, Typography} from "@mui/material"
// import {KeyboardArrowDown} from "@mui/icons-material"
import {FaBagShopping} from "react-icons/fa6"
import {GiPadlock} from "react-icons/gi"

// import logo from '../../../aloralogo.jpg'
// import logo from '../assets/logo.png'
import { buttonLabelLeftStyle, buttonLabelNoShadow } from '../styles/button/Button.styles'
import DropDownLanguage from '../layouts/DropDownLanguage'
import DropDownRegister from '../layouts/DropDownRegister'
import MobileHeader from '../layouts/devices/mobileView/MobileHeader'
import { AppBarStyle, NavLaptopStyle, NavMobilepStyle } from '../styles/navbar/NavBar.styles'
import BottomNavigate from '../layouts/devices/mobileView/BottomNavigate'
import ChatWidget from './ChatWidget'
import { useDeviceWidth } from '../hooks/providers/deviceWidth/DeviceWidthProvider'
import DropDownSearchBox from '../layouts/DropDownSearchBox'

const Header = () => {
    const windowSize = useDeviceWidth().windowSize
    console.log(windowSize)
  return (
    <AppBar sx={AppBarStyle}>
        <Toolbar sx={windowSize > 425 ? NavLaptopStyle: NavMobilepStyle}>
            <ChatWidget/>
            <Stack direction="row" flexGrow={1}>
                <ImageList>
                    <ImageListItem>
                            <Typography style={{width:120,height:20, fontWeight:900}}><span style={{color:"orangered"}}>LO</span><span style={{color:"green"}}>GO</span></Typography>
                    </ImageListItem>
                </ImageList>
            </Stack>
            {windowSize <= 425 && <MobileHeader/>}
            {windowSize > 425 && (
                <Stack direction="row" spacing={2}>
                    <Button type="button" size="medium" variant="outlined" id="home" href="" sx={buttonLabelNoShadow}>Home</Button>
                    <Button type="button" size="medium" variant="outlined" id="cat" href="" sx={buttonLabelNoShadow}>Categories</Button>
                    <Button type="button" size="medium" variant="outlined" id="store" href="" sx={buttonLabelNoShadow}>Stores</Button>
                    <DropDownSearchBox/>
                    <Badge showZero badgeContent={0} color="success">
                        <Avatar sx={{backgroundColor:"orangered", width:32, height:32, boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)"}}>
                            <FaBagShopping size={15}/>
                        </Avatar>
                    </Badge>
                    <DropDownLanguage buttonLabel="English" li1="Germany" li2="Spanish"/>
                    <ButtonGroup id="btn-group" aria-label="groups of alignment button" size="medium" 
                    orientation="horizontal" variant="outlined">
                        <Button startIcon={<GiPadlock/>} type="button" href="" 
                        sx={buttonLabelLeftStyle}>Sign In</Button>
                        <DropDownRegister
                        buttonLabel='Join Us' li1='Become a Vendor' li2="Become a Dispatch Rider" li3="Create A Customer Account"/>
                    </ButtonGroup>
                </Stack>
            )}
        </Toolbar>
        {windowSize <= 425 && <BottomNavigate/>}
    </AppBar>
  )
}

export default Header