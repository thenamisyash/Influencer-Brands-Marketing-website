import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {  IdPass } from './InfluencersAllData';
import { baseUrl } from '../PrivateRoutes';

const AdminDelModal = () => {

  // const [detail, setDetail] = useState([]);
  const [showw, setShoww] = useState(false);

  // #the id of the choosen  account will be saved here
  const Id = useContext(IdPass);
  const toggleModal = () => {
    setShoww(!showw);

  };

  const delnow = () => {
    // console.log("yollo the deletetion is happpening with email - ", Email);
    // console.log("yohho the deletetion is happpening with id - ", Id);
    setShoww(!showw);

    // #the api for delete will be here
    axios.delete(`${baseUrl}/api/Influencer/influencerRemove/${Id}`)
      // .then((res) => setDetail(res.data))
      .then((res) => {
        // console.log("Influencer Deletion is successfull")
      })
      .catch((error) =>
        console.log("the y error - ", error));


  }

  return (
    <>
      {/* <Button onClick={toggleModal} > <i class="fa-regular fa-snowflake fa-flip fa-xl"></i></Button> */}
      <button data-toggle="tooltip" data-placement="right" title='Delete the user' onClick={toggleModal} style={{ "border": "none", "backgroundColor": "transparent" }}> <i className="fa-regular fa-snowflake fa-shake fa-xl"></i> </button>
      <Modal className='modal-dialog-centered' show={showw}>
        <Modal.Header closeButton onClick={toggleModal}>Confirmation to delete.📍 </Modal.Header>
        <Modal.Body >
          Are you sure , you want to delete this account!? <br />
          The data can't be recovered once deleted.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal}>Cancel</Button>
          <Button className='bg-danger' onClick={delnow}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default AdminDelModal
