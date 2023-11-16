import React from "react";
import './main.scss';

import p1 from '../../assets/planets/planet1.png'
import p2 from '../../assets/planets/planet2.png'
import p3 from '../../assets/planets/planet3.png'
import p4 from '../../assets/planets/planet4.png'
import p5 from '../../assets/planets/planet5.png'
import p6 from '../../assets/planets/planet6.png'

import { mainObj } from "../../customTypes/types";
import { useNavigate } from "react-router-dom";

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
        reset,
    } = main

    const pArr = [p1, p2, p3, p4, p5, p6]

    const navigate = useNavigate()

    function goTo(){
        navigate('/result')
    }

    function goHome(){
        navigate('/')
        reset()
    }

    return (
        <section className="main-section"> 

            <div className="btn-container">
                <button className="reset-btn" onClick={reset}>reset</button>
                <button className="home-btn" onClick={goHome}>home</button>
            </div>    

            <Rules/>
            <div className="vehicle-container">
            {
                vehicles.length ? vehicles.map((v, i) => (
                    <div className="vehicles" key={v.name}>
                        <figure className="figure">
                            <img
                                draggable
                                onDragStart={e => handleDragStart(e, i)} 
                                className="vehicle-img" 
                                src={v.img} 
                                alt="vehicle" 
                            />
                            <figcaption className="name">{v.name}</figcaption>
                            <figcaption>
                                max distance - <strong>{v.max_distance}</strong> / speed - <strong>{v.speed}</strong>
                            </figcaption>
                            <figcaption>total - <strong>{v.total_no}</strong></figcaption>
                        </figure>
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
                                className={`planet-img ${d.clicked && 'planet-selected'}`} 
                                src={pArr[i]} 
                                alt="planet"
                            />
                            <figcaption className="name">{d.name}</figcaption>
                            <figcaption>distance <strong>{d.distance}</strong></figcaption>
                        </figure>
                        <div className="drop-vehicle">
                        { d.vehicle && <img className="vehicle-img" src={d.vehicle} alt='vehicle' key={i}/> }
                        </div>
                    </div>
                    )
                }) : null
            }
            </div>
            
            <p>Time Taken {timeTaken}</p>
            
            <button 
                onClick={goTo} 
                disabled={planetReached.length < 4 ? true : false} 
                className="result-btn"
            >
                show result
            </button>
            <small>(distance unit - megamiles / speed unit - megamiles/hour)</small>
        </section>
    )
}

function Rules(){
    return (
        <>
            <p>STEPS</p>
            <ol>
                <li>First select 4 planets by clicking them</li>
                <li>Drag and drop a vehicle image onto a planet images to assign the vehicle to the planet</li>
                <li>Upon selecting 4 planets and assigning vehicles to each, click 'show result' button to see result</li>
                <li>If no vehicle is assignable to a planet, hit reset button</li>
            </ol>
            <p>NOTE - Vehicles cannot be dropped on:-</p>
            <ul>
                <li>planets which are not selected</li>
                <li>planets which are farther away than the maximum distance the vehicle can travel</li>
                <li>planets which already have a vehicle assigned</li>
            </ul> 
        </>
    )
}