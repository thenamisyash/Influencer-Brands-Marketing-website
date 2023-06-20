import axios from "axios";
import React, { useEffect, useState } from "react";
import Yash from '../imgs/iconss.png';
import './Bounty.css';
// import Count from "./FbInstaCount";
import ProfileSection from "./Profilesec";
import ShowData from "./ShowData";
import { Url } from "./RequireAuth";
import ProfileData from "./ProfileData";

const Profile = () => {
    const [data, setData] = useState('');
    const [link, setLink] = useState('');
    const [engage, setEngage] = useState('')
    // const[ProfileImg,setProfileImg]=useState([])
 

    const getData = () => {
        let at = localStorage.getItem('Instagram-Short');
        if (at) {
            axios.get(`https://graph.instagram.com/me?fields=id,username,account_type&access_token=${at}`)
                .then((res) => {
                    setData(res.data);
                    // localStorage.setItem("InstagUser", res.data.username)
                    anotherApi(res.data.username)
                }).catch((error) => {
                    console.log("error", error)
                })
        }
    }
    const engagement = () => {
        let at = localStorage.getItem("userName")
        axios.post(`${Url}api/Influencer/engagementRate`, {
            email: at
        }).then((res) => {
            // console.log(res.data)
            setEngage(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }



    const links = () => {
        let acc = localStorage.getItem("userName");
        axios.get(`${Url}api/Influencer/influencerLinkShow/${acc}`)
            .then((res) => {
                // console.log(res.data)
                setLink(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const anotherApi = (username) => {
        let user = localStorage.getItem("userName");
        console.log(username)
        axios.post(`${Url}api/Influencer/influcerInstagramData`, {
            Influencer_username: user,
            user_name: username
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }

    // const getPofileData=()=>{
    //     axios.get(`${Url}api/Influencer/InfluencerInfo/${localStorage.getItem('userName')}`)
    //     .then((res)=>{
    //         setProfileImg(res.data[0].influencerPersonalDetail.post_profile_url)
    //         console.log(ProfileImg)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

    useEffect(() => {
        getData();
        links();
        engagement()
        // getPofileData()
    }, [])

    return (
        <>
            <section id="profile">
                <div className="upper-section">
                    <div className="img-sec">
                        <img crossorigin="anonymous" src={Yash} alt=" yash" width="170px" />
                    </div>
                    <div className="info-sec">
                        <span>Username: {data.username} </span>
                        <span>Account Type: {data.account_type}</span>
                        <span>Instagram Id: {data.id}</span>

                        <div className="logoss">
                            <a href={link.Instagram_Link} id="redirect">  <ion-icon name="logo-instagram"></ion-icon></a>
                            <a href={link.Facebook_Link} id="redirect"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href={link.Youtube_Link} id="redirect"> <ion-icon name="logo-youtube"></ion-icon></a>
                            <a href={link.Twitter_Link} id="redirect"> <ion-icon name="logo-twitter"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </section>
            <ProfileSection data = {engage}/>
            {/* <Count data = {engage}/> */}
            <ShowData />
            <ProfileData/>
        </>
    )
}
export default Profile;