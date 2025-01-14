import React from 'react'
import {Button, Paper, Stack, TextField, Typography} from "@mui/material"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import {Autoplay, Pagination, EffectCards,EffectCreative } from 'swiper/modules';
import mushroom from '../../../../../assets/mushroom.png'
import redapple from '../../../../../assets/banner8.png'
import berries from '../../../../../assets/f1.png'
import banner3 from '../../../../../assets/blog1.png'
import banner9 from '../../../../../assets/banner9.png'
import pepper from '../../../../../assets/pepper.jpg'
import tomato from '../../../../../assets/tomato.jpg'

const DesignVariantLap = () => {
  return (
    <React.Fragment>
        <Paper elevation={4} sx={{ marginTop:"65px",py:4}}>
            <Stack sx={{width:{md:"100%",lg:"100%",xl:"100%"},height:500}} direction="row" spacing={4}>
                <Stack sx={{width:{md:"50%",lg:"50%",xl:"50%"},height:"auto", JustifyContent:"left",alignItems:"center"}} direction="column" spacing={2}>
                    <Typography variant="h4" sx={{fontSize:"20px",color:"orangered",textShadow: "2px 2px white",fontWeight:900}}>Your Special Order</Typography>
                    <Typography variant="h2" sx={{fontSize:"41px",textShadow: "2px 2px grey",fontWeight:700}} gutterBottom>Always Available</Typography>
                    <Stack spacing={4}></Stack>
                    <Swiper
                        style={{width:"320px"}}
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        modules={[EffectCreative,Autoplay]}
                        className="mySwiper">
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"orangered"}} gutterBottom>Pineapple</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"green"}} gutterBottom>Apple</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"red"}} gutterBottom>Pepper</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"darkgreen"}} gutterBottom>Mushroom</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"red"}} gutterBottom>Tomatoes</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"orangered"}} gutterBottom>WaterMelon</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"goldenrod"}} gutterBottom>Banana</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"green"}} gutterBottom>Gabbage</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Typography variant="h3" sx={{fontSize:"43px",fontWeight:900,color:"orangered"}} gutterBottom>Carrot</Typography>
                            <Typography variant="body1" sx={{fontSize:"20px",fontWeight:500}}>
                                More than thousands of our vendors near you are 24/7 ready to serve you with fresh groceries and oragnic fresh food
                            </Typography>
                        </SwiperSlide>
                    </Swiper>
                    <Stack spacing={5}></Stack>
                    <Stack direction="row">
                        <TextField label="search by product" variant="outlined" size="small" color="success"/>
                        <Button type="button" variant="contained" color="success" size="small">Search</Button>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{justifyContent:"center",alignItems:"center"}}>
                        <Button type="button" variant="outlined" color="error">Explore</Button>
                        <Button type="button" variant="contained" sx={{color:"white",backgroundColor:"orangered"}}>Shop now</Button>
                    </Stack>
                </Stack>
                <Stack sx={{width:{md:"50%",lg:"50%",xl:"50%"},height:500}} direction="column" spacing={2}>
                    <Swiper
                        style={{width:"60%",height:500}}
                        effect={'cards'}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                        modules={[Autoplay, Pagination,EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={mushroom} alt="mushroom" style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tomato} alt="greenapple" style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={redapple} alt="redapple" style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <img src={orange} alt="orange"style={{transform:"scale(0.8)",objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide> */}
                        <SwiperSlide>
                            <img src={berries} alt="pepper"style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={pepper} alt="mushroom"style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner3} alt="mushroom"style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <img src={banner1} alt="mushroom"style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide> */}
                        <SwiperSlide>
                            <img src={banner9} alt="mushroom"style={{transform:"scale(0.8)",objectFit:"contain",width:"100%",height:"100%"}}/>
                        </SwiperSlide>
                    </Swiper>
                </Stack>
            </Stack>
        </Paper>
    </React.Fragment>
  )
}

export default DesignVariantLap