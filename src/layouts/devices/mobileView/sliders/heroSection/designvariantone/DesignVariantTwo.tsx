import { Grid, Stack, Paper} from '@mui/material'
import React from 'react'
import { buttonLabelLeftStyleWithBorderMobile, buttonLabelRightStyleWithBorderMobile, 
heroSliderButtonGroup375, heroSliderButtonGroup425,
heroSliderButtonGroupSlideTwo} from '../../../../../../styles/button/Button.styles'
import { HeroOneSliderContainerMobile, HeroPaper } from '../../../../../../styles/stack/Stack.styles'
import { mobileHeroSliderOneBodyOneTypo, mobileHeroSliderOneBodyOneTypo375, 
mobileHeroSliderOneBodyOneTypo425, mobileHeroSliderOneFirstTypo, 
heroSliderOneFirstTypoV2, mobileHeroSliderOneThirdTypoV2,
mobileHeroSliderOneSecondTypo} from '../../../../../../styles/typography/Typography.styles'
import { useDeviceWidth } from '../../../../../../hooks/providers/deviceWidth/DeviceWidthProvider'
import { DesignVariantType } from '../DesignVariant'
import Headings from './fragments/Headings'
import SubHeading from './fragments/SubHeading'
import TwoInOne from './buttonvariant/TwoInOne'
import {v4 as id} from 'uuid' 


const DesignVariantTwo = ({variant,first_heading,
second_heading,third_heading,sub_heading_variant,text_one,
cta_variant,button_one_text,button_two_text,imgs, image_variant}:DesignVariantType) => {
    const windowSize = useDeviceWidth().windowSize
  return (
    <React.Fragment>
        <Paper elevation={5} sx={HeroPaper}>
        <Stack height={300} className="fadeInRight" direction="row" spacing={2} sx={HeroOneSliderContainerMobile}>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={6} sm={6} md={6}>
                    <Stack direction="column" spacing={2} sx={{position:"relative", zIndex:99}}>
                        
                         {(windowSize > 320 && windowSize <= 375) && (
                            <React.Fragment>
                                <Headings
                                 firstTypoExtra={heroSliderOneFirstTypoV2}
                                 variant={variant} 
                                 firstTypo={mobileHeroSliderOneFirstTypo}
                                 secondTypo={mobileHeroSliderOneSecondTypo}
                                 thirdTypo={mobileHeroSliderOneThirdTypoV2}
                                 first_heading={first_heading}
                                 second_heading={second_heading}
                                 third_heading={third_heading}
                                 />
                                 <SubHeading
                                 text_one={text_one} 
                                 bodyTypo={mobileHeroSliderOneBodyOneTypo375}
                                 sub_heading_variant={sub_heading_variant}
                                 />
                                 <TwoInOne 
                                 cta_variant={cta_variant}
                                 size="medium"
                                 buttonGroup={heroSliderButtonGroup375}
                                 buttonLabelLeftStyle={buttonLabelLeftStyleWithBorderMobile}
                                 buttonLabelRightStyle={buttonLabelRightStyleWithBorderMobile}
                                 button_one_text={button_one_text}
                                 button_two_text={button_two_text}
                                 />
                             </React.Fragment>
                         )}
                        {(windowSize > 375 && windowSize <= 425) && (
                             <React.Fragment>
                                 <Headings
                                 firstTypoExtra={heroSliderOneFirstTypoV2}
                                 variant={variant} 
                                 firstTypo={mobileHeroSliderOneFirstTypo}
                                 secondTypo={mobileHeroSliderOneSecondTypo}
                                 thirdTypo={mobileHeroSliderOneThirdTypoV2}
                                 first_heading={first_heading}
                                 second_heading={second_heading}
                                 third_heading={third_heading}
                                 />
                                 <SubHeading 
                                 bodyTypo={mobileHeroSliderOneBodyOneTypo425}
                                 text_one={text_one}
                                 sub_heading_variant={sub_heading_variant}
                                 />
                                 <TwoInOne
                                 cta_variant={cta_variant}
                                 size="medium"
                                 buttonGroup={heroSliderButtonGroup425}
                                 buttonLabelLeftStyle={buttonLabelLeftStyleWithBorderMobile}
                                 buttonLabelRightStyle={buttonLabelRightStyleWithBorderMobile}
                                 button_one_text={button_one_text}
                                 button_two_text={button_two_text}
                                 />
                             </React.Fragment>
                         )}
                        {(windowSize > 0 && windowSize <= 320) && (
                             <React.Fragment>
                                 <Headings
                                 firstTypoExtra={heroSliderOneFirstTypoV2}
                                 variant={variant} 
                                 firstTypo={mobileHeroSliderOneFirstTypo}
                                 secondTypo={mobileHeroSliderOneSecondTypo}
                                 thirdTypo={mobileHeroSliderOneThirdTypoV2}
                                 first_heading={first_heading}
                                 second_heading={second_heading}
                                 third_heading={third_heading}
                                 />
                                 <SubHeading 
                                 bodyTypo={mobileHeroSliderOneBodyOneTypo}
                                 text_one={text_one}                           
                                 sub_heading_variant={sub_heading_variant}
                                 />
                                 <TwoInOne
                                 size="small"
                                 cta_variant={cta_variant}
                                 buttonGroup={heroSliderButtonGroupSlideTwo}
                                 buttonLabelLeftStyle={buttonLabelLeftStyleWithBorderMobile}
                                 buttonLabelRightStyle={buttonLabelRightStyleWithBorderMobile}
                                 button_one_text={button_one_text}
                                 button_two_text={button_two_text}
                                 />
                             </React.Fragment>
                         )}
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack direction="row" spacing={4}>
                        {image_variant==="three_images_style" && (
                            (windowSize > 0 && windowSize <= 320)?(
                                <React.Fragment>
                                    {imgs?.map(img=>(
                                        <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.xs} key={id()}/>
                                    ))}
                                </React.Fragment>
                            ):((windowSize > 320 && windowSize <= 375)?(
                                <React.Fragment>
                                    {imgs?.map(img=>(
                                        <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.sm} key={id()}/>
                                    ))}
                                </React.Fragment>
                            ):((windowSize > 375 && windowSize <= 425)?(
                                <React.Fragment>
                                    {imgs?.map(img=>(
                                        <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.md} key={id()}/>
                                    ))}
                                </React.Fragment>
                            ):(
                                <React.Fragment></React.Fragment>
                            ))))
                        } 
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
        </Paper>
    </React.Fragment>
  )
}

export default React.memo(DesignVariantTwo)