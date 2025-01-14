import React from 'react'
import {v4} from 'uuid'
import DesignVariant from '../../layouts/devices/mobileView/sliders/heroSection/DesignVariant'
import banner1 from '../../assets/banner1.png'
import banner3 from '../../assets/banner3.png'
import banner2 from '../../assets/banner2.png'
import banner10 from '../../assets/f3.png'
import banner16 from '../../assets/f2.png'
import banner9 from '../../assets/banner9.png'
import banner13 from '../../assets/banner13.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// import required modules
import { EffectCreative,Pagination,Autoplay } from 'swiper/modules';
import { useDeviceWidth } from '../../hooks/providers/deviceWidth/DeviceWidthProvider'
import DesignVariantLap from '../../layouts/devices/others/sliders/heroSection/DesignVariantLap'

type databaseValuesProps = {
    design:{
        variant:string
        heading:{
            variant: string,
            first_heading: string
            second_heading: string
            third_heading: string
        }
        sub_headings:{
            variant_type: string
            text_one: string
            second_text?: string
        },
        cta:{
            variant_type: string
            button_one_text: string
            button_two_text: string
        },
        imgs:{
                img: any,
                deviceStyle:{ 
                    xs: React.CSSProperties
                    sm: React.CSSProperties
                    md: React.CSSProperties
                }
            }[]
        image_variant:string
    }    
}[]

const HeroSection = () => {
    const windowSize = useDeviceWidth().windowSize
    const databaseValues: databaseValuesProps = [
        {   design:{
                variant:"one",
                heading:{
                    variant: "normal",
                    first_heading: "ORGANIC",
                    second_heading: "FOOD",
                    third_heading: "EVERYDAY"
                },
                sub_headings:{
                    variant_type: "two_span_first_word_style",
                    text_one: "Fresh Groceries",
                    second_text: "Enjoy Healthy Life"
                },
                cta:{
                    variant_type: "two_in_one",
                    button_one_text: "Explore",
                    button_two_text: "Shop Now"
                },
                imgs:[
                    {
                        img: banner2,
                        deviceStyle:{ 
                            xs: {position:"relative",top:"147px",transform: "scale(0.5)",left:"auto"},
                            sm: {position:"relative",top:"147px",transform: "scale(0.5)",left:"auto"},
                            md: {position:"relative",top:"147px",transform: "scale(0.5)",left:"auto"}
                        }
                    },
                    {
                        img: banner1,
                        deviceStyle:{ 
                            xs: {transform:"scale(0.5)",position:"relative",top:"147px",left:"-250px"},
                            sm: {transform:"scale(0.5)",position:"relative",top:"147px",left:"-250px"},
                            md: {transform:"scale(0.5)",position:"relative",top:"147px",left:"-250px"}
                        }
                    },
                    {
                        img: banner3,
                        deviceStyle:{ 
                            xs: {transform: "scale(0.5)",position:"relative",top:"147px",left:"-700px"},
                            sm: {transform: "scale(0.5)",position:"relative",top:"147px",left:"-700px"},
                            md: {transform: "scale(0.5)",position:"relative",top:"147px",left:"-700px"}
                        }
                    },
                    {
                        img: banner10,
                        deviceStyle:{ 
                            xs: {transform: "scale(0.4) rotate(295deg)",position:"relative",top:"-130px",left:"-970px"},
                            sm: {transform: "scale(0.4) rotate(290deg)",position:"relative",top:"-130px",left:"-920px"},
                            md: {transform: "scale(0.4) rotate(290deg)",position:"relative",top:"-130px",left:"-920px"}
                        }
                    },
                    {
                        img: banner16,
                        deviceStyle:{ 
                            xs: {transform: "scale(0.4)",position:"relative",top:"-190px",left:"-1520px"},
                            sm: {transform: "scale(0.4)",position:"relative",top:"-190px",left:"-1520px"},
                            md: {transform: "scale(0.4)",position:"relative",top:"-190px",left:"-1520px"}
                        }
                    }
                ],
                image_variant:"five_images_style"
            }    
        },
        {   design:{
                variant: "two",
                heading:{
                    variant: "median_word_first_heading",
                    first_heading: "MAKE HEALTHY LIFE",
                    second_heading: "With~Fresh",
                    third_heading: "Groceries"
                },
                sub_headings:{
                    variant_type: "paragraph_text",
                    text_one: "We bring the store to your door"
                },
                cta:{
                    variant_type: "two_in_one",
                    button_one_text: "Explore",
                    button_two_text: "Shop Now"
                },
                imgs:[
                    {
                        img: banner9,
                        deviceStyle:{ 
                            xs: {position:"relative",top:"37px",transform: "scale(0.3)",left:"-400px"},
                            sm: {position:"relative",top:"37px",transform: "scale(0.3)",left:"-400px"},
                            md: {position:"relative",top:"37px",transform: "scale(0.3)",left:"-400px"}
                        }
                    },
                    {
                        img: banner9,
                        deviceStyle:{ 
                            xs: {transform: "scale(0.3)",position:"relative",top:"37px",left:"-750px", zIndex:9},
                            sm: {transform: "scale(0.3)",position:"relative",top:"37px",left:"-750px", zIndex:9},
                            md: {transform: "scale(0.3)",position:"relative",top:"37px",left:"-750px", zIndex:9}
                        }
                    },
                    {
                        img: banner13,
                        deviceStyle:{ 
                            xs: {transform: "scale(0.65)",position:"relative",top:"-190px",left:"-1050px"},
                            sm: {transform: "scale(0.65)",position:"relative",top:"-190px",left:"-1035px"},
                            md: {transform: "scale(0.65)",position:"relative",top:"-190px",left:"-1020px"}
                        }
                    }
                ],
                image_variant:"three_images_style"
            }
            
        }
    ]
  return (
    <React.Fragment>
    {(windowSize > 0 && windowSize <= 425) && (
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
            clickable: true,
          }}
        modules={[EffectCreative, Pagination,Autoplay]}
        className="mySwiper6"
      >
        {databaseValues.map(el=>(
            <SwiperSlide key={v4()}>
                <DesignVariant
                variant={el.design.variant} 
                heading_variant={el.design.heading.variant} 
                first_heading={el.design.heading.first_heading}
                second_heading={el.design.heading.second_heading}
                third_heading={el.design.heading.third_heading}
                sub_heading_variant={el.design.sub_headings.variant_type}
                text_one={el.design.sub_headings.text_one}
                text_two={el.design.sub_headings.second_text}
                cta_variant={el.design.cta.variant_type}
                button_one_text={el.design.cta.button_one_text}
                button_two_text={el.design.cta.button_two_text}
                imgs={el.design.imgs}
                image_variant={el.design.image_variant}
                />
            </SwiperSlide>
        ))}
      </Swiper>
    )}
     {windowSize > 425 && (
        <DesignVariantLap/>
     )} 
    </React.Fragment>
  )
}

export default HeroSection