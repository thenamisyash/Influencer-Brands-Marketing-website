import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import './Bounty.css'
import axios from "axios";
import { Url } from './RequireAuth'
export const Ongoing = () => {
    useEffect(() => {
        getOngoing()
    }, [])
    const [onGoing, setOnGoing] = useState()
    const getOngoing = () => {
        let name = localStorage.getItem("Influsername")
        axios.post(`${Url}api/Campaign/getInterectionDetails`, {
            influencer: name,
            statusshow: "OnGoing.."
        }).then((res) => {
            // console.log(res.data)
            setOnGoing(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <section id="ongoing-component">
                <div className="container" >
                    <div className="row" id="table">
                        <div className="col-12">
                            <div className="ongoing-head">
                                <h2>Ongoing Campaigns</h2>
                            </div>
                            <div className="table ">
                                <Table striped bordered hover variant="light" style={{ "opacity": "0.7" }} className="table-comp">
                                    <thead className="table-head">
                                        <tr>
                                            <th>Brand Name</th>
                                            <th>Campaign</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            onGoing ?
                                                onGoing.map((index, value) => {
                                                    let data = index
                                                    return (
                                                        <tr key={value}>
                                                            <td>{data.brand_name}</td>
                                                            <td>{data.campname}</td>
                                                            <td>{data.statusshow}</td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                null
                                        }
                                        {/* <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr> */}
                                        {/* <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>Larry the Bird</td>
                                            <tdThaka</td>
                                            <td>@ </td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}