import React, {useState} from "react";
import './main.scss';
import useFetch from "../../hooks/useFetch";

import p1 from '../../assets/planets/planet1.png'
import p2 from '../../assets/planets/planet2.png'
import p3 from '../../assets/planets/planet3.png'
import p4 from '../../assets/planets/planet4.png'
import p5 from '../../assets/planets/planet5.png'
import p6 from '../../assets/planets/planet6.png'


export default function Main(){

    const {planet, vehicles, planetCount, vArr, handleDragOver, handleDrop, handleDragStart, selectPlanet, addVehicles} = useFetch()
    const pArr = [p1, p2, p3, p4, p5, p6]

    return (
        <section> 
            <button onClick={addVehicles}>select vehicles</button>
            {
                vehicles.length && vehicles.map((v, i) => (
                    <div key={v.name}>
                        <img
                            draggable
                            onDragStart={e => handleDragStart(e, i)} 
                            className="vehicle-img" 
                            src={vArr[i]} 
                            alt="vehicle" 
                        />
                        <figcaption>{v.name}</figcaption>
                        <figcaption>max distance {v.max_distance}</figcaption>
                        <figcaption>total {v.total_no}</figcaption>
                        <figcaption>speed {v.speed}</figcaption>
                    </div>
                ))
            }

            {planet.length && planet.map((d, i) => {
               return (
                <div className="fig-container" key={d.name} onDragOver={handleDragOver} onDrop={handleDrop}>
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
                    <div>
                       { d.vehicle && <img className="vehicle-img" src={d.vehicle} alt='vehicle'/> }
                    </div>
                </div>
                )
            })}
        </section>
    )
}