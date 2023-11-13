import {useState, useEffect} from 'react'

type planetObj = {
    name: string,
    distance: number,
    clicked:boolean,
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
    
    async function fetchPlanets() {
        try{
            const response = await fetch('https://findfalcone.geektrust.com/planets')
            if(response.ok){
                const data = await response.json()
                setPlanet(data.map((item:planetObj) => ({...item, clicked: false})))
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
            const response = await fetch('https://findfalcone.geektrust.com/vehicles')
            if(response.ok){
                const data = await response.json()
                setVehicles(data)
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
    }

    return {
        planet,
        planetCount,
        vehicles,
        selectPlanet,
        addVehicles,
    }
}