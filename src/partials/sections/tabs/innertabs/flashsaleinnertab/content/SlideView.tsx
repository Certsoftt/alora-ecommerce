import React from 'react'
import {Stack,Badge,Typography, Paper, IconButton, Button} from "@mui/material"
import {Favorite,Visibility,Compare} from '@mui/icons-material'
import {v4} from 'uuid'
import { useFlashSale } from '../../../../../../hooks/providers/database/FlashSaleProvider'

const SlideView = () => {
    const flashSales = useFlashSale().flashSales
  return (
    <React.Fragment>
        {flashSales.map(flashsale=>(
            <Paper elevation={4} className="single-product" sx={{marginTop:"25px",height:"272px",borderRadius:"10px"}} key={v4()}>
                <Stack 
                    sx={{background:"linear-gradient(rgb(240, 207, 207),rgb(220, 196, 187))",width:"190px",height:"272px",px:"10px",py:"10px",borderRadius:"10px"}} direction="column">
                    <Badge showZero badgeContent={<a href="#" style={{textDecoration:"line-through"}}>${flashsale.price}</a>} max={999} sx={{position:"relative",right:125,top:10,fontWeight:"bold"}}></Badge>
                    <Stack direction="row" sx={{backgroundColor:flashsale.bgColor,width:50, height:50,borderRadius:"100%",justifyContent:"center",alignItems:"center"}}>
                        <Typography sx={{fontSize:"12px",color:"white"}}>-{flashsale.percentage}%</Typography>
                    </Stack>
                    
                    <Stack sx={{px:"30px",width:130,height:245,justifyContent:"center",alignItems:"center"}}>
                        <img  src={flashsale.storelogo} alt="flashsale product" loading="lazy" style={{maxWidth:"100%",maxHeight:"145px"}}/>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{justifyContent:"space-between",alignItems:"center"}}>
                        <Stack direction="row">
                            <Typography sx={{fontSize:"16px"}}>{flashsale.vegetables}</Typography>
                        </Stack>
                        <Stack direction="row" sx={{justifyContent:"space-between",alignItems:"center"}}>
                            <Typography sx={{fontSize:"16px"}}>Price&nbsp;&nbsp;</Typography>
                            <Typography sx={{color:flashsale.bgColor,backgroundColor:"white",fontSize:"14px",fontWeight:700}}> ${flashsale.price}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className="mask-icons" direction="column" sx={{width:"100%",height:"297px",position:"relative",top:"-272px"}}>
                    <Stack sx={{marginTop:"85% !important"}}>
                        <Stack direction="column" sx={{marginLeft:"90% !important",alignItems:"center"}} spacing={0.1}>
                            <IconButton sx={{backgroundColor:"rgb(243, 121, 76)",color:"white",marginRight:"10px !important"}}>
                                <Visibility fontSize="small"/>
                            </IconButton>
                            <IconButton sx={{backgroundColor:"rgb(243, 121, 76)",color:"white",marginRight:"10px !important"}}>
                                <Compare fontSize="small"/>
                            </IconButton>
                        </Stack>
                        <Stack direction="row" sx={{justifyContent:"space-between",alignItems:"center"}}>
                            <Button variant="contained" size="medium" sx={{color:"white", backgroundColor:"orangered"}}>Add To Cart</Button>
                            <IconButton sx={{backgroundColor:"rgb(243, 121, 76)",color:"white"/*,marginRight:"-16px !important"*/}}>
                                <Favorite fontSize="small"/>
                            </IconButton>
                        </Stack>
                    </Stack>   
                </Stack>
            </Paper>  
        ))}
    </React.Fragment>
  )
}

export default SlideView