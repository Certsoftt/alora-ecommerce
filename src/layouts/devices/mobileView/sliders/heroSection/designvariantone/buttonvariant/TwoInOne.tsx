import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import DesignVariantOne from '../DesignVariantOne'
import {ButtonGroupType,ButtonLabelLeftStyle,ButtonLabelRightStyle} from '../../../../../../../types/button/Button.types'

type TwoInOneProps = {
    buttonGroup?: ButtonGroupType
    buttonLabelLeftStyle?: ButtonLabelLeftStyle
    buttonLabelRightStyle?: ButtonLabelRightStyle
    size:"medium"|"small"|"large"
} & React.ComponentProps<typeof DesignVariantOne>

const TwoInOne = ({cta_variant,button_one_text,button_two_text,
buttonLabelLeftStyle,buttonLabelRightStyle,buttonGroup,size}:TwoInOneProps) => {
  return (
    <React.Fragment>
        {cta_variant==="two_in_one" && (
            <ButtonGroup aria-label="groups of alignment button" size={size}
            orientation="horizontal" variant="outlined" sx={buttonGroup}>
                <Button sx={buttonLabelLeftStyle}>{button_one_text}</Button>
                <Button sx={buttonLabelRightStyle}>{button_two_text}</Button>
            </ButtonGroup>
        )}
    </React.Fragment>
  )
}

export default TwoInOne