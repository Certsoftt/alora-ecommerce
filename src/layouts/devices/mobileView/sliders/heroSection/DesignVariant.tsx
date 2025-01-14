import React from 'react'
import DesignVariantOne from './designvariantone/DesignVariantOne'
import DesignVariantTwo from './designvariantone/DesignVariantTwo'

export type DesignVariantType = {
    image_variant?: string | undefined
    variant?: string | undefined
    heading_variant?:string | undefined
    first_heading?:string | undefined
    second_heading?:string | undefined
    third_heading?:string | undefined
    sub_heading_variant?:string | undefined
    text_one?:string | undefined
    text_two?:string | undefined
    cta_variant?:string | undefined
    button_one_text?:string | undefined
    button_two_text?:string | undefined
    imgs?:{img:any,
      deviceStyle:{
        xs: React.CSSProperties
        sm: React.CSSProperties
        md: React.CSSProperties
      }}[] | undefined
      firstTypoExtra?:string
}
const DesignVariant = ({image_variant,variant,heading_variant,first_heading,
second_heading,third_heading,sub_heading_variant,text_one,text_two,
cta_variant,button_one_text,button_two_text,imgs}:DesignVariantType) => {
  return (
    <React.Fragment>
        {
            variant === "one" && (
            <DesignVariantOne 
            variant={heading_variant} 
            first_heading={first_heading}
            second_heading={second_heading}
            third_heading={third_heading}
            sub_heading_variant={sub_heading_variant}
            text_one={text_one}
            text_two={text_two}
            cta_variant={cta_variant}
            button_one_text={button_one_text}
            button_two_text={button_two_text}
            imgs={imgs}
            image_variant={image_variant}
            />
        )}
        {
            variant === "two" && (
            <DesignVariantTwo
            variant={heading_variant} 
            first_heading={first_heading}
            second_heading={second_heading}
            third_heading={third_heading}
            sub_heading_variant={sub_heading_variant}
            text_one={text_one}
            text_two={text_two}
            cta_variant={cta_variant}
            button_one_text={button_one_text}
            button_two_text={button_two_text}
            imgs={imgs}
            image_variant={image_variant}
            />
        )}
    </React.Fragment>
  )
}

export default DesignVariant