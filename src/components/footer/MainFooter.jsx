import React from "react";
import "./styles/footer.css";

const MainFooter = () => {
    return(
        <>
            <section className="ft-main">
                <div className="ft-main-item">
                    <h2 className="ft-title">About</h2>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">Resources</h2>
                    <ul>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">eBooks</a></li>
                        <li><a href="#">Webinars</a></li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">Contact</h2>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">Stay Updated</h2>
                    <p>Subscribe to our newsletter to get our latest news.</p>
                    <div className="form">
                        <input name="email" type="email" placeholder="Enter email"/>
                        <input type="submit" value="Submit"/>
                    </div>

                </div>
            </section>
        </>
    );
}

export default MainFooter