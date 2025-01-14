import React from 'react'
import SubHeading from '../fragments/SubHeading'
import { Typography } from '@mui/material'

const ParagraphText = ({bodyTypo, text_one}:React.ComponentProps<typeof SubHeading>) => {
  return (
    <Typography variant="body1" py={0.5} sx={bodyTypo}>
        {text_one}
    </Typography>
  )
}

export default ParagraphText