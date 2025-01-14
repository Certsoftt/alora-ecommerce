import React from 'react'
import { BodyTypo} from '../../../../../../../types/text/Text.types'
import TwoSpanFirstWordStyle from '../subheadingvariant/TwoSpanFirstWordStyle'
import ParagraphText from '../subheadingvariant/ParagraphText'

type SubHeadingProps = {
  bodyTypo?: BodyTypo
  text_one?: string | undefined
  text_two?: string | undefined
  sub_heading_variant?: string | undefined
}
const SubHeading = ({bodyTypo,text_one,text_two,
sub_heading_variant}:SubHeadingProps) => {
  return (
    <React.Fragment>
      {sub_heading_variant==="two_span_first_word_style" && (
        <TwoSpanFirstWordStyle bodyTypo={bodyTypo} text_one={text_one} text_two={text_two}/>
      )}
      {sub_heading_variant==="paragraph_text" && (
        <ParagraphText bodyTypo={bodyTypo} text_one={text_one} text_two={text_two}/>
      )}
    </React.Fragment>
  )
}

export default SubHeading