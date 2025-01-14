import React,{useState} from 'react'
import {Button, Menu, MenuItem} from "@mui/material"
import {KeyboardArrowDown} from "@mui/icons-material"
import { DropDownButtonProps } from '../types/button/Button.types'
import { buttonLabelLanguageStyle, dropDownFontSize } from '../styles/button/Button.styles'

const DropDownLanguage = ({buttonLabel,li1,li2,li3}:DropDownButtonProps) => {
    const [anchorEl, setAnchorEl] =useState<HTMLElement | null>(null)
        const open = Boolean(anchorEl)
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
            setAnchorEl(e.currentTarget)
        }
        const handleClose = ()=>{
            setAnchorEl(null)
        }
  return (
    <React.Fragment>
        <Button variant="outlined" id="language-btn" endIcon={<KeyboardArrowDown/>}
        onClick={handleClick} aria-haspopup="true" aria-controls={open?"language-menu":undefined}
        aria-expanded={open?"true":undefined}  sx={buttonLabelLanguageStyle}>
            {buttonLabel}
        </Button>
        <Menu id="language-menu" anchorEl={anchorEl} open={open} MenuListProps={{
        'aria-labelledby': 'language-btn'
        }} onClose={handleClose}>
            {li1 && (<MenuItem onClick={handleClose} sx={dropDownFontSize}>{li1}</MenuItem>) }
            {li2 && (<MenuItem onClick={handleClose} sx={dropDownFontSize}>{li2}</MenuItem>) }
            {li3 && (<MenuItem onClick={handleClose} sx={dropDownFontSize}>{li3}</MenuItem>) }
        </Menu>
    </React.Fragment>
  )
}

export default React.memo(DropDownLanguage)