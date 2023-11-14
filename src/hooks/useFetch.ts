import {useState, useEffect} from 'react'

import v1 from '../assets/vehicles/vehicle1.png'
import v2 from '../assets/vehicles/vehicle2.png'
import v3 from '../assets/vehicles/vehicle3.png'
import v4 from '../assets/vehicles/vehicle4.png'

type planetObj = {
    name: string,
    distance: number,
    clicked:boolean,
    vehicle: string,
}

type vehicleObj = {
    name: string,
    total_no: number,
    max_distance: number,
    speed: number,
}

export default function useFetch(){  

    const [planet, setPlanet] = useState<planetObj[]>([])
    const [vehicles, setVehicles] = useState<vehicleObj[]>([])
    const [planetCount, setPlanetCount] = useState(0)

    const vArr = [v1, v2, v3, v4]
    
    async function fetchPlanets() {
        try{
            const response = await fetch('https://findfalcone.geektrust.com/planets', {mode: 'cors'})
            if(response.ok){
                const data = await response.json()
                setPlanet(data.map((item:planetObj) => ({...item, clicked: false, vehicle: ''})))
            }
        }catch(err){
            console.log(err)
        }   
    }

    function selectPlanet(e: React.SyntheticEvent, name:string, index:number){
        console.log('clicked')
        if(e.target instanceof HTMLElement){
            e.target.style.transform='scale(1.25)'
        } 
        setPlanet(prev => prev.map((d, i) => ({...d, clicked: i === index ? !d.clicked : d.clicked})))
        setPlanetCount(prev => prev+1)
    }

    useEffect(() => {
        fetchPlanets()
    }, [])

    async function addVehicles(){
        try{
            const response = await fetch('https://findfalcone.geektrust.com/vehicles', {mode: 'cors'})
            if(response.ok){
                const data = await response.json()
                setVehicles(data)
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
    }

    function handleDragStart(e:React.DragEvent, index:number){
        e.dataTransfer.setData('text', `${index}`)
    }

    function handleDragOver(e:React.DragEvent){
        e.preventDefault()
    }

    function handleDrop(e:React.DragEvent){
        const index = parseInt(e.dataTransfer.getData('text'))
        let id = ''
        if(e.target instanceof HTMLElement)
            id = e.target.id
    
        setPlanet(prev => prev.map((item, i)=> ({
            ...item,
            vehicle: i === parseInt(id) ? vArr[index] : item.vehicle
        })))
    }

    return {
        planet,
        planetCount,
        vehicles,
        handleDragOver,
        handleDragStart,
        handleDrop,
        vArr,
        selectPlanet,
        addVehicles,
    }
}