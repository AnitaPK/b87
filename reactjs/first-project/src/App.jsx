import { useState } from 'react'
import './App.css'
import Flower from './components/Flower'
import MoreInfo from './components/MoreInfo'

function App() {

  return (
    <>
      <Flower />
      <MoreInfo></MoreInfo>
      <h1> Hello world </h1>
      <p>Lorem, ipsum dolor.</p>
      <pre>
        npm create vite@latest project-name  <br />
        framework =&gt React  <br />
        variant =&gt javascript <br />
        linter =&gt jslint  <br />
        <br /><br />
        install Y or N <br />
        after no <br />
        open project in new window of VS code <br />
        <br />
        npm install      create package.json and node_modules/  <br />
        <br />
        npm run dev <br />
        ctrl + c<br />
        <br /><br />
        http://localhost:5173   <br />
        <br /><br />
        App.css + index.css + App.jsx code within return <br />
      </pre>
    </>
  )
}

export default App
