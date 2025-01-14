import React, {useState, useEffect, useRef, useContext,useCallback} from 'react'
import axios from 'axios'

export type LatLng = {
    lat: number
    lng: number
}

type LatLngAndLoading = {
    loading: boolean
    coordinates: LatLng
}

type UserLocation = {
    loading: boolean
    error:{
        code:number,
        message: string
    }
    coordinates:LatLng
}

type useLocationProps = {
    children: React.ReactNode
}

const UseLatLngContext = React.createContext({} as LatLngAndLoading)

const UseLocation = ({children}:useLocationProps) => {
    const lat = useRef(0)
    const lng = useRef(0)
    const [{loading, error, coordinates}, setLocation] = useState({
        loading: false,
        error: {
            code:0,
            message:"User Denied Permission"
        },
        coordinates:{
            lat:0,
            lng:0
        }
    } as UserLocation)
    
    const onError = useCallback(
        ()=>{
            setLocation(prevValue=>({
                ...prevValue,
                loading:false,
                error: error,
            }))
        },[error])
    useEffect(()=>{
        getUserIPInfo()
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
        return()=>{}
    },[onError])
    
    const getUserIPInfo = async ()=>{
        await axios.get(`https://api.ipify.org`)
        .then(async (response)=>{
            const userIPAddress = JSON.stringify(response.data)
            await axios.get(`https://ip-api.com/json/${userIPAddress}`)
            .then(response=>{
                lat.current = response.data.lat
                lng.current = response.data.lng
            })
        }).catch(error=>{
            console.log(`Error: ${error.message}`)
        })
    }

    const onSuccess = ()=>{
        setLocation({
            loading:true,
            error:{
                code: 1,
                message:"Loacation permitted"
            },
            coordinates:{
                lat:lat.current,
                lng:lng.current
            }
        })
    }
  return (
    <React.Fragment>
        <UseLatLngContext.Provider value={{loading, coordinates}}>
            {children}
        </UseLatLngContext.Provider>
    </React.Fragment>
  )
}

export const useLatLng = ()=>{
    return useContext(UseLatLngContext)
}

export default UseLocation