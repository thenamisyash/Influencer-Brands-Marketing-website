import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Bounty.css';
import { Url } from "./RequireAuth";
const UpdateProfile = () => {
    const navigate = useNavigate();
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const sendData = async() => {
        let user = localStorage.getItem("userName");
        let data = { dob, gender, category, user };
        await axios.post(`${Url}api/BasicDisplay/updatePageInfo`, {
            email: user,
            dob: data.dob,
            gender: data.gender,
            categories: data.category
        }).then((res) => {
            // console.log('res', res);s
            navigate('/Influencer/link', {replace : true});
        }).catch((error) => {
            console.log('error', error);
        })
    }
    return (
        <>
            <main id='profile-up'>
                <div className="profile-updation">
                    <h2>Update Profile</h2>
                </div>
                <div className="update-page">
                    <div className="update-user">
                        <h5>Date Of Birth</h5>
                        <input type="date" id="date" value={dob} onChange={(e) => { setDob(e.target.value) }} required />
                    </div>
                    <div className="update-user1">
                        <h5>Gender</h5>
                        <select name="gender" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }} required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="update-category">
                        <h5> Select Category</h5>
                        <select name="Category" id="categories" value={category} onChange={(e) => { setCategory(e.target.value) }} required>
                            <option>Advertising/Marketing</option>
                            <option>Album</option>
                            <option>Amateur Sports Team</option>
                            <option>Apartment & Condo Building</option>
                            <option>Appliance Repair Service</option>
                            <option>App Page</option>
                            <option>Architectural Designer</option>
                            <option>Art</option>
                            <option>Artist</option>
                            <option>Arts & Entertainment</option>
                            <option>Athlete</option>
                            <option>Automotive Repair Shop</option>
                            <option>Baby & Children's Clothing Store</option>
                            <option>Baby Goods/Kids Goods</option>
                            <option>Bar</option>
                            <option>Beauty, Cosmetic & Personal Care</option>
                            <option>Beauty Salon</option>
                            <option>Book</option>
                            <option>Business Center</option>
                            <option>Business Service</option>
                            <option>Camera/Photo</option>
                            <option>Canoe & Kayak Rental</option>
                            <option>Chicken Joint</option>
                            <option>Church of Christ</option>
                            <option>Church of Jesus Christ of Latter-day Saints</option>
                            <option>Clothing (Brand)</option>
                            <option>Clothing Store</option>
                            <option>College & University</option>
                            <option>Commercial & Industrial</option>
                            <option>Commercial & Industrial Equipment Supplier</option>
                            <option>Commercial Bank</option>
                            <option>Commercial Equipment</option>
                            <option>Commercial Real Estate Agency</option>
                            <option>Commercial Truck Dealership</option>
                            <option>Community</option>
                            <option>Community Organization</option>
                            <option>Consulting Agency</option>
                            <option>Contractor</option>
                            <option>Convenience Store</option>
                            <option>Credit Union</option>
                            <option>Doctor</option>
                            <option>Deli</option>
                            <option>Dancer</option>
                            <option>Design & Fashion</option>
                            <option>Dessert Shop</option>
                            <option>Discount Store</option>
                            <option>Dorm</option>
                            <option>E-Cigarette Store</option>
                            <option>E-commerce Website</option>
                            <option>Education</option>
                            <option>Engineering Service</option>
                            <option>Entertainment Website</option>
                            <option>Entrepreneur</option>
                            <option>Episode</option>
                            <option>Event</option>
                            <option>Family Style Restaurant</option>
                            <option>Fashion Designer</option>
                            <option>Fashion Model</option>
                            <option>Fast Food Restaurant</option>
                            <option>Financial Service</option>
                            <option>Food & Beverage</option>
                            <option>Food Stand</option>
                            <option>Footwear Store</option>
                            <option>Gamer</option>
                            <option>Games/Toys</option>
                            <option>Gaming Video Creator</option>
                            <option>Government Organization</option>
                            <option>Graphic Designer</option>
                            <option>Grocery Store</option>
                            <option>Hardware Store</option>
                            <option>Health/Beauty</option>
                            <option>Heating, Ventilating & Air Conditioning Service</option>
                            <option>Home Decor</option>
                            <option>Home Improvement</option>
                            <option>Hospital</option>
                            <option>Hotel</option>
                            <option>Hotel & Lodging</option>
                            <option>Ice Cream Shop</option>
                            <option>In-Home Service</option>
                            <option>Industrial Company</option>
                            <option>Information Technology Company</option>
                            <option>Insurance Company</option>
                            <option>Interior Design Studio</option>
                            <option>Internet Company</option>
                            <option>Internet Marketing Service</option>
                            <option>Japanese Restaurant</option>
                            <option>Jazz & Blues Club</option>
                            <option>Jewelry/Watches</option>
                            <option>Jewelry & Watches Company</option>
                            <option>Journalist</option>
                            <option>Just For Fun</option>
                            <option>Karaoke</option>
                            <option>Kennel</option>
                            <option>Kitchen & Bath Contractor</option>
                            <option>Kitchen/Cooking</option>
                            <option>Korean Restaurant</option>
                            <option>Landmark & Historical Place</option>
                            <option>Lawyer & Law Firm</option>
                            <option>Library</option>
                            <option>Loan Service</option>
                            <option>Local Service</option>
                            <option>Lumber Yard</option>
                            <option>Marketing Agency</option>
                            <option>Media</option>
                            <option>Media/News Company</option>
                            <option>Medical Center</option>
                            <option>Medical School</option>
                            <option>Men's Clothing Store</option>
                            <option>Mental Health Service</option>
                            <option>Movie</option>
                            <option>Musician/Band</option>
                            <option>Music Lessons & Instruction School</option>
                            <option>Music Video</option>
                            <option>News & Media Website</option>
                            <option>Newspaper</option>
                            <option>Nonprofit Organization</option>
                            <option>Non-Governmental Organization (NGO)</option>
                            <option>Not a Business</option>
                            <option>Nursing Agency</option>
                            <option>Obstetrician-Gynecologist (OBGYN)</option>
                            <option>Office Equipment Store</option>
                            <option>Office Supplies</option>
                            <option>Optician</option>
                            <option>Optometrist</option>
                            <option>Outdoor & Sporting Goods Company</option>
                            <option>Personal Blog</option>
                            <option>Petting Zoo</option>
                            <option>Photographer</option>
                            <option>Product/Service</option>
                            <option>Public & Government Service</option>
                            <option>Public Figure</option>
                            <option>Public Utility Company</option>
                            <option>Quay</option>
                            <option>Real Estate</option>
                            <option>Real Estate Agent</option>
                            <option>Real Estate Appraiser</option>
                            <option>Real Estate Company</option>
                            <option>Real Estate Developer</option>
                            <option>Record Label</option>
                            <option>Religious Center</option>
                            <option>Religious Organization</option>
                            <option>Residence</option>
                            <option>Restaurant</option>
                            <option>Retail Bank</option>
                            <option>School</option>
                            <option>Science, Technology & Engineering</option>
                            <option>Shopping & Retail</option>
                            <option>Shopping District</option>
                            <option>Shopping Mall</option>
                            <option>Smoothie & Juice Bar</option>
                            <option>Song</option>
                            <option>Specialty School</option>
                            <option>Sports & Recreation</option>
                            <option>Sports League</option>
                            <option>Sports Team</option>
                            <option>Teens & Kids Website</option>
                            <option>Telemarketing Service</option>
                            <option>Tire Dealer & Repair Shop</option>
                            <option>Trade School</option>
                            <option>Traffic School</option>
                            <option>Train Station</option>
                            <option>Tutor/Teacher</option>
                            <option>TV Channel</option>
                            <option>TV Network</option>
                            <option>TV Show</option>
                            <option>Udon Restaurant</option>
                            <option>Ukranian Restaurant</option>
                            <option>Unagi Restaurant</option>
                            <option>Uniform Supplier</option>
                            <option>Urban Farm</option>
                            <option>Vacation Home Rental</option>
                            <option>Veterinarian</option>
                            <option>Video Creator</option>
                            <option>Video Game</option>
                            <option>Visual Arts</option>
                            <option>Web Designer</option>
                            <option>Website</option>
                            <option>Wedding Planning Service</option>
                            <option>Winery/Vineyard</option>
                            <option>Women's Clothing Store</option>
                            <option>Women's Health Clinic</option>
                            <option>Writer</option>
                            <option>Xinjiang Restaurant</option>
                            <option>Yakiniku Restaurant</option>
                            <option>Yakitori Restaurant</option>
                            <option>Yoga Studio</option>
                            <option>Yoshoku Restaurant</option>
                            <option>Youth Organization</option>
                            <option>Zhejiang Restaurant</option>
                            <option>Zoo</option>
                        </select>
                    </div>
                    <div className="submit-update">
                        <button onClick={sendData}>Submit</button>
                    </div>
                </div>
            </main>
        </>
    );
}
export default UpdateProfile;