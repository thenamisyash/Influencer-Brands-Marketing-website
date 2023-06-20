import axios from "axios";
import React, { useEffect, useState } from "react";
import './Bounty.css';
import { Url } from "./RequireAuth";
import { useNavigate } from "react-router-dom";
const ProfileSection = (props) => {
    const [followers, setFollowers] = useState("")
    const [following, setFollowing] = useState("")
    const [count, setCount] = useState("")
    const [name, setName] = useState("")
    const [onGoing, setOnGoing] = useState("")
    const [complete, setComplete] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 1000);
        onGo()
        completed();
    }, [count, name, followers, following, count])
    const getData = () => {
        let name = localStorage.getItem("userName")
        axios.get(`${Url}api/Influencer/getinfluencerDataByUsername/${name}`)
            .then((res) => {
                setName(res.data.Influencer_username)
                setFollowers(res.data.followers_count)
                setFollowing(res.data.following_count)
                setCount(res.data.mediaCount)
            }).catch((error) => {
                console.log(error)
            })
    }



    const onGo = () => {
        let influencerName = localStorage.getItem("Influsername");
        axios.post(`${Url}api/Campaign/getInterectionDetails`, {
            influencer: influencerName,
            statusshow: "OnGoing.."
        }).then((res) => {
            console.log(res.data)
            setOnGoing(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const completed = () => {
        axios.post(`${Url}api/Campaign/getInterectionDetails`, {
            influencer: name,
            statusshow: " Completed!!"
        }).then((res) => {
            setComplete(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <section id="mid-sec">
                <div className="counts">
                    <div className="first-sec">
                        <h4>Total Followers</h4>
                        <p>{followers}</p>
                    </div>
                    <div className="first-sec">
                        <h4>Total Following</h4>
                        <p>{following}</p>
                    </div>
                    <div className="first-sec">
                        <h4>Media Count</h4>
                        <p>{count}</p>
                    </div>
                </div>

                <div className="overall">
                  

                    {/* bounty level  commented  */}   
                    {/* <div className="level">
                        <h5>Bounty Level :  <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></h5>
                    </div> */}
                  
                  
                    <div className="hunts">
                        <div className="hunt">
                            <h5>Hunts :</h5>
                        </div>
                        <div className="completed">
                            <h5 onClick={() => navigate("/Influencer/ongoing")}>Ongoing - {onGoing.length}</h5>
                            <h5>Completed - {complete.length}</h5>
                        </div>
                    </div>

                      {/* Engagement rate commented  */}   
                    {/* <div className="rate">
                        <h5>Overall Engagement Rate : {parseInt(props.data.total_engagement)}%</h5>
                    </div> */}
                </div>
            </section>
        </>
    )
}
export default ProfileSection;