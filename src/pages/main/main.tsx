import React, {useState} from "react";
import './main.scss';
import useFetch from "../../hooks/useFetch";

import p1 from '../../assets/planets/planet1.png'
import p2 from '../../assets/planets/planet2.png'
import p3 from '../../assets/planets/planet3.png'
import p4 from '../../assets/planets/planet4.png'
import p5 from '../../assets/planets/planet5.png'
import p6 from '../../assets/planets/planet6.png'

import v1 from '../../assets/vehicles/vehicle1.png'
import v2 from '../../assets/vehicles/vehicle2.png'
import v3 from '../../assets/vehicles/vehicle3.png'
import v4 from '../../assets/vehicles/vehicle4.png'

export default function Main(){

    const {planet, vehicles, planetCount, selectPlanet, addVehicles} = useFetch()
    const pArr = [p1, p2, p3, p4, p5, p6]
    const vArr = [v1, v2, v3, v4]

    return (
        <section className="planet-container"> 
            {planet.length && planet.map((d, i) => {
               return (
                <div className="fig-container" key={d.name}>
                    <figure className={`figure ${planetCount >= 4 && !d.clicked && 'disable'}`}>
                        <img 
                            onClick={planetCount < 4 && !d.clicked ? e => {selectPlanet(e, d.name, i)}: undefined} 
                            className="planet-img" 
                            src={pArr[i]} 
                            alt="planet"
                        />
                        <figcaption>{d.name}</figcaption>
                        <figcaption>{d.distance} mm</figcaption>
                    </figure>
                </div>
                )
            })}
            <button onClick={addVehicles}>select vehicles</button>
            {
                vehicles.length && vehicles.map((v, i) => (
                    <div key={v.name}>
                        <img className="vehicle-img" src={vArr[i]} alt="vehicle" />
                        <figcaption>{v.name}</figcaption>
                        <figcaption>max distance {v.max_distance}</figcaption>
                        <figcaption>total {v.total_no}</figcaption>
                        <figcaption>speed {v.speed}</figcaption>
                    </div>
                ))
            }
        </section>
    )
}