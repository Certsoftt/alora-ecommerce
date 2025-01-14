import React,{createContext, useContext} from 'react'
import store1 from '../../../assets/stores/store1.jpg'
import store2 from '../../../assets/stores/store2.jpg'
import store3 from '../../../assets/stores/store3.jpg'
import store4 from '../../../assets/stores/store4.webp'
import store5 from '../../../assets/stores/store5.png'
import store6 from '../../../assets/stores/store6.png'
import store7 from '../../../assets/stores/store7.png'
import store8 from '../../../assets/stores/store8.jpg'
import store9 from '../../../assets/stores/store9.jpg'
import store10 from '../../../assets/stores/store10.jpg'
import store11 from '../../../assets/stores/store11.jpg'
import store12 from '../../../assets/stores/store12.jpg'
import store13 from '../../../assets/stores/store13.jpg'
import store14 from '../../../assets/stores/store14.jpg'
import store15 from '../../../assets/stores/store15.jpg'

type FlashSaleContextType = {
  flashSales: {
    height: number
    price: number
    minutes_ago: number
    vegetables: string
    storename: string
    bgColor: string
    storelogo: any
    percentage: string
  }[]
  productCategories: Array<string>
  storeCategories: Array<string>
}

type FlashSaleProviderProps = {
  children: React.ReactNode
}

const FlashSaleContext = createContext({} as FlashSaleContextType)

const FlashSaleProvider = ({children}:FlashSaleProviderProps) => {
  const heights = [150, 200, 290, 270, 110, 150, 130, 180, 250, 190, 100, 150, 30, 250, 280]
    const price = [150, 200, 290, 270, 110, 150, 130, 180, 250, 190, 100, 150, 30, 250, 280]
    const mins = [1, 2, 9, 7, 11, 15, 3, 8, 5, 19, 10, 15, 30, 50, 28]
    const img = [store1,store2,store3,store4,store5,store6,store7,store8,store9,store10,store11,store12,store13,store14,store15]
    const bgColor = ['palevioletred','olivedrab','goldenrod','palevioletred','olivedrab','goldenrod','orangered','rgb(235, 175, 115)',
    'palevioletred','green','plum','goldenrod', 'olivedrab','goldenrod','palevioletred']
    const productCategories = ['Vegetables','Groceries']
    const storeCategories = ['Preska','MILA','JOF','FreshShop']
    const storename = ['Grain Store', 'NutShop', 'Carrot Valley', 'Milian', 'Sheer','JOF',
    'FreshShop','YourFruit','Xplore','BestVeg','FineGrains','Carreal','MILS','Greener','VITA']
    const vegetables = ["Carrot", "Apple", "Pinapple", "Orange", "Berries", "Tomatoes", "Onions", 
    "Mushroom","Pepper","Water Leaf","Garden Egg","Paw Paw", "Water Melon", "Cucumber","Ginger"]
    const percentage=["70","30","50","70","30","50","45","80","70","35","40","50","30","50","70"]
    const flashSales = heights.map((height, index)=>(
        {
            height:height,
            price:price[index],
            minutes_ago: mins[index],
            vegetables: vegetables[index],
            storename: storename[index],
            bgColor: bgColor[index],
            storelogo: img[index],
            percentage:percentage[index]
        }
    ))
  return (
    <FlashSaleContext.Provider value={{flashSales,productCategories,storeCategories}}>
      {children}
    </FlashSaleContext.Provider>
  )
}

export const useFlashSale = ()=>{
  return useContext(FlashSaleContext)
}

export default FlashSaleProvider