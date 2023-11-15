import {useState, useEffect} from 'react'

import v1 from '../assets/vehicles/vehicle1.png'
import v2 from '../assets/vehicles/vehicle2.png'
import v3 from '../assets/vehicles/vehicle3.png'
import v4 from '../assets/vehicles/vehicle4.png'

type planetObj = {
    name: string,
    distance: number,
    clicked:boolean,
    vehicle: string[],
}

type vehicleObj = {
    name: string,
    total_no: number,
    max_distance: number,
    speed: number,
    img:string,
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
                setPlanet(data.map((item:planetObj) => ({...item, clicked: false, vehicle: []})))
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
                setVehicles(data.map((item:vehicleObj,i:number) => ({...item, img: vArr[i]})))
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
        
        let id = 0
        let dist = 0 

        if(e.target instanceof HTMLElement){
            id = parseInt(e.target.id)
            dist = parseInt(e.target.dataset.dist!)
        }

        if(dist > vehicles[index].max_distance) return 

        setPlanet(prev => prev.map((item, i)=> ({
            ...item,
            vehicle: i === id ? [...item.vehicle, vehicles[index].img] : item.vehicle
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
    }

    return {
        planet,
        planetCount,
        vehicles,
        handleDragOver,
        handleDragStart,
        handleDrop,
        selectPlanet,
        addVehicles,
    }
}