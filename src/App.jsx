import { useState, createContext, useEffect } from 'react'
import './App.css'
import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const ThemeContext = createContext(null);
const router = createBrowserRouter(routes)

function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  console.log(cartItems)
  useEffect(() => {
    const fetchData = async ()=> {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        setProducts(data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  },[])

  return (
    <ThemeContext.Provider value={{cartItems, products, setCartItems}}>
      <RouterProvider router={router}/>
    </ThemeContext.Provider>
  )
}

export {App, ThemeContext}