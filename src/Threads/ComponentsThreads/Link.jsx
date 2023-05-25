import React, { useState } from "react";
import '../Index.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Base } from "./Auth";
import swal from "sweetalert";
const LinkAccount = () => {
    const navigate = useNavigate();
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [youTube, setYouTube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [website, setWebsite] = useState("");
    const userSubmit = () => {
        let at = localStorage.getItem("email");
        let data = { at, instagram, facebook, youTube, twitter, website };
        axios.post(`${Base}api/Brands/brandsLinkStore`, {
            username: data.at,
            Instagram_link: data.instagram,
            Facebook_Link: data.facebook,
            Youtube_Link: data.youTube,
            Twitter_Link: data.twitter,
            website_Link: data.website_Link
        }).then((res) => {
            console.log(res.data)
            swal("Link Stored", "", "success")
            navigate('/threads/');
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <>
            <section id="link-account">
                <div className="main-accounts">
                    <div className="head-account">
                        <h2>Link Accounts</h2>
                    </div>
                    <div className="linkdata">
                        <div className="platform">
                            <label>Instagram</label>
                            <input type="text" value={instagram} onChange={(e) => { setInstagram(e.target.value) }} className="text-insta" placeholder="Eg. https://test.com " />
                        </div>
                        <div className="platform">
                            <label>Facebook</label>
                            <input type="text" value={facebook} onChange={(e) => { setFacebook(e.target.value) }} className="text-facebook" placeholder="Eg. https://test.com" />
                        </div>
                        <div className="platform">
                            <label>Youtube</label>
                            <input type="text" value={youTube} onChange={(e) => { setYouTube(e.target.value) }} className="text-youtube" placeholder="Eg. https://test.com " />
                        </div>
                        <div className="platform">
                            <label>Twitter</label>
                            <input type="text" value={twitter} onChange={(e) => { setTwitter(e.target.value) }} className="text-twitter" placeholder="Eg. https://test.com " />
                        </div>
                        <div className="platform">
                            <label>Website</label>
                            <input type="text" value={website} onChange={(e) => { setWebsite(e.target.value) }} className="text-website" placeholder="Eg. https://test.com" />
                        </div>
                        <div className="button-link">
                            <button type="submit" onClick={userSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default LinkAccount;