import {useState, useEffect} from 'react'

import v1 from '../assets/vehicles/vehicle1.png'
import v2 from '../assets/vehicles/vehicle2.png'
import v3 from '../assets/vehicles/vehicle3.png'
import v4 from '../assets/vehicles/vehicle4.png'

import {planetObj, vehicleObj, planetVehicle, resultObj} from '../customTypes/types'
const vArr = [v1, v2, v3, v4]

export default function useFetch(){  

    const [planets, setPlanets] = useState<planetObj[]>([])
    const [vehicles, setVehicles] = useState<vehicleObj[]>([])
    const [planetCount, setPlanetCount] = useState(0)
    const [planetReached, setPlanetReached] = useState<planetVehicle[]>([])
    const [token, setToken] = useState('')
    const [timeTaken, setTimeTaken] = useState(0)
    const [result, setResult] = useState<resultObj>({planet_name: '', status: '', error: ''})
    
    //add planets
    async function fetchPlanets() {
        try{
            const response = await fetch('https://findfalcone.geektrust.com/planets', {mode: 'cors'})
            if(response.ok){
                const data = await response.json()
                setPlanets(data.map((item:planetObj) => ({...item, clicked: false, vehicle: ''})))
            }
        }catch(err){
            console.log(err)
        }   
    }

    //select planet upon click
    function selectPlanet(e: React.SyntheticEvent, name:string, index:number){
        if(e.target instanceof HTMLElement){
            e.target.style.transform='scale(1.25)'
        } 
        setPlanets(prev => prev.map((d, i) => ({...d, clicked: i === index ? !d.clicked : d.clicked})))
        setPlanetCount(prev => prev+1)
    }

    //add vehicles
    async function addVehicles(){
        try{
            const response = await fetch('https://findfalcone.geektrust.com/vehicles', {mode: 'cors'})
            if(response.ok){
                const data = await response.json()
                setVehicles(data.map((item:vehicleObj,i:number) => ({...item, img: vArr[i]})))
            }
        }catch(err){
            console.log(err)
        }
    }

    async function fetchToken() {
        try{
            const response = await fetch('https://findfalcone.geektrust.com/token', {
                method: 'POST',
                mode: 'cors',
                headers:{
                    "Accept": "application/json"
                },
            })

            if(response.ok){
                const data = await response.json()
                setToken(data.token)
            }

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchToken()
        fetchPlanets()
        addVehicles()
    }, [])

    //handle drag start event
    function handleDragStart(e:React.DragEvent, index:number){
        e.dataTransfer.setData('text', `${index}`)
    }

    //handle drag over event
    function handleDragOver(e:React.DragEvent){
        e.preventDefault()
    }

    //handle drop event
    function handleDrop(e:React.DragEvent){
        
        const index = parseInt(e.dataTransfer.getData('text'))
        
        let id = 0
        let dist = 0
        let planet = ''
        let vehicle = vehicles[index].name 

        if(e.target instanceof HTMLElement){
            id = parseInt(e.target.id)
            dist = parseInt(e.target.dataset.dist!)
            planet = planets[id].name
        }

        if(dist > vehicles[index].max_distance || planets[id].vehicle) return 

        setPlanets(prev => prev.map((item, i)=> ({
            ...item,
            vehicle: i === id ? vehicles[index].img : item.vehicle
        })))

        setVehicles(prev => {
            let arr:vehicleObj[] = []
            prev.forEach((item, i) => {
                if(i === index){
                   if(item.total_no > 1) arr.push({...item, total_no: item.total_no - 1})
                }
                else arr.push(item)
            })
            return arr
        })

        setTimeTaken(prev => prev + Math.floor(dist/vehicles[index].speed))

        setPlanetReached(prev => ([...prev, {planet, vehicle}]))
    }

    //get result
    async function getResult() {
        try{
            const response = await fetch('https://findfalcone.geektrust.com/find', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token, planet_names: planetReached.map(item => item.planet), vehicle_names: planetReached.map(item => item.vehicle)})
            })

            if(response.ok){
                const data = await response.json()
                setResult(data)
            }
        }catch(err){
            console.log(err)
        }
    }

    return {
        main:{
            planets,
            planetCount,
            vehicles,
            planetReached,
            timeTaken,
            handleDragOver,
            handleDragStart,
            handleDrop,
            selectPlanet,
            getResult,
        },
        result: {
            result,
            timeTaken,
        },
    }
}