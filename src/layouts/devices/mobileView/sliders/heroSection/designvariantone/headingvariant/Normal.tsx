import { Typography } from '@mui/material'
import React from 'react'
import Headings from '../fragments/Headings'

const Normal = ({firstTypo,secondTypo,thirdTypo,
third_heading,second_heading,first_heading}:React.ComponentProps<typeof Headings>) => {
  return (
    <React.Fragment>
        <Typography variant="h4" sx={firstTypo}>{first_heading}</Typography>
        <Typography variant="h2" sx={secondTypo}>{second_heading}</Typography>
        <Typography variant="h2" sx={thirdTypo}>{third_heading}</Typography>
    </React.Fragment>
  )
}

export default Normal