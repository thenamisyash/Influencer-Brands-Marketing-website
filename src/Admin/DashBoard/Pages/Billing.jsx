import { useEffect } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';


const Billing = () => {
  const navigate = useNavigate();
  useEffect(() => {

    const timer = setTimeout(() => {
      swal("Oops!", "Seems like under Maintainance ", "info"); 
    }, 1000);
    const timer2 = setTimeout(() => {
   
      navigate("/AdminPanel/admin/dashboard/");
    }, 2500);

    
    return () => clearTimeout(timer,timer2);
  }, [])



  return (
    <>
      <div className="tab-pane  " id="billing">

        <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>BILLING</h4>
        <hr className=" text-muted " />
        {/* payment method add  */}
        <div className="">
          <label className="px-1">Payment Method</label>
          <br />
          <small id="#" className="form-text text-muted px-1">You have not added a payment method.</small>
          <br />
          <button type="button" className="btn btn-primary px-3 mt-3 mx-1 ">Add Payment Method &nbsp;  &nbsp; <i className="fa-solid fa-circle-plus fa-beat fa-xl"></i></button>
        </div>
        {/* payment history  */}
        <div className=" mt-4 border-color-dark  p-1 rounded-2">
          <label className="px-1">Payment History :-</label>
          <div className="border border-dark-muted p-2 mt-3">
            <p className="text-center">You have not made any payment.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Billing;