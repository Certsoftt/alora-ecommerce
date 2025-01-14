import React from 'react'
import { useDeviceWidth } from '../../../../../../../hooks/providers/deviceWidth/DeviceWidthProvider'
import { DesignVariantType } from '../../DesignVariant'
import {v4} from 'uuid'

const FiveImagesStyle = ({imgs}:DesignVariantType) => {
    const windowSize = useDeviceWidth().windowSize
    if(windowSize > 0 && windowSize <=1320){
        imgs?.map(img=>(
            <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.xs}  key={v4()}/>
        ))
    }
    if(windowSize > 320 && windowSize <=375){
        imgs?.map(img=>(
            <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.sm} key={v4()}/>
        ))
    }
    if(windowSize > 375 && windowSize <=425){
        imgs?.map(img=>(
            <img loading="lazy" alt="banner" src={img.img} style={img.deviceStyle.md} key={v4()}/>
        ))
    }
  return null
}

export default FiveImagesStyle