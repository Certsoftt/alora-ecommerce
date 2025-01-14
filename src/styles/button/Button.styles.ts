const radius: number = 16
const borderRight = {
    borderTopRightRadius:radius,
    borderBottomRightRadius:radius,
}
const borderLeft = {
    borderTopLeftRadius:radius,
    borderBottomLeftRadius:radius,
}
const buttonStyle={
    textTransform:"capitalize",
    boxShadow: "0px 10px rgba(20, 20, 20, 0.05)",
    color:"black"
}
export const buttonLabelLanguageStyle = {
    ...borderLeft,
    ...borderRight,
    border:"none",
    ...buttonStyle
}
export const buttonLabelLeftStyle = {
    ...borderLeft,
    border:"none",
    ...buttonStyle
}
export const buttonLabelLeftStyleWithBorder = {
    ...borderLeft,
    border: "0.5px solid green",
    ...buttonStyle
}
export const buttonLabelLeftStyleWithBorderMobile = {
    ...buttonLabelLeftStyleWithBorder,
    fontSize: "10px"
    // transform: "scale(0.65)"
}
export const buttonLabelRightStyle = {
    ...borderRight,
    border:"none",
    ...buttonStyle
}
export const buttonLabelRightStyleWithBorder = {
    ...borderRight,
    border: "1px solid white",
    ...buttonStyle,
    color: "white",
    backgroundColor: "orangered"
}
export const buttonLabelRightStyleWithBorderMobile = {
    ...buttonLabelRightStyleWithBorder,
    fontSize: "10px"
    // transform: "scale(0.65)"
}
export const dropDownFontSize = {
    fonstSize: "0.5rem"
}
export const buttonLabelNoShadow = {
    ...borderRight,
    ...borderLeft,
    border:"none",
    textTransform:"capitalize",
    color:"black"
}
export const heroSliderButtonGroup={
    marginTop:"-4px !important",
    position: "relative",
    left:140,
    bottom: 30
}
export const heroSliderButtonGroupSlideOne={
    ...heroSliderButtonGroup,
    bottom: 60
}
export const heroSliderButtonGroupSlideTwo={
    ...heroSliderButtonGroup,
    bottom: 40
}
export const heroSliderButtonGroup375={
    ...heroSliderButtonGroup,
    left: 170,
}
export const heroSliderButtonGroup425={
    marginTop:"-15px !important",
    position: "relative",
    left:200,
    bottom: 30
}