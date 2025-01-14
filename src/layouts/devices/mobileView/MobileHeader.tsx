import React, {useState} from 'react'
import {Stack, Button, Badge, Avatar, ButtonGroup,
Drawer,Grid,Menu,MenuItem,Divider} from '@mui/material'
import { GiPadlock } from 'react-icons/gi'
import { FaBagShopping, FaInternetExplorer, FaUser } from 'react-icons/fa6'
import DropDownLanguage from '../../DropDownLanguage'
import DropDownRegister from '../../DropDownRegister'
import { buttonLabelLeftStyle, buttonLabelNoShadow, dropDownFontSize } from '../../../styles/button/Button.styles'
import { Cancel, MenuOutlined } from '@mui/icons-material'
import DropDownSearchBox from '../../DropDownSearchBox'

const MobileHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [loginAnchorEl, setLoginAnchorEl]= useState<null | HTMLElement>(null)
    const open = Boolean(loginAnchorEl)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
        setLoginAnchorEl(e.currentTarget)
    }
    const handleClose = ()=>{
        setLoginAnchorEl(null)
    }
    
  return (
    <React.Fragment>
        {/* <Button type="button" startIcon={<CiSearch/>} size="medium" sx={{color:"#1f1f39"}}/> */}
        <DropDownSearchBox/>
        <Badge showZero badgeContent={0} color="success">
            <Avatar sx={{backgroundColor:"orangered", width:32, height:32, boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)"}}>
                <FaBagShopping size={15}/>
            </Avatar>
        </Badge>
        <Button onClick={()=>setSidebarOpen(true)} endIcon={<MenuOutlined/>} sx={{color:"#1f1f39"}} size="medium" type="button"/>
        <Drawer open={sidebarOpen} onClose={()=>setSidebarOpen(false)}>
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={6} sm={6} md={6}>
                    <Stack spacing={2} direction="row" sx={{justifyContent: "space-between", alignItems:"center"}}>
                        <Button variant="text" id="login-btn" onClick={handleClick} aria-haspopup="true" 
                        aria-controls={open?"login-menu":undefined} aria-expanded={open?"true":undefined}>
                            <Avatar sx={{backgroundColor:"#1f1f39", width:32, height:32, boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)"}}>
                                <FaUser size={20}/>
                            </Avatar>
                        </Button>
                        <Menu id="login-menu" anchorEl={loginAnchorEl} open={open} MenuListProps={{
                        'aria-labelledby': 'login-btn'
                        }} onClose={handleClose}>
                            <MenuItem onClick={handleClose} sx={dropDownFontSize}>
                                <Button startIcon={<GiPadlock/>} type="button" href="" 
                                sx={buttonLabelNoShadow}>Sign In</Button>
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Stack spacing={2} direction="row" sx={{justifyContent: "center", alignItems:"center"}}>
                        <Button color="inherit" size="medium" onClick={()=>setSidebarOpen(false)} endIcon={<Cancel />}/>
                    </Stack>
                </Grid>
            </Grid>
            <Stack direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem/>}>
                <Button type="button" size="medium" variant="outlined" id="home" href="" sx={buttonLabelNoShadow}>Home</Button>
                <Button type="button" size="medium" variant="outlined" id="cat" href="" sx={buttonLabelNoShadow}>Categories</Button>
                <Button type="button" size="medium" variant="outlined" id="store" href="" sx={buttonLabelNoShadow}>Stores</Button>
                <DropDownLanguage buttonLabel="English" li1="Germany" li2="Spanish"/>
                <ButtonGroup id="btn-group" aria-label="groups of alignment button" size="medium" 
                orientation="horizontal" variant="outlined">
                    <Button startIcon={<FaInternetExplorer/>} type="button" href="" 
                    sx={buttonLabelLeftStyle}>Explore</Button>
                    <DropDownRegister
                    buttonLabel='Join Us' li1='Become a Vendor' li2="Become a Dispatch Rider" li3="Create A Customer Account"/>
                </ButtonGroup>
            </Stack>
        </Drawer>
    </React.Fragment>
  )
}

export default MobileHeader