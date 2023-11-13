import React, {Suspense} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.scss'

import Header from "./components/header/header"
const Home = React.lazy(() => import('./pages/home/home'))
const Main = React.lazy(() => import('./pages/main/main'))
const Error = React.lazy(() => import('./pages/error/error'))

export default function App(){
    return (
        <div className="App">
            <Header/>
            <main>
                <Main/>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="find" element={<Main/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Routes>
                </BrowserRouter>
            </Suspense> */}
            </main>
        </div>
    )
}