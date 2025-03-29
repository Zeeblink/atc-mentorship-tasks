import './index.css'
import Extensions from './components/Extensions/extensions-list'
import ExtensionsHeader from './components/Extensions/extensions-header'

function App() {

  return (
    <div className='min-h-screen dark-gradient text-foreground p-4 md:px-24 md:py-12'>
      <ExtensionsHeader theme='light' toggleTheme={() => console.log('toggle theme')}/>
      <Extensions theme='dark'/> 
      {/* <FAQ />
      <RandomPostCard /> */}
    </div>
  )
}

export default App
