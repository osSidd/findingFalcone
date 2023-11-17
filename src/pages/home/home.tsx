import React from 'react'
import {useNavigate} from 'react-router-dom'
import './home.scss'
import ErrorBoundary from '../../errorBoundary/errorBoundary'

export default function Home(){

    const navigate = useNavigate()

    function goTo(e: React.SyntheticEvent): void{
       navigate('/find')
    }

    return (
        <ErrorBoundary>
            <section>
                <div className="problem-statement">
                    <p>
                        <strong>King Shan</strong> is the king of the planet <strong>Lengaburu</strong>, in the distant distant galaxy of Tara B. After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years. <strong>Queen Al Falcone</strong> is now in hiding. But if King Shan can find her before the years are up, she will be exiled for another 15 years….
                    </p>
                    <p>
                        King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - <strong>DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor</strong>. However he has limited resources at his disposal & can send his army to only 4 of these planets.
                    </p>
                    <p>
                        Help King Shan find Al Falcone.
                    </p>
                </div>
                <button onClick={goTo}>Find Falcone</button>
            </section>
        </ErrorBoundary>
    )
}