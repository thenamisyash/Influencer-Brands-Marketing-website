import React from "react";
import { useState } from "react";
import AdminDelModal from "./AdminDelModal";
// import { Modal, Button } from "react-bootstrap";


const Card = ({ AllData }) => {
    // const identityNo = localStorage.getItem("Access-Id");
    // console.log("id no is the is the - ",identityNo);
    const [show, setShow] = useState(false);
    return (
        <>
            <section className="main-card--container ">
                {/* **************************************************************************** */}
                {AllData.map((jes, value) => {
                    const { id, name, image, season } = jes;

                    return (
                        <>
                            <div className='card-container my-2 kard' key={value}  >
                                {/* <div className='card-container'key={menudtata.id}> */}
                                <div className='card' key={id}>
                                    <div className=" d-flex justify-content-end ">
                                        <span className='card-number card-circle subtle mx-2 my-2'>{id}</span>
                                        {/* <span className="card-circle  card-number mx-2 my-2" style={{}}><button  style={{ "border": "none", "backgroundColor": "transparent" }}> <i class="fa-regular fa-snowflake fa-flip fa-xl"></i> </button></span> */}
                                        <span className="card-circle  card-number mx-2 my-2" style={{}}> <AdminDelModal /> </span>
                                    </div>
                                    <div className='card-body'>
                                        {/* <span className='card-author subtle' style={{ color: "red" }}>{season}</span> */}
                                        <img src={image} alt='images' className='card-media' />
                                        <h2 className='card-title'>{name}</h2>
                                        <p>Insta followers :{season} </p>
                                    </div>
                                    <div className="d-flex justify-content-around mb-3">
                                        {/* <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="this is it" data-bs-content="yeah yeah yeah">   <span className='card-tag subtle'><i class="fa-solid fa-user"></i></span></button> */}
                                        <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title='Direct to Id Page ' style={{ "border": "none", "backgroundColor": "transparent" }}><i className="fa-solid fa-user fa-shake fa-lg"></i> </button></span>
                                        <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title='Direct to Insta Page ' style={{ "border": "none", "backgroundColor": "transparent" }}><i className="fa-brands fa-instagram fa-shake fa-lg"></i> </button></span>
                                        <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title='Contact Number' style={{ "border": "none", "backgroundColor": "transparent" }}><i className="fa-solid fa-phone fa-shake"></i> </button></span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>

        </>

    );
}
export default Card;
