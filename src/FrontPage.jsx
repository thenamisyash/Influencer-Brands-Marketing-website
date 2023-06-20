import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from './Components/imgs/front-page.png';
import Threads from './Threads/Images/lgo.png';
import bg from './Components/imgs/bck.jpg';
import bounty from './Components/imgs/frontpage.jpg';
import './Threads/Index.css';
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Base } from "./Threads/ComponentsThreads/Auth"
import swal from "sweetalert";

const FrontPage = () => {
    const location = useLocation();
    const [code, setCode] = useState('');
    const [loading, setloading] = useState(false);
    const InstagramCode = () => {
        axios.post(`${Base}api/BasicDisplay/handleauth` + code)
            .then((response) => {
                // console.log("resp", response)
                window.localStorage.setItem("Instagram-Short", response.data)
            }).catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        swal("For better experience use on Chrome Browser, Mozila & Internet Explorer", "", "info")
        if (location.search) {
            setCode(location.search);
            if (code) {
                InstagramCode();
                swal("Please Close the last tab", "", "success")
                // alert("Please Close the last tab");
            }
        }
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 5000);
    }, [code, location])

    return (
        <>
            <div className="front-page">
                {
                    loading ?
                        <PropagateLoader color={'#36d7b7'} loading={loading} size={25}
                        /> :
                        <div className="formanage">
                            <div className="left-container">
                                <img src={Logo} alt="logo" width="300px" />
                            </div>
                            <div className="right">
                                <div className="bgm">
                                    <img src={Threads} alt='lgo' width="300px" />
                                </div>
                                <h3 id="methods">Sign Up/ Log In As</h3>
                                {
                                    localStorage.getItem("email") ?
                                        // <Link>
                                        //     <button>Brand</button>
                                        // </Link>
                                        <Link to='/threads/'>
                                            <button>Brand</button>
                                        </Link>
                                        :
                                        // <Link>
                                        //     <button>Brand</button>
                                        // </Link>
                                        <Link to='/threads/signin'>
                                            <button>Brand</button>
                                        </Link>
                                }

                                {
                                    localStorage.getItem("userName") ?
                                        <Link to='/Influencer/' id="front-influencer">
                                            <div className="userData" >
                                                <img src={bg} alt='hwllo' id="back" />
                                                <span>Influencer</span>
                                            </div>
                                        </Link>
                                        :
                                        <Link to='/Influencer/loginBounty' id="front-influencer">
                                            <div className="userData" >
                                                <img src={bg} alt='hwllo' id="back" />
                                                <span>Influencer</span>
                                            </div>
                                        </Link>
                                }

                                <div className="bgm1">
                                    <img src={bounty} alt="bounty" width="300px" />
                                </div>
                            </div>
                        </div>
                }
            </div>

        </>
    );
}
export default FrontPage;