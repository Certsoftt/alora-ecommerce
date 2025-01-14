import React, { useState } from 'react'
import {Box, Tab, Stack} from "@mui/material"
import {TabContext, TabList, TabPanel} from "@mui/lab"
import {FaCartShopping, FaShopify} from "react-icons/fa6"
import {FlashOn} from "@mui/icons-material"
import { tabSection } from '../../styles/stack/Stack.styles'
import FlashSales from './tabs/FlashSales'

const TabSection = () => {
    const[activeTab,setActiveTab] = useState('1')
    const handleTabChange = (event: React.SyntheticEvent, newValue:string)=>{
        setActiveTab(newValue)
    }
  return (
    <React.Fragment>
        <TabContext value={activeTab}>
            <Box sx={{borderBottom:1,borderColor:"divider"}}>
                <TabList aria-label="Flash sales, Trending and Products Tabs" 
                onChange={handleTabChange}
                centered textColor='secondary' indicatorColor="secondary" /*sx={{textColor:"secondary.light", indicatorColor:"secondary.light"}}*/
                >
                    <Tab label="Flash Sales" value="1" icon={<FlashOn/>} iconPosition="start"/>
                    <Tab label="Trending" value="2" icon={<FaShopify/>} iconPosition="start"/>
                    <Tab label="Products" value="3" icon={<FaCartShopping/>} iconPosition="start"/>
                </TabList>
            </Box>
            <TabPanel value="1">
                <Stack spacing={2} sx={tabSection}>
                    <FlashSales/>
                </Stack>
            </TabPanel>
            <TabPanel value="2">
                <Stack spacing={2} sx={tabSection}></Stack>
            </TabPanel>
            <TabPanel value="3">
                <Stack spacing={2} sx={tabSection}></Stack>
            </TabPanel>
        </TabContext>
    </React.Fragment>
  )
}

export default TabSection