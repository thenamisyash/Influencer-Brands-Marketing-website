import { Link } from "react-router-dom";
const Error = () => {
    return (
        <>
            <div className>
                <section className="page_404">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="four_zero_four_bg" style={{ "width": "100%" }}>
                                    <h1 className="text-center ">404!!</h1>
                                    <div className="contant_box_404">
                                        <h3 className="h2">Look like you're lost</h3>
                                        <p>the page you are looking for is not avaible!</p>
                                        <Link to="login" className="text-decoration-none link_404" >Go to Home</Link>
                                        {/* <a href="" className="link_404">Go to Home</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Error;