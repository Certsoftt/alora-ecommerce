import React, {useState} from 'react'
import {CiSearch} from "react-icons/ci"
import {Cancel} from '@mui/icons-material'
import { Button, Menu, MenuItem,TextField, InputAdornment, IconButton } from '@mui/material'
import { useDeviceWidth } from '../hooks/providers/deviceWidth/DeviceWidthProvider'

const DropDownSearchBox = () => {
    const windowSize = useDeviceWidth().windowSize
    const [joinUsAnchorEl, setJoinUsAnchorEl] = useState<HTMLElement | null>(null)
        const open = Boolean(joinUsAnchorEl)
        const handleSearchBox = (e: React.MouseEvent<HTMLButtonElement>)=>{
            setJoinUsAnchorEl(e.currentTarget)
        }
        const handleClose = ()=>{
            setJoinUsAnchorEl(null)
        }
  return (
    <React.Fragment>
        <Button type="button" startIcon={<CiSearch/>} size="medium" 
        sx={{color:"#1f1f39"}} id="search-btn"
        onClick={handleSearchBox} aria-haspopup="true" aria-controls={open?"search-menu":undefined}
        aria-expanded={open?"true":undefined}/>

        <Menu id="search-menu" anchorEl={joinUsAnchorEl} open={open} MenuListProps={{
        'aria-labelledby': 'search-btn'
        }} onClose={handleClose}
        anchorOrigin={{
            vertical: "bottom",
            horizontal:"left"
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"left"
        }}
        >
            <MenuItem>
                <TextField sx={{width:{
                    xs:"200px",
                    sm:"250px",
                    md:"320px",
                    lg:"350px",
                    xl:"400px"
                }}} size={windowSize <= 425? "small": "medium"} variant="outlined" 
                label="search by store or product" color="success"
                slotProps={{
                    input:{
                        endAdornment:<InputAdornment position="end" onClick={handleClose}>
                            <IconButton>
                                <Cancel color="inherit"/>
                            </IconButton>
                        </InputAdornment>
                    }
                }}
                />
            </MenuItem>
        </Menu>
    </React.Fragment>
  )
}

export default DropDownSearchBox