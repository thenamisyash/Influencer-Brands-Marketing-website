import React, {useState} from "react";
import './Bounty.css';
import Black from '../imgs/customise-removebg-preview.png';
import axios from "axios";
import swal from "sweetalert";
import { Url } from "./RequireAuth";
const LinkPage = () => {
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [youTube, setYouTube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [website, setWebsite] = useState("");

    const submitLinks = () => {
        let user = localStorage.getItem("userName");
        let data = { user, instagram, facebook, youTube, twitter, website };
        axios.post(`${Url}api/Influencer/influencerLinkStore`, {
            username: user,
            Instagram_link: data.instagram,
            Facebook_Link: data.facebook,
            Youtube_Link: data.youTube,
            Twitter_Link: data.twitter,
            website_Link: data.website
        })
            .then((res) => {
                swal("Successfully Update Profile", "", "success");
            }).catch((err) => {
                swal("you made a error", "", "error");
                console.log("err", err);
            })
    }
    return (
        <>
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
                                <input type="url" value={instagram} onChange={(e) => { setInstagram(e.target.value) }} className="link-insta" name="insta" placeholder="http://instagram.com" />
                            </div>
                        </div>

                        <div className="link-input">
                            <label className="user">Facebook</label>
                            <input type="url" value={facebook} onChange={(e) => { setFacebook(e.target.value) }} className="link-insta" name="facebook" placeholder="https://www.facebook.com/girlonbullet" />
                        </div>

                        <div className="link-input">
                            <label className="user">You Tube</label>
                            <input type="url" value={youTube} onChange={(e) => { setYouTube(e.target.value) }} className="link-insta" name="you-tube" placeholder="https://www.youtube.com/channle/uc-u-rliqezexzxo/lws/zoa" />
                        </div>

                        <div className="link-input">
                            <label className="user">Twitter</label>
                            <input type="url" value={twitter} onChange={(e) => { setTwitter(e.target.value) }} className="link-insta" name="twitter" placeholder="https://www.twitter.com/girlonbullet" />
                        </div>

                        <div className="link-input">
                            <label className="user">Website</label>
                            <input type="url" value={website} onChange={(e) => { setWebsite(e.target.value) }} className="link-insta" name="website" placeholder="https://" />
                        </div>

                        <div className="button-link">
                            <button type="submit"  onClick={submitLinks}className="link-submit">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LinkPage;