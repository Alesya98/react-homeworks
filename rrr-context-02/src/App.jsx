import './App.css'
import ControlsPanel from './ControlsPanel'
import Header from './Header'
import { LanguageProvader } from './LanguageContext'
import { ThemeProvaider } from './ThemeContext'
import UseProfile from './UseProfile'

function App() {


  return (
    <div>
    <LanguageProvader>
      <ThemeProvaider>
        <Header/>
        <ControlsPanel/>
        <UseProfile/>
      </ThemeProvaider>
    </LanguageProvader>
    </div>
  )
}

export default App
