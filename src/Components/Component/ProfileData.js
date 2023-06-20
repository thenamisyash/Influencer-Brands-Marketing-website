import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Url } from './RequireAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function ProfileData() {
    const [data, setData] = useState([])
    const [Edit, setEdit] = useState(false);
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [previous, setPrevious] = useState("")
    const [status, setStatus] = useState("");
    const [anniversary, setAnniversary] = useState("");
    const [payment, setPayment] = useState("");
    const [profile, setProfile] = useState("")
    const [Marital, setMarital] = useState("Unmarried");
    const [isLoader, setIsLoader] = useState(false)

    const navigation = useNavigate()

    const getPofileData = () => {
        axios.get(`${Url}api/Influencer/InfluencerInfo/${localStorage.getItem('userName')}`)
            .then((res) => {
                setData(res.data)
                setEdit(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const EditData=()=>{
        if(data[0].InfluencerUpdatePageInfo!==null)
        {
            setGender(data[0].InfluencerUpdatePageInfo.gender)
            setDob((data[0].InfluencerUpdatePageInfo.dob).split('T')[0])
            setCategory(data[0].InfluencerUpdatePageInfo.categories)
            setStatus(data[0].InfluencerUpdatePageInfo.materialStatus)
            setPrevious(data[0].InfluencerUpdatePageInfo.PreviousBrandAssociation)
            setPayment(data[0].InfluencerUpdatePageInfo.PaymentDetail)
            setAnniversary(data[0].InfluencerUpdatePageInfo.MarriageDate)
            setEdit(true)
        }
        else{
            // setGender(data[0].InfluencerUpdatePageInfo.gender)
            // setDob((data[0].InfluencerUpdatePageInfo.dob).split('T')[0])
            // setCategory(data[0].InfluencerUpdatePageInfo.categories)
            // setStatus(data[0].InfluencerUpdatePageInfo.materialStatus)
            // setPrevious(data[0].InfluencerUpdatePageInfo.PreviousBrandAssociation)
            // setPayment(data[0].InfluencerUpdatePageInfo.PaymentDetail)
            // setAnniversary(data[0].InfluencerUpdatePageInfo.MarriageDate)
            setEdit(true)
        }
    }

    const sendData = async () => {
        let user = localStorage.getItem("userName");
        setIsLoader(true)
        let datas = { dob, gender, category, user, previous, status, anniversary, payment, profile };
        if (datas.dob == '') {

            toast.info('Enter Date of Birth', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsLoader(false)
        }
        else if (datas.gender == '') {
            toast.info('Please Select Gender', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsLoader(false)
        }
        else if (datas.category == '') {
            toast.info('Please Select Catagory', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsLoader(false)
        }
        else if (datas.payment == '') {
            toast.info('Enter Payment Info', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsLoader(false)
        }
        else if (datas.status == '') {
            toast.info('Please Select Marital Status', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsLoader(false)
        }
        else if (Marital == 'Married') {
            if (datas.anniversary == '') {
                toast.info('Enter Your Marriage Anniversary', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setIsLoader(false)
            }
        }
        else {
            await axios.post(`${Url}api/BasicDisplay/updatePageInfo`, {
                email: user,
                dob: datas.dob,
                gender: datas.gender,
                categories: datas.category,
                materialStatus: datas.status,
                PreviousBrandAssociation: datas.previous,
                MarriageDate: datas.anniversary,
                PaymentDetail: datas.payment,
                instagram_Others_profiles: "none"
            }).then((res) => {
                // console.log('res', res);s
                setIsLoader(false)
                getPofileData()
                // navigate('/Influencer/link', { replace: true });
            }).catch((error) => {
                setIsLoader(false)
                console.log('error', error);
            })
        }
    }
    useEffect(() => {
        getPofileData()
    }, [])
    return (
        <>
            <div className="all-data">
                {
                    data.length != 0
                        ?
                        // console.log(data)
                        <div class="profilemain">
                            <h2>Personal Info</h2>
                            <div class="profilecard">
                                <div class="profilecard-body">
                                    <div style={{ position: "absolute", right: 50 }}>
                                        {
                                            Edit
                                                ?
                                                <div className='submit-update'>
                                                    <button className='btn' onClick={() => { sendData() }}>
                                                        Submit
                                                    </button>
                                                </div>
                                                :
                                                <div className='submit-update'>
                                                    <button className='btn' onClick={() => {EditData()}}>
                                                        Edit
                                                    </button>
                                                </div>

                                        }
                                    </div>
                                    <table className='Edit_table'>
                                        <tbody>
                                            <tr>
                                                <td>Name: </td>
                                                <td> {data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.Influencer_Firstname : "NA"} {data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.Influencer_Lastname : "NA"}</td>
                                            </tr>

                                            <tr>
                                                <td>Email: </td>
                                                <td>{data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.email : "NA"}</td>

                                            </tr>

                                            <tr>
                                                <td>Address: </td>

                                                <td>{data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.Street_Address : "NA"},{data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.city : "NA"}, {data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.State : "NA"} {data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.postal_code : "NA"} </td>

                                            </tr>

                                            <tr>
                                                <td>Mobile No.: </td>
                                                <td>{data[0].influencerPersonalDetail ? data[0].influencerPersonalDetail.phone : "NA"}</td>

                                            </tr>

                                            <tr>
                                                <td>Gender:</td>
                                                {
                                                    Edit
                                                        ?
                                                        <td>
                                                            <select onChange={(e) => { setGender(e.target.value) }}>
                                                                {
                                                                    data[0].InfluencerUpdatePageInfo == null
                                                                        ?
                                                                        <>
                                                                            <option selected hidden>Select Gender....</option>
                                                                            <option>Male</option>
                                                                            <option>Female</option>
                                                                            <option>Others</option>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <option selected={gender == "Male" ? true : false}>Male</option>
                                                                            <option selected={gender == "Female" ? true : false}>Female</option>
                                                                            <option selected={gender == "Other" ? true : false}>Others</option>
                                                                        </>
                                                                }
                                                            </select>
                                                        </td>
                                                        :
                                                        <td>{data[0].InfluencerUpdatePageInfo == null ? "NA" : data[0].InfluencerUpdatePageInfo.gender}</td>

                                                }
                                            </tr>

                                            <tr>
                                                <td>Date of Birth</td>
                                                {
                                                    Edit
                                                        ?
                                                        <td>
                                                            {
                                                                data[0].InfluencerUpdatePageInfo == null
                                                                    ?
                                                                    <input type="date" onChange={(e) => { setDob(e.target.value) }} />
                                                                    :
                                                                    <input type="date" onChange={(e) => { setDob(e.target.value) }} value={dob} />
                                                            }

                                                        </td>
                                                        :
                                                        <td>{data[0].InfluencerUpdatePageInfo == null ? "NA" : (data[0].InfluencerUpdatePageInfo.dob).split('T')[0]}</td>
                                                }
                                            </tr>

                                            <tr>
                                                <td>Category</td>
                                                {
                                                    Edit
                                                        ?
                                                        <td>
                                                            {
                                                                data[0].InfluencerUpdatePageInfo == null
                                                                    ?
                                                                    <select name="Category" id="categories" onChange={(e) => { setCategory(e.target.value) }} required>
                                                                        <option selected hidden>Select Category...</option>
                                                                        <option>Photography</option>
                                                                        <option>Fashion</option>
                                                                        <option>Lifestyle</option>
                                                                        <option>Mom/Dad/Parenting</option>
                                                                        <option>Luxury</option>
                                                                        <option>Education</option>
                                                                        <option>Entertainment</option>
                                                                        <option>Beauty</option>
                                                                        <option>Art</option>
                                                                        <option>DIY</option>
                                                                        <option>Travel</option>
                                                                        <option>Food</option>
                                                                        <option>Healthcare/Wellness</option>
                                                                        <option>Fitness/Yoga/Diet</option>
                                                                        <option>Tech / Reviews</option>
                                                                        <option>Social Cause</option>
                                                                        <option>Meme</option>
                                                                        <option>Games</option>
                                                                        <option>Finance</option>
                                                                        <option>Cooking</option>
                                                                        <option>Networking</option>
                                                                        <option>Pets</option>
                                                                    </select>
                                                                    :
                                                                    <select onChange={(e) => { setCategory(e.target.value) }} required>
                                                                        <option selected={category == "Photography" ? true : false}>Photography</option>
                                                                        <option selected={category == "Fashion" ? true : false}>Fashion</option>
                                                                        <option selected={category == "Lifestyle" ? true : false}>Lifestyle</option>
                                                                        <option selected={category == "Mom/Dad/Parenting" ? true : false}>Mom/Dad/Parenting</option>
                                                                        <option selected={category == "Luxury" ? true : false}>Luxury</option>
                                                                        <option selected={category == "Education" ? true : false}>Education</option>
                                                                        <option selected={category == "Entertainment" ? true : false}>Entertainment</option>
                                                                        <option selected={category == "Beauty" ? true : false}>Beauty</option>
                                                                        <option selected={category == "Art" ? true : false}>Art</option>
                                                                        <option selected={category == "DIY" ? true : false}>DIY</option>
                                                                        <option selected={category == "Travel" ? true : false}>Travel</option>
                                                                        <option selected={category == "Food" ? true : false}>Food</option>
                                                                        <option selected={category == "Healthcare/Wellness" ? true : false}>Healthcare/Wellness</option>
                                                                        <option selected={category == "Fitness/Yoga/Diet" ? true : false}>Fitness/Yoga/Diet</option>
                                                                        <option selected={category == "Tech / Reviews" ? true : false}>Tech / Reviews</option>
                                                                        <option selected={category == "Social Cause" ? true : false}>Social Cause</option>
                                                                        <option selected={category == "Meme" ? true : false}>Meme</option>
                                                                        <option selected={category == "Games" ? true : false}>Games</option>
                                                                        <option selected={category == "Finance" ? true : false}>Finance</option>
                                                                        <option selected={category == "Cooking" ? true : false}>Cooking</option>
                                                                        <option selected={category == "Networking" ? true : false}>Networking</option>
                                                                        <option selected={category == "Pets" ? true : false}>Pets</option>
                                                                    </select>
                                                            }
                                                        </td>
                                                        :

                                                        <td>{data[0].InfluencerUpdatePageInfo == null ? "NA" : data[0].InfluencerUpdatePageInfo.categories}</td>
                                                }
                                            </tr>

                                            <tr>
                                                <td>Marital Status</td>
                                                {
                                                    Edit
                                                        ?
                                                        <td>
                                                            {
                                                                data[0].InfluencerUpdatePageInfo == null
                                                                    ?
                                                                    <select onChange={(e) => { setStatus(e.target.value); setMarital(e.target.value) }}>
                                                                        <option>--Choose--</option>
                                                                        <option>Married</option>
                                                                        <option>UnMarried</option>
                                                                    </select>
                                                                    :
                                                                    <select onChange={(e) => { setStatus(e.target.value); setMarital(e.target.value) }}>
                                                                        <option selected={status == "Married" ? true : false}>Married</option>
                                                                        <option selected={status== "UnMarried" ? true : false}>UnMarried</option>
                                                                    </select>
                                                            }
                                                        </td>
                                                        :
                                                        <td>{data[0].InfluencerUpdatePageInfo == null ? "NA" : data[0].InfluencerUpdatePageInfo.materialStatus}</td>

                                                }
                                            </tr>
                                            {data[0].InfluencerUpdatePageInfo == null
                                                ?
                                                <tr>
                                                    <td>Marriage Anniversary:   </td>

                                                    {
                                                        Edit
                                                            ?
                                                            <td>
                                                                <input type="date" id="date" onChange={(e) => setAnniversary(e.target.value)} />
                                                            </td>
                                                            :
                                                            <td>NA</td>

                                                    }
                                                </tr>
                                                :
                                                data[0].InfluencerUpdatePageInfo.materialStatus === 'Married'
                                                    ?
                                                    <tr>
                                                        <td>Marriage Anniversary</td>
                                                        <td>{data[0].InfluencerUpdatePageInfo.MarriageDate}</td>
                                                        {
                                                            Edit
                                                                ?
                                                                <td><input type="date" onChange={(e) => setAnniversary(e.target.value)} id="date" value={anniversary} /></td>
                                                                :
                                                                null
                                                        }
                                                    </tr>
                                                    :
                                                    null
                                            }

                                            <tr>
                                                <td>Previous Brand:</td>
                                                {
                                                    Edit
                                                        ?
                                                        <td>
                                                            {
                                                                data[0].InfluencerUpdatePageInfo == null
                                                                    ?
                                                                    <input type='text' onChange={(e) => setPrevious(e.target.value)} />
                                                                    :
                                                                    <input type='text' onChange={(e) => setPrevious(e.target.value)} value={previous} />
                                                            }
                                                        </td>
                                                        :
                                                        <td>{data[0].InfluencerUpdatePageInfo == null ? "NA" : data[0].InfluencerUpdatePageInfo.PreviousBrandAssociation}</td>
                                                }
                                            </tr>

                                            <tr>
                                                <td>Payment ID:</td>
                                                {
                                                    Edit
                                                        ?
                                                        <td>
                                                            {
                                                                data[0].InfluencerUpdatePageInfo == null
                                                                    ?
                                                                    <input type="text" onChange={(e) => setPayment(e.target.value)} />
                                                                    :
                                                                    <input type="text" onChange={(e) => setPayment(e.target.value)} value={payment} />
                                                            }
                                                        </td>
                                                        :
                                                        <td>{data[0].InfluencerUpdatePageInfo == null ? "NA" : data[0].InfluencerUpdatePageInfo.PaymentDetail}</td>

                                                }
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>



                            {/* social medias profile  commented  */}

                            {/* <h2>SOCIAL MEDIA</h2>
                            <div class="profilecard">
                                <div class="profilecard-body">
                                    <div style={{ position: "absolute", right: 50 }}>
                                        <button className='btn' onClick={() => { navigation("/Influencer/link") }}>
                                            <i class="fa fa-pen fa-xs edit"></i>
                                        </button>
                                    </div>
                                    <div class="social-media">
                                        <button className='btn' onClick={() => { window.open(data[0].influencerLinks.Facebook_Link, "__blank") }}>
                                            <span class="fa-stack fa-sm">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </button>

                                        <button className='btn' onClick={() => { window.open(data[0].influencerLinks.Twitter_Link, "__blank") }}>
                                            <span class="fa-stack fa-sm">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </button>

                                        <button className='btn' onClick={() => { window.open(data[0].influencerLinks.Instagram_Link, "__blank") }}>
                                            <span class="fa-stack fa-sm">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </button>

                                        <button className='btn' onClick={() => { window.open(data[0].influencerLinks.Youtube_Link, "__blank") }}>
                                            <span class="fa-stack fa-sm">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fab fa-youtube fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </button>

                                        <button className='btn' onClick={() => { window.open(data[0].influencerLinks.website_Link, "__blank") }}>
                                            <span class="fa-stack fa-sm">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fa fa-globe fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </button>
                                    </div>


                                </div>
                            </div> */}

                        </div>
                        // <table>

                        //     <tr>
                        //         <td>
                        //             Instagram Link:
                        //         </td>
                        //         <td>{data[0].influencerLinks.Instagram_Link}</td>
                        //     </tr>

                        //     <tr>
                        //         <td>Facebook Link: </td>
                        //         <td>{data[0].influencerLinks.Facebook_Link}</td>
                        //     </tr>

                        //     <tr>
                        //         <td>Youtube Link:</td>
                        //         <td>{data[0].influencerLinks.Youtube_Link}</td>
                        //     </tr>

                        //     <tr>
                        //         <td>Twitter Link: </td>
                        //         <td>{data[0].influencerLinks.Twitter_Link}</td>
                        //     </tr>

                        //     <tr>
                        //         <td>Website Link: </td>
                        //         <td>{data[0].influencerLinks.website_Link}</td>
                        //     </tr>

                        // </table>
                        :
                        null
                }
            </div>
        </>
    )
}
