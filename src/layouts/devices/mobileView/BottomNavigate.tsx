import { Home } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import { FaStore, FaUser } from 'react-icons/fa6'

const BottomNavigate = () => {
    const [value, setValue] = useState(0)
  return (
    <React.Fragment>
        <BottomNavigation sx={{width:"100%", position:"fixed", bottom:0, zIndex:999}} value={value}
        onChange={(event, newValue)=>setValue(newValue)} showLabels>
        <BottomNavigationAction label="Home" icon={<Home color="inherit"/>}/>
        <BottomNavigationAction label="Store" icon={<FaStore color="inherit"/>}/>
        <BottomNavigationAction label="Account" icon={<FaUser color="inherit"/>}/>
        </BottomNavigation>
    </React.Fragment>
  )
}

export default BottomNavigate