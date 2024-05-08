import './App.css'
import { DataContainer } from './components/DataContainer/DataContainer';
import { MainScreen } from './components/MainScreen/MainScreen'
import "primereact/resources/themes/lara-light-cyan/theme.css";
function App() {

  return (
    <>
      <MainScreen/>
      <DataContainer/>
      </>
  )
}

export default App
