import React from 'react'
import {Grid,Stack,Badge,Typography, Paper} from "@mui/material"
import {v4} from 'uuid'
import { useFlashSale } from '../../../../../../hooks/providers/database/FlashSaleProvider'

const SeeAll = () => {
    const flashSales = useFlashSale().flashSales
  return (
    <React.Fragment>
        <Grid container rowSpacing={2} columnSpacing={5} sx={{marginLeft:"-40px !important"}}>
            {flashSales.map(flashsale=>(
                <Grid item xs={6} sm={6} md={4} lg={2.4} xl={2.4} key={v4()}>
                    <Paper elevation={4} sx={{marginTop:"25px",borderRadius:"10px"}}>
                        <Stack sx={{backgroundColor:"#eeeeee",width:"100%",height:"272px",px:"10px",py:"10px",borderRadius:"10px"}} direction="column">
                            <Badge showZero badgeContent={<a href="#" style={{textDecoration:"line-through"}}>${flashsale.price}</a>} max={999} sx={{position:"relative",right:145,top:10,fontWeight:"bold"}}></Badge>
                            <Stack direction="row" sx={{backgroundColor:flashsale.bgColor,width:50, height:50,borderRadius:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Typography sx={{fontSize:"12px",color:"white"}}>-{flashsale.percentage}%</Typography>
                            </Stack>
                            
                            <Stack sx={{px:"30px",paddingLeft:"40px",width:130,height:245,justifyContent:"center",alignItems:"center"}}>
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
                    </Paper>
                </Grid>  
            ))}
        </Grid>
                            
    </React.Fragment>
  )
}

export default SeeAll