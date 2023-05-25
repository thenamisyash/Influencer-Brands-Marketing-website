import React from "react";
import { useState } from "react";
import axios from "axios";
import { Base } from "./Auth";

export const SearchInfluencer = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const handleinputChange = (event) => {
        setSearchQuery(event.target.value)
    }
    const see = () => {
        axios.get(`${Base}api/Influencer/getInfluencerByname/${searchQuery}`)
            .then(response => {
                // console.log(response.data)
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <>
            <div className="container ">
                <div className="row search-influencer">
                    <div className="head-search">
                        <h2>Influencer Search</h2>
                    </div>
                    <div className="col-12">
                        <div className="search-option">
                            <input type="text" value={searchQuery} onChange={handleinputChange} placeholder="Influencer Search By username" />
                            <button onClick={see}>Search</button>
                            <ul>
                                {
                                    searchResults ?
                                        <>
                                            <li>{searchResults.Influencer_username}</li>
                                            <li>{searchResults.Instagram_link}</li>
                                            <li>{searchResults.email}</li>
                                            <li>{searchResults.phone}</li>
                                            <li>{searchResults.city}</li>
                                            <li>{searchResults.Hastag}</li>
                                        </>

                                        :
                                        null
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}