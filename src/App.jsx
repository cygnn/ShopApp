import { useState, useContext, createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HoverCart from './components/HoverCart'
import ShopPage from './pages/ShopPage'
import Cards from './components/Card'


const ThemeContext = createContext(null);

function App() {
  const obj = {title: 'TEST',price: '15.55', src: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc6c06ec983fb410f57f11656eaa4166f8c1ec4.jpg],origin[dam],category[men_tshirtstanks_printed],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]', quantity: 2 }
  const [cartItems, setCartItems] = useState([obj])
  console.log(cartItems)
  return (
    <ThemeContext.Provider value={cartItems}>
      {/* <Cards
        item={obj}
      /> */}
      <ShopPage />
    </ThemeContext.Provider>
  )
}

export {App, ThemeContext}