const mobileStyle = {
    transform: "scale(0.5)",
    marginLeft: "-34px !important"
}
export const heroSliderOneFirstTypo ={
    color:"orangered", 
    fontWeight:900
}
export const heroSliderOneFirstTypoV2 ={
    color:"green", 
    fontWeight:700
}
export const mobileHeroSliderOneFirstTypo ={
    ...heroSliderOneFirstTypo,
    ...mobileStyle,
}
export const mobileHeroSliderOneFirstTypoV2 ={
    ...heroSliderOneFirstTypo,
    color: "black",
    fontWeight: 400,
    ...mobileStyle,
}
export const heroSliderOneSecondTypo ={
    marginTop:"9px !important",
}
export const mobileHeroSliderOneSecondTypo ={
    ...heroSliderOneSecondTypo,
    ...mobileStyle,
    marginTop:"-9px !important",
}
export const mobileHeroSliderOneSecondTypoV2 ={
    ...heroSliderOneSecondTypo,
    ...mobileStyle,
    transform: "scale(0.2)",
    marginTop:"-9px !important",
}
export const heroSliderOneThirdTypo ={
    marginTop:"5px !important", 
    textShadow: "3px 2px grey"
}
export const mobileHeroSliderOneThirdTypo ={
    ...heroSliderOneThirdTypo,
    ...mobileStyle,
    marginTop:"-15px !important", 
}
export const mobileHeroSliderOneThirdTypoV2 ={
    ...mobileHeroSliderOneThirdTypo,
    color:"orangered" 
}
export const heroSliderOneBodyOneTypo={
    backgroundColor:"grey", 
    color:"white",
    paddingLeft:3,
    border:"none"
}
export const mobileHeroSliderOneBodyOneTypo={
    color:"grey",
    border:"none",
    // fontStyle:"italic",
    fontFamily: "Roboto",
    fontWeight: 500,
    marginTop: "-7px !important",
    marginLeft:"10px !important",
    textShadow: "3px 2px white"
}

export const mobileHeroSliderOneBodyOneTypo375 ={
    ...mobileHeroSliderOneBodyOneTypo,
    marginLeft: "17px !important"
}
export const mobileHeroSliderOneBodyOneTypo425 ={
    ...mobileHeroSliderOneBodyOneTypo,
    marginLeft: "20px !important"
}