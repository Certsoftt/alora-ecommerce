import React, {useEffect, useState} from 'react'
import Preloader from '../partials/Preloader'
import Header from '../partials/Header'
import HeroSection from '../partials/sections/HeroSection'
import DeviceWidthProvider from '../hooks/providers/deviceWidth/DeviceWidthProvider'
import { Box } from '@mui/material'
import UseLocation from '../hooks/providers/localization/useLocation'
import SearchSection from '../partials/sections/SearchSection'
import TabSection from '../partials/sections/TabSection'
import FlashSaleProvider from '../hooks/providers/database/FlashSaleProvider'

const HomePage = () => {
    const[loading, setLoading] = useState(true)
    useEffect(()=>{
        const timer = window.setTimeout(()=>{
        setLoading(false)
        }, 3000)
        return ()=>{
        clearTimeout(timer)
        }
    },[loading])
  return (
    <Box>
      <UseLocation>
        <DeviceWidthProvider>
          <FlashSaleProvider>
            {loading && <Preloader/>}
            {loading || (
            <React.Fragment>
            <Header/>
            <HeroSection/>
            <SearchSection/>
            <TabSection/>
            </React.Fragment>
            )}
          </FlashSaleProvider>
        </DeviceWidthProvider>
      </UseLocation>  
    </Box>
  )
}

export default HomePage