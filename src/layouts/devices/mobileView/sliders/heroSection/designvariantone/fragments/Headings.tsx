import React from 'react'
import { FirstTypo, FirstTypoExtra, SecondTypo, ThirdTypo } from '../../../../../../../types/text/Text.types'
import Normal from '../headingvariant/Normal'
import MedianWordFirstHeading from '../headingvariant/MedianWordFirstHeading'


export type HeadingsProps = {
    firstTypo: FirstTypo
    firstTypoExtra?: FirstTypoExtra
    secondTypo: SecondTypo
    thirdTypo: ThirdTypo
    first_heading: string | undefined
    second_heading: string | undefined
    third_heading:string | undefined
    variant?:string
}

const Headings = ({firstTypo, secondTypo, thirdTypo, first_heading, firstTypoExtra,
second_heading, third_heading,variant}:HeadingsProps) => {
  return (
    <React.Fragment>
      {variant==="normal" &&(
        <Normal 
        firstTypo={firstTypo}
        secondTypo={secondTypo}
        thirdTypo={thirdTypo}
        first_heading={first_heading}
        second_heading={second_heading}
        third_heading={third_heading}
        />
      )}
      {variant==="median_word_first_heading" && (
        <MedianWordFirstHeading
        firstTypoExtra={firstTypoExtra}
        firstTypo={firstTypo}
        secondTypo={secondTypo}
        thirdTypo={thirdTypo}
        first_heading={first_heading}
        second_heading={second_heading}
        third_heading={third_heading}
        />
      )} 
    </React.Fragment>
  )
}

export default Headings