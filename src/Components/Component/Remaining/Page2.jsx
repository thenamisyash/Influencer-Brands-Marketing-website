import React from "react";
import Pic1 from '../src/img/colla.png';
import Pic2 from '../src/img/slice2.jpg';
import Pic3 from '../src/img/fb.png';
import Pic4 from '../src/img/insta.png';
import Heading from './Heading';
import mainLogo from './img/main_logo.png';
function Page2() {

    return (<>
        <div className="bar"> <img src = {mainLogo}/> </div>

{/* TOP BAR FOR NAVIGATING */}
        <Heading />

{/* BRAND LOGO / IMAGE / HASHTAG */}
        <div className="mainm">
            <div > <img src={Pic1} className="B_logo"/>
                   <img src={Pic2} className="B_desc"/> 
            </div>
        <h1 className=" hash">"#SLICEKIPETI"</h1>


{/* SOCIAL MEDIA / FAQ / APPLY */}
            <div className="social">
                <img src={Pic3} className="fb" />
                <img src={Pic4} className="insta" />
                <span className="s1" >FAQ</span>
                <span className="s2" >APPLY</span>
            </div>

{/* REQUIREMENT & LAST DATE TILL */}
            <div className="paraM">
            <p className="para">Required influencers with a minimum of 8000 followers to reposit this video.</p>
            </div>           
            <div className="paraM2">
            <p className="para">Barter Deal valid till 15/10/20</p>
            </div>

{/* PRIZE FOR WINNER */}
            <div className="prize"><span>PRIZE : $$$</span></div>

        </div>

    </>);
}

export default Page2;