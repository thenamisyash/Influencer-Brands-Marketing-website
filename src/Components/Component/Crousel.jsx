import React from "react";
import { Carousel } from "react-bootstrap";
import Bounty from "./BountyReg";
import BrandAmbasador from "./BrandAmbasador";
import Explore from "./Explore";
import Rewards from "./Rewards";
import './Bounty.css';
const Crousel = () => {
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
            
        </>
    );
}
export default Crousel;