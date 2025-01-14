import React, { useEffect, useState } from 'react'
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, 
ListItemIcon, ListItemText, Paper, Stack, Typography} from '@mui/material'
import {FaMap} from 'react-icons/fa6'
import { LatLng, useLatLng } from '../localization/useLocation'
import {APIProvider, Map, useMap, useMapsLibrary} from '@vis.gl/react-google-maps'
import dotenv from 'dotenv'

dotenv.config()

const UseMap = () => {
    const [position, setPosition] = useState({} as LatLng)
    const loadedUserLatLng = useLatLng().loading
    if(!loadedUserLatLng){
        setPosition(prevValue=>({//uyo plaza or itam market lat and lng cord.
            ...prevValue,
            lat:47.6532,
            lng:-79.3832
        }))
    }else{
        setPosition({
            lat:useLatLng().coordinates.lat,
            lng:useLatLng().coordinates.lng
        })
    }
  return (
    <React.Fragment>
        <Stack height={550} width="100%">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!}>
                <Map center={position} zoom={4} fullscreenControl={false}></Map>
            </APIProvider>
        </Stack>
    </React.Fragment>
  )
}

const Directions = ()=>{
    const map = useMap()
    const routesLibrary = useMapsLibrary("routes")
    const [directionService, setDirectionService] = useState<google.maps.DirectionsService>()
    const [directionRenderer, setDirectionRenderer] = useState<google.maps.DirectionsRenderer>()
    const [routes, setRoutes] =useState<google.maps.DirectionsRoute[]>([])
    const [routeIndex, setRouteIndex] = useState(0)
    const selected = routes[routeIndex]
    const leg = selected?.legs[0]
    useEffect(()=>{
        if(!routesLibrary || !map){
            return
        }
        setDirectionService(new routesLibrary.DirectionsService())
        setDirectionRenderer(new routesLibrary.DirectionsRenderer(map))
        return ()=>{}
    },[routesLibrary, map])

    useEffect(()=>{
        if(!directionService || !directionRenderer){
            return
        }
        //query database to pick any vendors address(destination) closest to origin address
        directionService.route({
            origin: "entered address from input on map or address deduced from lat/lng/ipAddress",
            destination:"vendor's address from database",
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives:true
        })
        .then(response=>{
            directionRenderer.setDirections(response),
            setRoutes(response.routes)
        })
    },[directionService, directionRenderer])

    useEffect(()=>{
        if(!directionRenderer){
            return
        }
        directionRenderer.setRouteIndex(routeIndex)
    }, [routeIndex, directionRenderer])

    if(!leg){
        return null
    }
    return(
        <React.Fragment>
            <Paper elevation={4}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h2">{selected.summary}</Typography>
                    <Typography variant="body1">
                        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
                    </Typography>
                    <Typography variant="body2">Distance: {leg.distance?.text}</Typography>
                    <Typography variant="body2">Duration: {leg.duration?.text}</Typography>
                    <Typography variant="h2">Other Routes</Typography>
                    <List>
                        {routes.map((route, index)=>(
                            <React.Fragment key={route.summary}>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={()=>setRouteIndex(index)}>
                                        <ListItemIcon>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FaMap/>
                                                </Avatar>
                                            </ListItemAvatar>
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <ListItemText primary={`${route.summary}`}/>
                                </ListItem>
                                <Divider orientation="horizontal" flexItem/>
                            </React.Fragment>
                        ))}
                    </List>
                </Stack>
            </Paper>
        </React.Fragment>
    )
}

export default UseMap