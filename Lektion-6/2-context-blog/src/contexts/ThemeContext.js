import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

  const [isLightTheme, setIsLightTheme] = useState(true)

  const light = {
    text: '#333',
    ui: '#fff',
    bg: '#eee'
  }

  const dark = {
    text: '#fff',
    ui: '#333',
    bg: '#888'
  }

  return (
    <ThemeContextProvider value={{ isLightTheme, light, dark }}>
      { children }
    </ThemeContextProvider>
  )
}
