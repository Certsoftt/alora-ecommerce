import { Grid, Stack, Paper } from '@mui/material'
import React from 'react'
import { buttonLabelLeftStyleWithBorderMobile,buttonLabelRightStyleWithBorderMobile, 
heroSliderButtonGroup375,heroSliderButtonGroup425,heroSliderButtonGroupSlideOne} from '../../../../../../styles/button/Button.styles'
import { mobileHeroSliderOneBodyOneTypo, mobileHeroSliderOneBodyOneTypo375, 
mobileHeroSliderOneBodyOneTypo425, mobileHeroSliderOneFirstTypo, 
mobileHeroSliderOneSecondTypo, mobileHeroSliderOneThirdTypo } from '../../../../../../styles/typography/Typography.styles'
import {HeroOneSliderContainerMobile, HeroPaper } from '../../../../../../styles/stack/Stack.styles'
import { useDeviceWidth } from '../../../../../../hooks/providers/deviceWidth/DeviceWidthProvider'
import { DesignVariantType } from '../DesignVariant'
import Headings from './fragments/Headings'
import SubHeading from './fragments/SubHeading'
import TwoInOne from './buttonvariant/TwoInOne'
import {v4 as id} from 'uuid'

const DesignVariantOne = ({variant,first_heading,
second_heading,third_heading,sub_heading_variant,text_one,text_two,
cta_variant,button_one_text,button_two_text,imgs, image_variant}:DesignVariantType) => {
    const windowSize = useDeviceWidth().windowSize
  return (
    <React.Fragment>
        <Paper elevation={5} sx={HeroPaper}>
        <Stack className="fadeInRight" direction="row" spacing={2} 
        sx={HeroOneSliderContainerMobile}>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={6} sm={6} md={6}>
                    <Stack direction="column" spacing={2} sx={{position:"relative", zIndex:99}}>
                           
                        {(windowSize > 320 && windowSize <= 375) && (
                            <React.Fragment>
                                <Headings
                                variant={variant} 
                                firstTypo={mobileHeroSliderOneFirstTypo}
                                secondTypo={mobileHeroSliderOneSecondTypo}
                                thirdTypo={mobileHeroSliderOneThirdTypo}
                                first_heading={first_heading}
                                second_heading={second_heading}
                                third_heading={third_heading}
                                />
                                <SubHeading
                                text_one={text_one}
                                text_two={text_two} 
                                bodyTypo={mobileHeroSliderOneBodyOneTypo375}
                                sub_heading_variant={sub_heading_variant}
                                />
                                <TwoInOne
                                size="medium" 
                                cta_variant={cta_variant}
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
                                variant={variant} 
                                firstTypo={mobileHeroSliderOneFirstTypo}
                                secondTypo={mobileHeroSliderOneSecondTypo}
                                thirdTypo={mobileHeroSliderOneThirdTypo}
                                first_heading={first_heading}
                                second_heading={second_heading}
                                third_heading={third_heading}
                                />
                                <SubHeading 
                                bodyTypo={mobileHeroSliderOneBodyOneTypo425}
                                text_one={text_one}
                                text_two={text_two}
                                sub_heading_variant={sub_heading_variant}
                                />
                                <TwoInOne
                                size="medium"
                                cta_variant={cta_variant}
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
                                variant={variant}
                                firstTypo={mobileHeroSliderOneFirstTypo}
                                secondTypo={mobileHeroSliderOneSecondTypo}
                                thirdTypo={mobileHeroSliderOneThirdTypo}
                                first_heading={first_heading}
                                second_heading={second_heading}
                                third_heading={third_heading}
                                />
                                <SubHeading 
                                bodyTypo={mobileHeroSliderOneBodyOneTypo}
                                text_one={text_one}
                                text_two={text_two}                           
                                sub_heading_variant={sub_heading_variant}
                                />
                                <TwoInOne 
                                cta_variant={cta_variant} 
                                size="small"
                                buttonGroup={heroSliderButtonGroupSlideOne}
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
                        {image_variant==="five_images_style" && (
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

export default DesignVariantOne