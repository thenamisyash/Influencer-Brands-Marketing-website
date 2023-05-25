import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IdPass, NamePass } from './AdminAllData';
import { baseUrl } from '../PrivateRoutes';

const SupAdminDelModal = () => {
  // const [detail, setDetail] = useState([]);
  const [showw, setShoww] = useState(false);

    const Supdmin = window.localStorage.getItem("LoggedInUserName-");

  // #the id of the choosen  account will be saved here
  // const Email = useContext(EmailPass);
  const Id = useContext(IdPass);
  const Name = useContext(NamePass);

  const toggleModal = () => {
    setShoww(!showw);

  };

  const delnow = () => {
    // console.log("yollo the deletetion is happpening with email - ",Email);
    console.log("skrrrrraahhhhhhhh - ", Id);
    console.log("thrrrrrrrrraahhhhhhhh - ", Name);
    setShoww(!showw);

    // #the api for delete will be here
    axios.delete(`${baseUrl}/api/Admin/removeAdmin/${Id}/${Supdmin}`) //------------------------------to add the delete admins url
      // .then((res) => setDetail(res.data))
      .then((res) => {
         console.log("Influencer Deletion is successfull")
      })
      .catch((error) =>
        console.log("the y error - ", error));


  }

  return (
    <>
      {/* <Button onClick={toggleModal} > <i class="fa-regular fa-snowflake fa-flip fa-xl"></i></Button> */}
      <button data-toggle="tooltip" data-placement="right" title='Delete the user' onClick={toggleModal} style={{ "border": "none", "backgroundColor": "transparent" }}> <span className='text-light'>Delete Admin </span> </button>
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
  );
}


export default SupAdminDelModal






