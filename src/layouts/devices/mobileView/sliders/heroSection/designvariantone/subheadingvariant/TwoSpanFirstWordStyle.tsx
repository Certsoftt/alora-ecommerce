import React from 'react'
import SubHeading from '../fragments/SubHeading'
import { Typography } from '@mui/material'

const TwoSpanFirstWordStyle = ({bodyTypo, text_one, 
text_two}:React.ComponentProps<typeof SubHeading>) => {
    const text_oneArr:string[] |undefined = text_one?.split(" ")
    const text_one_firstWord:string | undefined = text_oneArr?.shift()
    const text_one_OtherWords:string|undefined = text_oneArr?.join(" ")

    const second_textArr:string[] |undefined = text_two?.split(" ")
    const second_text_firstWord:string | undefined = text_two?.split(" ").shift()
    const text_two_OtherWords:string | undefined = second_textArr?.join(" ")
    
  return (
    <React.Fragment>
        <Typography variant="body1" py={0.5} sx={bodyTypo}>
            <span style={{color:"green"}}>{text_one_firstWord}</span> {text_one_OtherWords} 
            <span style={{color:"orangered"}}>{second_text_firstWord}</span> {text_two_OtherWords}
        </Typography>
    </React.Fragment>
  )
}

export default TwoSpanFirstWordStyle