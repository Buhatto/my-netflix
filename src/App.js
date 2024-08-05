import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Tab3 from './components/tab3/Tab3'
import Footer from './components/footer/Footer'
import Tab1 from './components/tab1/Tab1'
import Tab2 from './components/tab2/Tab2'
function App() {
    return (
        <>
            <Header />
            <Nav />
            <Routes>
                <Route path='/' element={<Tab1 />} />
                <Route path='/tab2' element={<Tab2 />} />
                <Route path='/tab3' element={<Tab3 />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
