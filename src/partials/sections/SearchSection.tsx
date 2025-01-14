import { Stack, TextField, Button, Dialog, DialogTitle, DialogContent,
DialogContentText,DialogActions, Autocomplete, Typography,Grid,Tooltip,
Divider,Paper,Rating,InputAdornment,IconButton,FormControlLabel,Checkbox,
Badge} from '@mui/material'
import React, { useState } from 'react'
import {v4} from 'uuid'
import { useDeviceWidth } from '../../hooks/providers/deviceWidth/DeviceWidthProvider'
import { FaMap,FaTags,FaLink } from 'react-icons/fa6'
import placeholder from '../../assets/image_placeholder.png'
import { searchSeactionCommonStyle, searchSectionContainerBorder, searchSectionExplore, searchSectionHeadingText, 
searchSectionInputBox, searchSectionMobileHeadingText, searchSectionMobileInputBox, 
searchSectionOR,searchSectionPickRegionBtn} from '../../styles/stack/Stack.styles'

type Region = {
    id: number
    label: string
}

let regions = ["Abak", "IkotEkpene", "Uyo", "Ikono", "Ibesikpo", "Itam"]
let regionsOption = regions.map((region, index)=>(
    {
        id: ++index,
        label:region
    }
))

const SearchSection = () => {
    const windowSize = useDeviceWidth().windowSize
    const [checkedRegion, setCheckedRegion] = useState<string[]>([])
    const [pickedRegions, setPickedRegions] = useState<Array<Region>>([])
    const[open, setOpen] = useState(false)
    const[originDiaglog, setOriginDialog] = useState(false)
    const [userAddress, setUserAddress] = useState("")
    const handleChange = (e:any, newValue:Array<Region>)=>{
        setPickedRegions(
            newValue
        )
    }
    const handleSubmit = ()=>{
        return
        //open google map on dialog box with the a selected region set as origin
    }
    const setOrigin = ()=>{
        //if no origin set then show a dialog box that says enter an address
        if(userAddress === ""){
            setOriginDialog(true)
        }else{
            return
            //open google map on dialog box with address set as origin
        }
    }
    const handleAddress = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserAddress(e.target.value)
    }
    const setChecked = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const region_selected = checkedRegion.indexOf(event.target.value)
        if(region_selected === -1){//add it
            if(checkedRegion.length === 1){
                checkedRegion.pop()
            }
            setCheckedRegion(
                [...checkedRegion, event.target.value]
            )    
        }else{//remove it
            const updatedCheckedRegion = checkedRegion.filter(val=>val !== event.target.value)
            setCheckedRegion(
                updatedCheckedRegion
            )   
        }
    }
  return (
    <React.Fragment>
        <Stack direction="column" spacing={2} py={2} sx={searchSectionExplore}>
            <Typography variant="h4" sx={windowSize <= 425?searchSectionMobileHeadingText:searchSectionHeadingText} gutterBottom>Explore Vendors Near You</Typography>
        </Stack>
        <Stack direction="row" mx={4} my={windowSize > 425? 4:0} py={2} sx={windowSize > 425?searchSectionContainerBorder:{}}>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Stack direction="row">
                        <TextField 
                        sx={windowSize > 425?searchSectionInputBox:searchSectionMobileInputBox} color="primary.dark"
                        variant="outlined" size={windowSize <= 425? "small": "medium"}
                        slotProps={{
                            input:{
                                endAdornment:<InputAdornment position="end" onClick={setOrigin}>
                                    <IconButton sx={{color:"orangered"}}>
                                        <FaMap/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        }}
                        onChange={handleAddress}
                        label="enter address (e.g): 20 Ikpa Road"
                        value={userAddress}
                        fullWidth
                        />
                    </Stack>
                    
                    <Dialog open={originDiaglog} onClose={()=>setOriginDialog(false)} aria-labelledby='origin-modal'
                    aria-describedby="origin-description">
                        <DialogTitle id="origin-modal" sx={{color:"black"}}>Please Kindly Enter An Address</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="origin-description">
                                <img src={placeholder} alt="placeholder" loading="lazy"/>
                                <Typography variant="h6" sx={{color:"black"}}>That's how it works...(:</Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button type="button" variant="contained" sx={{color:"white", backgroundColor:"orangered"}} onClick={()=>setOpen(false)}>Close</Button>
                        </DialogActions>
                    </Dialog>
  
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                    <Stack sx={windowSize > 425?searchSectionOR:searchSeactionCommonStyle}>
                        <Typography variant="subtitle1" sx={{fontweight:900}}>OR</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Stack sx={windowSize > 425?searchSectionPickRegionBtn:searchSeactionCommonStyle}>
                        <Button variant="contained" size="medium" onClick={()=>setOpen(true)} 
                        sx={{color:"white",backgroundColor:"orangered"}}
                        fullWidth
                        >Pick By Region</Button>
                    </Stack>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={()=>setOpen(false)} aria-labelledby='dialog-title'
            aria-describedby="dialog-description"    
            >
                <DialogTitle id="dialog-title">Pick Locations/Stores By Region</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        <Stack width="90%"spacing={2} direction="column">
                            <Autocomplete freeSolo multiple options={regionsOption} value={pickedRegions} onChange={handleChange}
                            renderInput={(params)=><TextField label="select region(s)" {...params}/>}
                            />
                        
                            {
                                pickedRegions.length > 0 && (
                                <Grid container rowSpacing={1} columnSpacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Stack sx={searchSeactionCommonStyle} spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem/>}>
                                        <Typography variant="h6">Overview for Picked Region(s)</Typography>
                                    </Stack>
                                    </Grid>
                                </Grid>
                                )
                            }
                            <Grid container rowSpacing={1} columnSpacing={2}>
                                {
                                    pickedRegions.length > 0 && pickedRegions.map(region=>(
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={v4()}>
                                        <Stack sx={searchSeactionCommonStyle} 
                                        spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem/>}>
                                            <Badge showZero badgeContent={<FaTags style={{transform:"rotate(-90deg)",fontSize:"15px",color:"orangered"}}/>}>
                                                <Paper elevation={4} sx={{padding:"16px"}}>
                                                    <FormControlLabel 
                                                    control={<Checkbox checked={checkedRegion.includes(region.label)} 
                                                    onChange={setChecked}/>} label="Select Origin" value={region.label}/>
                                                    <Typography variant="body1" sx={{color:"black"}}>
                                                        {region.label}:&nbsp;&nbsp; 
                                                        <Tooltip title="view stores" placement="top" arrow enterDelay={500} leaveDelay={200}>
                                                            <a href={`/${region.label}`} target="_blank" rel="noreferrer" 
                                                            style={{/*textDecoration: "none",*/cursor:"pointer",fontSize:"12px",fontWeight:700,color:"orangered"}}>
                                                                (+1k Stores <FaLink fontSize={10}/>)
                                                            </a>
                                                        </Tooltip>
                                                    </Typography>
                                                    <Typography>Available:
                                                        <Tooltip title="view stores" placement="right" arrow enterDelay={500} leaveDelay={200}> 
                                                            <a href={`/${region.label}/open`} target="_blank" rel="noreferrer" 
                                                            style={{textDecoration: "none", cursor:"pointer",fontSize:"12px",fontWeight:700,color:"green"}}>
                                                                50 stores open
                                                            </a>
                                                        </Tooltip>
                                                    </Typography>
                                                    <Rating precision={0.5} size="small" color="warning" value={5} readOnly/>
                                                </Paper>
                                            </Badge>
                                        </Stack>
                                    </Grid>
                                    ))
                                }
                            </Grid>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="error" onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button variant="contained" sx={{color:"white",backgroundColor:"orangered"}} onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    </React.Fragment>
  )
}

export default SearchSection