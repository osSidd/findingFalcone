import React, {useEffect, useState} from 'react'
import './result.scss'

import { result, resultObj } from '../../customTypes/types'
import { useNavigate } from 'react-router-dom'

type Props = {
    result: result
}

export default function Result({result}: Props){

    const navigate = useNavigate()
 
    const {getResult, timeTaken, reset} = result
    const [res, setRes] = useState<resultObj>({planet_name: '', status: '', error:''})

    async function getData(){
        try{
            const data = await getResult()
            setRes(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function goTo(path:string){
        navigate(path)
        reset()
    }

    return (
        <div className='result-container'>
            {
               res.status && 
                    (
                    res.status === 'success' ? 
                        <h2>You found Queen Falcone on {res.planet_name}</h2> : 
                        <h2>You Failed</h2>
                    )
            }
            <p>Time taken for the search operation = {timeTaken} hours</p>
            <div className='btn-container'>
                <button onClick={() => {goTo('/')}}>home</button>
                <button onClick={() => {goTo('/find')}}>play again</button>
            </div>
        </div>
    )
}