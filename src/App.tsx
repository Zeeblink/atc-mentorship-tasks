import './index.css'
import Extensions from './components/Extensions/extensions-list'
import ExtensionsHeader from './components/Extensions/extensions-header'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark') // State to manage the theme of the app

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light')) // Toggle the theme state
  }
  
  return (
    <div className={`${theme === 'dark' ? 'dark-gradient' : 'light-gradient'} min-h-screen  text-foreground p-4 md:px-24 md:pt-10 md:pb-12`}>
      <ExtensionsHeader theme={theme} toggleTheme={() => toggleTheme()}/>
      <Extensions theme={theme}/> 
      {/* <FAQ />
      <RandomPostCard /> */}
    </div>
  )
}

export default App
