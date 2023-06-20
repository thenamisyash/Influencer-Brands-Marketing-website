import React, { useEffect, useState } from "react";
import './Bounty.css';
import Black from '../imgs/customise-removebg-preview.png';
import axios from "axios";
import swal from "sweetalert";
import { Url } from "./RequireAuth";
import { toast } from 'react-toastify';
import { CirclesWithBar } from 'react-loader-spinner'

const LinkPage = () => {
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [youTube, setYouTube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [website, setWebsite] = useState("");
    const [isLoader, setIsloader] = useState(false)
    const[editable,setEditable]=useState('')

    const submitLinks = () => {
        let user = localStorage.getItem("userName");
        let data = { user, instagram, facebook, youTube, twitter, website };
        setIsloader(true)
        axios.post(`${Url}api/Influencer/influencerLinkStore`, {
            username: user,
            Instagram_link: data.instagram,
            Facebook_Link: data.facebook,
            Youtube_Link: data.youTube,
            Twitter_Link: data.twitter,
            website_Link: data.website
        })
            .then((res) => {
                setIsloader(false)
                swal("Successfully Update Profile", "", "success");
            }).catch((err) => {
                setIsloader(false)
                swal("you made a error", "", "error");
                console.log("err", err);
            })
    }

    const getLinks = async () => {
        setIsloader(true)
        await axios.get(`${Url}api/Influencer/influencerLinkShow/${localStorage.getItem("userName")}`, {
        })
            .then((res) => {
                setIsloader(false)
                setInstagram(res.data.Instagram_Link)
                setFacebook(res.data.Facebook_Link)
                setTwitter(res.data.Twitter_Link)
                setYouTube(res.data.Youtube_Link)
                setWebsite(res.data.website_Link)
            })
            .catch((err) => {
                setIsloader(false)
                console.log(err)
            })
    }

    useEffect(() => {
        getLinks()
    }, [])
    return (
        <>
            {
                isLoader
                    ?
                    <>
                        <div className='loaders'>
                            <div className='overlay'>
                            </div>
                            <CirclesWithBar
                                height="100"
                                width="100"
                                color="#f0534e"
                                wrapperClass=""
                                visible={true}
                                outerCircleColor=""
                                innerCircleColor=""
                                barColor=""
                                ariaLabel='circles-with-bar-loading'
                            />
                        </div>
                    </>
                    :
                    null
            }
            <section className="link-page">
                <div className="link-head">
                    <div className="link-header">
                        <img src={Black} alt="black" />
                        <h2>Link Profile</h2>
                    </div>
                    <div id="link-profile">
                        <div className="link-input" >
                            <label className="user">Instagram Link</label>
                            <div className="link-input">
                                <div style={{ flexDirection: "row", display: "flex" }}>
                                    <input type="url" value={instagram} readOnly={editable=="Instagram"?false :true} style={editable=="Instagram"?{borderBottom:'3px solid green'}:{borderBottom:'1px solid gray'}} onChange={(e) => { setInstagram(e.target.value) }} className="link-insta" name="insta" placeholder="https://instagram.com" />
                                    <div>
                                        <button className="btn edit_btn" onClick={()=>{setEditable('Instagram')}}><i class="fas fa-edit"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="link-input">
                            <label className="user">Facebook</label>
                            <div style={{ flexDirection: "row", display: "flex" }}>
                                <input type="url" value={facebook} readOnly={editable=="Facebook"?false :true} style={editable=="Facebook"?{borderBottom:'3px solid green'}:{borderBottom:'1px solid gray'}} onChange={(e) => { setFacebook(e.target.value) }} className="link-insta" name="facebook" placeholder="https://www.facebook.com" />
                                <div>
                                    <button className="btn edit_btn" onClick={()=>{setEditable('Facebook')}}><i class="fas fa-edit"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="link-input">
                            <label className="user">You Tube</label>
                            <div style={{ flexDirection: "row", display: "flex" }}>
                                <input type="url" value={youTube} readOnly={editable=="Youtube"?false :true} style={editable=="Youtube"?{borderBottom:'3px solid green'}:{borderBottom:'1px solid gray'}} onChange={(e) => { setYouTube(e.target.value) }} className="link-insta" name="you-tube" placeholder="https://www.youtube.com" />
                                <div>
                                    <button className="btn edit_btn" onClick={()=>{setEditable('Youtube')}}><i class="fas fa-edit"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="link-input">
                            <label className="user">Twitter</label>
                            <div style={{ flexDirection: "row", display: "flex" }}>
                                <input type="url" value={twitter} readOnly={editable=="Twitter"?false :true} style={editable=="Twitter"?{borderBottom:'3px solid green'}:{borderBottom:'1px solid gray'}} onChange={(e) => { setTwitter(e.target.value) }} className="link-insta" name="twitter" placeholder="https://www.twitter.com" />
                                <div>
                                    <button className="btn edit_btn" onClick={()=>{setEditable('Twitter')}}><i class="fas fa-edit"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="link-input">
                            <label className="user">Website</label>
                            <div style={{ flexDirection: "row", display: "flex" }}>
                                <input type="url" value={website} readOnly={editable=="Website"?false :true} style={editable=="Website"?{borderBottom:'3px solid green'}:{borderBottom:'1px solid gray'}} onChange={(e) => { setWebsite(e.target.value) }} className="link-insta" name="website" placeholder="https://www.YourWebsite.com" />
                                <div>
                                    <button className="btn edit_btn" onClick={()=>{setEditable('Website')}}><i class="fas fa-edit"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="button-link">
                            <button type="submit" onClick={submitLinks} className="link-submit">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LinkPage;