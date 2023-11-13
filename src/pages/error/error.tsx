import React from 'react'
import {Link} from 'react-router-dom'

export default function ErrorPage(){
    return (
        <div>
            <h2>404 page not found</h2>
            <p>return to <Link to="/">Home</Link></p>
        </div>
    )
}