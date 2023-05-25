import { useNavigate } from 'react-router';

import Audiance_Brand_Affinity from '../../comp/Graph/Audiance_Brand_Affinity';
import Audiance_Interest_Distribution from '../../comp/Graph/Audiance_Interest_Distribution ';
import Pie_Gender_Main from '../../GraphTesting/Pie_Gender_Main';
import Audiance_Influencers_Affinity from '../../comp/Graph/Audiance_Influencers_Affinity';


const Insight = () => {
    // const [menu] = useState(Menu);
    const navigate = useNavigate();
    const go = () => {
        navigate("/AdminPanel/admin/dashboard/");
    }

// __________GRAPH1-(Audiance_Interest_Distribution )__________________________________














    return (
        <>

            <div className="tab-pane " id="acc_setting">
                <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>Insights</h4>
                <hr className=" text-muted " />



                <div className='ard' style={{ "minheight": "100vh" }}>
                    <div className="container-fluid">
                        <div className="row">
                          

                            {/* _______________________________gender____________________________________________________________________________ */}
                            <div className="col-md-12  col-sm text-center ">

                                <div className='col-md-12  d-flex justify-content-space-between'>
                                    <div className='col-md-12 d-flex justify-content-around'><Pie_Gender_Main /></div>
                                </div>
                            </div>

                            {/* ______________________________AudianceInterestDistribution_____________________________________________________________________________ */}
                            <hr className='muted p-2' />

                            <div className="col-md-12  col-sm text-center ">
                                <div className='col-md-12 d-flex justify-content-around'>  <Audiance_Interest_Distribution /> </div>
                            </div>

                            {/* _______________________________InfluencersAffinity____________________________________________________________________________ */}
                            <hr className='muted p-2' />               

                            <div className="col-md-12  col-sm text-center ">
                                <div className='col-md-12 d-flex justify-content-around'><Audiance_Influencers_Affinity /></div>
                            </div>
                            
                            {/* ________________________________brandAffinity___________________________________________________________________________ */}
                            <hr className='muted p-2' />

                            <div className="col-md-12  col-sm text-center ">
                                <div className='col-md-12 d-flex justify-content-around'><Audiance_Brand_Affinity /></div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Insight;


