import React from "react";
import Crousel from "./Crousel";
import './Bounty.css';
const Dashboard = () => {
    // const LongLived = () => {
    //     let token = localStorage.getItem('Instagram-Short');
    //     axios.post('https://bountyandthreads.azurewebsites.net/tester_Long_term_token', {
    //         accesstoken:token
    //     }).then((response) => {
    //         console.log("response", response)
    //         window.localStorage.removeItem('Instagram-Short')
    //         window.localStorage.setItem('Long-Lived', response.data)
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }
    // useEffect(() => {
    //     if (localStorage.getItem('Instagram-Short')) {
    //         LongLived();
    //     }
    // },[])



    return (    
        <>
            <div className="dashboard-influencer">
                <Crousel />
            </div>
        </>
    )
}
export default Dashboard;