import React from 'react';
import { Outlet } from 'react-router';
import LogIn from './LogIn';
// import swal from 'sweetalert';

const PrivateRoutes = () => {
  const LoggedIn = window.localStorage.getItem("isLoggedIn");
  // console.log(LoggedIn, "login?");

  if (LoggedIn) {
    return (
      <Outlet />
    );
  } else {
    return (
      <>
        {/* <Outlet /> */}

        <LogIn />
        {/* swal("Logged out!", "You have logged out Successfully, Login Again.", "success"); */}
      </>
    );
  }
}
export default PrivateRoutes;

export const baseUrl = "https://bountyandthreads-backend.azurewebsites.net/";
// export const baseUrl = "http://localhost:8081";