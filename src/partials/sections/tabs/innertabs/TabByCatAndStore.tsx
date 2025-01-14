import React, { useState } from 'react'
import {Box, Tab, Stack} from "@mui/material"
import {TabContext, TabList, TabPanel} from "@mui/lab"
import {/*FaShopify,*/ FaStore} from "react-icons/fa6"
import {Category} from "@mui/icons-material"
import { tabSection } from '../../../../styles/stack/Stack.styles'
import CategoryTab from './flashsaleinnertab/CategoryTab'
import StoreTab from './flashsaleinnertab/StoreTab'

const TabByCatAndStore = () => {
    const[activeTab,setActiveTab] = useState('1')
    const handleTabChange = (event: React.SyntheticEvent, newValue:string)=>{
        setActiveTab(newValue)
    }
  return (
    <React.Fragment>
        <TabContext value={activeTab}>
            <Box sx={{borderBottom:1,borderColor:"divider"}}>
                <TabList aria-label="Flash sales by Category, and by Store" 
                onChange={handleTabChange}
                centered textColor='secondary' indicatorColor="secondary" /*sx={{textColor:"secondary.light", indicatorColor:"secondary.light"}}*/
                >
                    <Tab label="By Category" value="1" icon={<Category/>} iconPosition="start"/>
                    <Tab label="By Store" value="2" icon={<FaStore/>} iconPosition="start"/>
                </TabList>
            </Box>
            <TabPanel value="1">
                <Stack spacing={2} sx={tabSection}>
                    <CategoryTab/>
                </Stack>
            </TabPanel>
            <TabPanel value="2">
                <Stack spacing={2} sx={tabSection}>
                    <StoreTab/>
                </Stack>
            </TabPanel>
        </TabContext>
    </React.Fragment>
  )
}

export default TabByCatAndStore