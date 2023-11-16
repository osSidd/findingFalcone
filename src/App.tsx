import React, {Suspense} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.scss'

import useFetch from "./hooks/useFetch"

import Header from "./components/header/header"
const Home = React.lazy(() => import('./pages/home/home'))
const Main = React.lazy(() => import('./pages/main/main'))
const Result = React.lazy(() => import('./pages/result/result'))
const Error = React.lazy(() => import('./pages/error/error'))

export default function App(){

    const { main, result } = useFetch()
 
    return (
        <div className="App">
            <Header/>
            <main>
                {/* <Home/> */}
                <Main main={main}/>
                <Result result={result}/>
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