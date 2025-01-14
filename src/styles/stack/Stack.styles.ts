export const HeroOneSliderContainer = {
    width:"95%", 
    // marginTop:"86px",
    border:"0.2px solid orangered",
    borderRadius:13,
    marginRight: "72px",
    marginLeft: "72px",
    paddingTop: "24px",
    paddingBottom: "24px",
}
export const HeroOneSliderContainerMobile = {
    ...HeroOneSliderContainer,
    marginRight: "16px",
    marginLeft: "6.5px",
    overflow: "hidden"
}
export const HeroPaper = {
    borderRadius:13,
    width: "95%",
    overflow: "hidden",
    marginTop:"86px",
    marginLeft: "8px", 
    paddingTop: "4px",
    paddingBottom: "4px",   
}

//SearchSection Starts

export const searchSeactionCommonStyle = {
    JustifyContent:"center", 
    alignItems:"center"
}
export const commonStyleWithMargin = {
    ...searchSeactionCommonStyle,
}
export const searchSectionHeadingText = {
    fontSize:"41px",
    textShadow: "2px 2px grey",
    fontWeight:700
}

export const searchSectionMobileHeadingText = {
    ...searchSectionHeadingText,
    fontSize:"20px",
}
export const searchSectionContainerBorder ={
    border:"1px solid orangered",
    marginBottom:"80px"
}
export const searchSectionMobileInputBox = {
    width:{xs:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}
}
export const searchSectionInputBox = {
    ...searchSectionMobileInputBox,
    marginLeft:"16px"
}
export const searchSectionOR = {
    ...searchSeactionCommonStyle,
    marginTop: "16px"
}
export const searchSectionExplore = {
    ...searchSeactionCommonStyle,
    marginTop: "80px"
}
export const searchSectionPickRegionBtn = {
    ...searchSeactionCommonStyle,
    marginTop:"12px",
    marginRight:"16px"
}

//Tab Section start
export const tabSection = {
    marginTop:"40px",
    marginBottom:"80px",
}
export const flashSectionBannerImage1 = {
    ...searchSeactionCommonStyle,
    justifyContent: "flex-end"
}
export const flashSectionBannerImage2 = {
    ...searchSeactionCommonStyle,
    flexDirection:"flex-start"
}