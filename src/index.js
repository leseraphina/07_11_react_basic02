import React from 'react'
import ReactDOM from 'react-dom/client'
import Sec01 from './component/Sec01'
import Sec02 from './component/Sec02'

function App(){
  return (
    <>
    <Sec01 />
    <Sec02 />
    </>
  )
}
  const root = document.querySelector('#root')
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  )
  // ReactDOM.render(
  //   <App />,root
  // )

