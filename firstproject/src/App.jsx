import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/Demo'

function App() {
 return(
  <div>
    <h1>I am prashansha</h1>
     <h1>Inside app component</h1>
     <Employee></Employee>\
     <Demo></Demo>
  </div>
 )
}
function Employee(){
  return(
     <h1>the employee name is prashansha</h1>
  )
}
export default App
