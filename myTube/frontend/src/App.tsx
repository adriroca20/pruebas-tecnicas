import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './shared/Navbar'
import { Footer } from './shared/Footer'
import { Outlet } from 'react-router-dom'
import { IMedia } from './interfaces/media.interface'
import { useGetMediaQuery } from './state/slices/mediaSlice'

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-full bg-black -z-10"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
