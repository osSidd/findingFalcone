import React from "react";
import './main.scss';

import p1 from '../../assets/planets/planet1.png'
import p2 from '../../assets/planets/planet2.png'
import p3 from '../../assets/planets/planet3.png'
import p4 from '../../assets/planets/planet4.png'
import p5 from '../../assets/planets/planet5.png'
import p6 from '../../assets/planets/planet6.png'

import { mainObj } from "../../customTypes/types";

type Props = {
    main : mainObj
}

export default function Main({main}:Props){

    const {
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
    } = main

    const pArr = [p1, p2, p3, p4, p5, p6]

    return (
        <section className="main-section"> 
            <p>Time Taken {timeTaken}</p>
            <div className="vehicle-container">
            {
                vehicles.length ? vehicles.map((v, i) => (
                    <div className="vehicles" key={v.name}>
                        <img
                            draggable
                            onDragStart={e => handleDragStart(e, i)} 
                            className="vehicle-img" 
                            src={v.img} 
                            alt="vehicle" 
                        />
                        <figcaption>{v.name}</figcaption>
                        <figcaption>max distance {v.max_distance}</figcaption>
                        <figcaption>total {v.total_no}</figcaption>
                        <figcaption>speed {v.speed}</figcaption>
                    </div>
                )) : null
            }
            </div>
            
            <div className="planet-container">
            {
                planets.length ? planets.map((d, i) => {
                return (
                    <div 
                        className="fig-container" 
                        key={d.name} 
                        onDragOver={d.clicked ? handleDragOver: undefined} 
                        onDrop={d.clicked ? handleDrop : undefined}
                    >
                        <figure className={`figure ${planetCount >= 4 && !d.clicked && 'disable'}`}>
                            <img
                                id={`${i}`}
                                data-dist={d.distance}
                                onClick={planetCount < 4 && !d.clicked ? e => {selectPlanet(e, d.name, i)}: undefined} 
                                className="planet-img" 
                                src={pArr[i]} 
                                alt="planet"
                            />
                            <figcaption>{d.name}</figcaption>
                            <figcaption>{d.distance} mm</figcaption>
                        </figure>
                        <div className="drop-vehicle">
                        { d.vehicle && <img className="vehicle-img" src={d.vehicle} alt='vehicle' key={i}/> }
                        </div>
                    </div>
                    )
                }) : null
            }
            </div>
            
            <button 
                onClick={getResult} 
                disabled={planetReached.length < 4 ? true : false} 
                className="result-btn"
            >
                see result
            </button>

        </section>
    )
}