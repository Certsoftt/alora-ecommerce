import React,{useState} from 'react'
import { searchSectionHeadingText } from '../../../../../styles/stack/Stack.styles'
import {v4} from 'uuid'
import {Button, Stack, Typography} from "@mui/material"
import { useFlashSale } from '../../../../../hooks/providers/database/FlashSaleProvider'
import SeeAll from './content/SeeAll'
import SlideView from './content/SlideView'


const StoreTab = () => {
    const categories = useFlashSale().storeCategories
    const [seeAll, setSeeAll] = useState(false)
  return (
    <React.Fragment>
            {
                categories.map(category=>(
                    <Stack spacing={4} direction="column" sx={{marginTop:"40px"}} key={v4()}>
                        <Typography variant="h4" sx={searchSectionHeadingText} gutterBottom>{category}</Typography>
                        <Stack spacing={2} direction="row">
                        {seeAll
                        ?(
                            <SeeAll/>
                        )
                        :(
                            <SlideView/>
                        )
                        }
                        </Stack>
                        <Stack spacing={2} direction="column" sx={{width:"8%",marginLeft:"95% !important"}}>
                            {seeAll || <Button variant="contained" type="button" size="small" sx={{color:"white",backgroundColor:"orangered"}} onClick={()=>setSeeAll(true)}>View All</Button>}
                        </Stack>
                    </Stack>
                ))
            } 
    </React.Fragment>
  )
}

export default StoreTab