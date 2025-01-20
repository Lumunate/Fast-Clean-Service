import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Home/footer/Footer'

export default function RootLayout({children}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar/>
        <div style={{ flex: "1" }}>
                {children}
            </div>
            <Footer/>
    </div>
  )
}
