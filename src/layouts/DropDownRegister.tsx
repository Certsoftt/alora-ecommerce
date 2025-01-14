import React,{useState} from 'react'
import {Button, Menu, MenuItem} from "@mui/material"
import {KeyboardArrowDown} from "@mui/icons-material"
import { FaCircleUser } from 'react-icons/fa6'
import { DropDownButtonProps } from '../types/button/Button.types'
import { buttonLabelRightStyle, dropDownFontSize } from '../styles/button/Button.styles'

const DropDownRegister = ({buttonLabel,li1,li2,li3}:DropDownButtonProps) => {
    const [joinUsAnchorEl, setJoinUsAnchorEl] =useState<HTMLElement | null>(null)
    const open = Boolean(joinUsAnchorEl)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
        setJoinUsAnchorEl(e.currentTarget)
    }
    const handleClose = ()=>{
        setJoinUsAnchorEl(null)
    }
  return (
    <React.Fragment>
        <Button startIcon={<FaCircleUser/>} variant="outlined" id="join-us-btn" endIcon={<KeyboardArrowDown/>}
        onClick={handleClick} aria-haspopup="true" aria-controls={open?"join-us-menu":undefined}
        aria-expanded={open?"true":undefined} sx={buttonLabelRightStyle}>
            {buttonLabel}
        </Button>
        <Menu id="join-us-menu" anchorEl={joinUsAnchorEl} open={open} MenuListProps={{
        'aria-labelledby': 'join-us-btn'
        }} onClose={handleClose}>
            {li1 && (<MenuItem onClick={handleClose} sx={dropDownFontSize}>{li1}</MenuItem>) }
            {li2 && (<MenuItem onClick={handleClose} sx={dropDownFontSize}>{li2}</MenuItem>) }
            {li3 && (<MenuItem onClick={handleClose} sx={dropDownFontSize}>{li3}</MenuItem>) }
        </Menu>
    </React.Fragment>
  )
}
  export default React.memo(DropDownRegister)