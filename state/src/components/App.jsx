import { useState } from 'react'
import './App.css'
import Counter from './Counter/Counter'
import LikeButton from './LikeButton/LikeButton'

const App = () => {

  const [theme, setTheme] = useState('light')

  const switchTheme = e => {
    const themeValue = e.target.value
    setTheme(themeValue)
  }

  return (

    <div className={`App ${theme}`}>

      <Counter />

      <hr />

      <select onChange={switchTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
        <option value="hc"> High Contrast </option>
      </select>

      <hr />

      <LikeButton />
      <LikeButton />
      <LikeButton />
      <LikeButton />

      <hr />

    </div >
  )
}

export default App