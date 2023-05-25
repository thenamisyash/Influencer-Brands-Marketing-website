import React from 'react'
import Ranbir from '../Images/ranbir.jpg';
import Sachin  from '../Images/masterblaster.jpg';
import Virat from '../Images/virat.jpg';
function BrandAmbassador() {
    return (
        <>
            <section id='brand-amba'>
                <div className='head-part'>
                    <h3>Brand Ambassador</h3>
                </div>
                <div className='popular'>
                    <div className='item'>
                        <img src={Ranbir} alt="peoples" width="150px" height="150px" />
                        <p>Ranbir</p>
                    </div>
                    <div className='item'>
                        <img src={Sachin} alt="peoples" width="150px" height="150px" />
                        <p>Sachin</p>
                    </div>
                    <div className='item'>
                        <img src={Virat} alt="peoples" width="150px" height="150px"/>
                        <p>King Kohli</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BrandAmbassador;