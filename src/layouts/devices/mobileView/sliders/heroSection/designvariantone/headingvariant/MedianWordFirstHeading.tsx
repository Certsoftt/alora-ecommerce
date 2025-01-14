import { Typography } from '@mui/material'
import React from 'react'
import Headings from '../fragments/Headings'

const MedianWordFirstHeading = ({firstTypo,secondTypo,thirdTypo,firstTypoExtra,
third_heading,second_heading,first_heading}:React.ComponentProps<typeof Headings>) => {
        const firstHeadingTextToArr: string[] | undefined = first_heading?.split(" ")
        const firstWord: string | undefined = firstHeadingTextToArr?.shift()
        const lastWord: string | undefined = firstHeadingTextToArr?.pop()
        const otherWords: string | undefined = firstHeadingTextToArr?.join(" ")
  return (
    <React.Fragment>
        <Typography variant="h4" sx={firstTypo}>
            {firstWord}~
            <span style={firstTypoExtra}>{otherWords}</span>
            ~{lastWord}
        </Typography>
        <Typography variant="h2" sx={secondTypo}>{second_heading}</Typography>
        <Typography variant="h2" sx={thirdTypo}>{third_heading}</Typography>
    </React.Fragment>
  )
}

export default MedianWordFirstHeading