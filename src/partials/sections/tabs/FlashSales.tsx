import React from 'react'
import { Grid, Typography,Stack/*, Paper, Tooltip, Badge*/ } from '@mui/material'
import { flashSectionBannerImage1, flashSectionBannerImage2, searchSeactionCommonStyle, 
searchSectionHeadingText, searchSectionMobileHeadingText, 
tabSection} from '../../../styles/stack/Stack.styles'
import { useDeviceWidth } from '../../../hooks/providers/deviceWidth/DeviceWidthProvider'
// import { useCountUp } from 'react-countup'
import flashSaleBanner1 from '../../../assets/flash-banner1.jpg'
import flashSaleBanner2 from '../../../assets/flash-banner2.jpg'
import TabByCatAndStore from './innertabs/TabByCatAndStore'

export default function FlashSales(){
    const windowSize = useDeviceWidth().windowSize
    return(
        <React.Fragment>
            <Stack direction="column" spacing={2} sx={searchSeactionCommonStyle}>
                <Typography variant="h4" sx={searchSectionHeadingText} gutterBottom>
                    Alora Vendors Offer Up To 70% Off Sales 
                </Typography>
            </Stack>
            <Stack spacing={2} direction="column" sx={{backgroundColor: "#f4f4f4",py:5}}>
                <Grid container rowSpacing={2} columnSpacing={1}>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Stack direction="row" sx={flashSectionBannerImage1}>
                            <img  src={flashSaleBanner1} alt="flashsale banner advert" loading="lazy"/>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Stack direction="row" sx={flashSectionBannerImage2}>
                            <img  src={flashSaleBanner2} alt="flashsale banner advert" loading="lazy"/>
                        </Stack> 
                    </Grid>
                </Grid>
            </Stack>
            <Stack sx={tabSection}>
                <TabByCatAndStore/>
            </Stack>
        </React.Fragment>
    )
}