import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { Url } from "../RequireAuth"
import Page1 from './Page1';
const Drop = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [show, setShow] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [brandData, setBrandData] = useState()
  useEffect(() => {
    const brandData = () => {
      axios.get(`${Url}api/Brands/getbrandsData`)
        .then((res) => {
          setBrandName(res.data);
        }).catch((error) => {
          console.log(error)
        })
    }
    brandData()
  }, [])

  const deliver = (event) => {
    let name = event.target.textContent;
    axios.post(`${Url}api/Campaign/getFormDetails/Brand`, {
      brand: name
    }).then((res) => {
      // console.log(res)
      setBrandData(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <>
      <section id='dropdown-sec'>
        <div className='dropdown-section'>
          <div className='dropdown'>
            <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>Brands<ion-icon name="caret-down-outline"></ion-icon></div>
            {isActive && (
              <div className='dropdown-content'>
                {
                  brandName ?
                    brandName.map((index, value) => {
                      const data = index.Brands_name;
                      return (
                        <div className='dropdown-item' key={value} onClick={deliver}>
                          {data}
                        </div>
                      )
                    })
                    :
                    null
                }
              </div>
            )}
          </div>
          <div className='dropdown'> 
            <div className='dropdown-btn' onClick={() => setIsActive1(!isActive1)}>Type<ion-icon name="caret-down-outline" className='yash'></ion-icon></div>
            {isActive1 && (
              <div className='dropdown-content' id='dropdown-con'>
                <div className='dropdown-item' >
                  Barter
                </div>
                <div className='dropdown-item' >
                  Paid
                </div>
                <div className='dropdown-item' >
                  Brand Ambassador Program
                </div>
                <div className='dropdown-item' >
                  Giveaways
                </div>
                <div className='dropdown-item' >
                  Social Media Takeover
                </div>
              </div>
            )}
          </div>

          <div className='dropdown'>
            <div className='dropdown-btn' onClick={() => setShow(!show)}>Platform<ion-icon name="caret-down-outline"></ion-icon></div>
            {show && (
              <div className='dropdown-content' id='plat'>
                <div className='dropdown-item'>
                  Instagram
                </div>
                <div className='dropdown-item'>
                  Facebook
                </div>
                <div className='dropdown-item'>
                  You Tube
                </div>
                <div className='dropdown-item'>
                  Twitter
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Page1 data= {brandData}/>
    </>
  )
}
export default Drop;