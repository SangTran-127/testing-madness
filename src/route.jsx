import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
const MyRoute = () => {
    return (
        <>
            <Header title="sang dep chai" />

            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MyRoute