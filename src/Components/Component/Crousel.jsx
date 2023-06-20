import React from "react";
import { Carousel } from "react-bootstrap";
import Bounty from "./BountyReg";
import BrandAmbasador from "./BrandAmbasador";
import Explore from "./Explore";
import Rewards from "./Rewards";
import './Bounty.css';
import { useNavigate } from "react-router-dom";
const Crousel = () => {
    const navigate = useNavigate();
    const skip = () => {
        navigate("/Influencer/profile")
    }
    return (
        <>
            <Carousel slide={false} className="carousel">
                <Carousel.Item>
                    <Bounty />
                </Carousel.Item>
                <Carousel.Item>
                    <Explore />
                </Carousel.Item>
                <Carousel.Item>
                    <BrandAmbasador />
                </Carousel.Item>
                <Carousel.Item>
                    <Rewards />
                </Carousel.Item>
            </Carousel>
            
            <div style={{textAlign:"center"}}>
                <button className='skip' onClick={skip}>Skip</button>
            </div>
        </>
    );
}
export default Crousel;