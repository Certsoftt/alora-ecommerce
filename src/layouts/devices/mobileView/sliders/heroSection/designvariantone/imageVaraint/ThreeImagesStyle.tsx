import React from 'react'
import { useDeviceWidth } from '../../../../../../../hooks/providers/deviceWidth/DeviceWidthProvider'
import { DesignVariantType } from '../../DesignVariant'

const ThreeImagesStyle = ({imgs}:DesignVariantType) => {
    const windowSize = useDeviceWidth().windowSize
    if(windowSize > 0 && windowSize <=320){
        imgs?.map(img=>(
            <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.xs}/>
        ))
    }
    if(windowSize > 320 && windowSize <=375){
        imgs?.map(img=>(
            <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.sm}/>
        ))
    }
    if(windowSize > 375 && windowSize <=425){
        imgs?.map(img=>(
            <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.md}/>
        ))
    }
  return null
}

export default ThreeImagesStyle