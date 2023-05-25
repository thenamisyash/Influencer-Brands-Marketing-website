import React from 'react'
import Ranbir from '../Images/ranbir.jpg';
import Sachin from '../Images/masterblaster.jpg';
import Virat from '../Images/virat.jpg';
function Fans() {
    return (
        <>
            <section id='fans'>
                <div className='head-fans'>
                    <h3>Top Fans</h3>
                </div>
                <div className='fans-part'>
                    <div className='item-fans'>
                        <img src={Ranbir} alt="peoples" width="150px" height="150px" />
                        <p>Name</p>
                    </div>
                    <div className='item-fans'>
                        <img src={Sachin} alt="peoples" width="150px" height="150px" />
                        <p>Name</p>
                    </div>
                    <div className='item-fans'>
                        <img src={Virat} alt="peoples" width="150px" height="150px" />
                        <p>Name</p>
                    </div>
                </div>
                {/* <hr /> */}
            </section>
        </>
    )
}

export default Fans;