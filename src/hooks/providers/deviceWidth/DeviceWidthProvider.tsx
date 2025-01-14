import React, {createContext, useEffect, useState, useContext} from 'react'

type DeviceWidthProviderProps = {
    children: React.ReactNode
}
type DeviceContextProviderValueProps ={
    windowSize: number
}
const DeviceContext = createContext({} as DeviceContextProviderValueProps)
const DeviceWidthProvider = ({children}:DeviceWidthProviderProps) => {
    const[windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            const DeviceWidth = window.innerWidth
            setWindowSize(DeviceWidth)
        })
        window.addEventListener("load", ()=>{
            const DeviceWidth = window.innerWidth
            setWindowSize(DeviceWidth)
        })

        return ()=>{
        }
    },[windowSize])
  return (
    <React.Fragment>
        <DeviceContext.Provider value={{windowSize}}>
            {children}
        </DeviceContext.Provider>
    </React.Fragment>
  )
}

export const useDeviceWidth = ()=>{
    return useContext(DeviceContext)
}

export default DeviceWidthProvider