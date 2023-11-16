import React from 'react'

import { result } from '../../customTypes/types'

type Props = {
    result: result
}

export default function Result({result}: Props){
 
    const {timeTaken} = result
    const {planet_name, status, error} = result.result
    return (
        <div>
            <p>Result</p>
            {
                status === 'success' ? <h1>You found Queen Falcone on {planet_name}</h1> : <h1>You Failed</h1>
            }
            <h2>Time Taken = {timeTaken}</h2>
        </div>
    )
}