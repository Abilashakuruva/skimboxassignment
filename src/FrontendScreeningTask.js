import React from 'react';
import './style.css'
const FrontendScreeningTask = () => {
    return (
        <div className="box-container d-flex">
            <h1 className="heading-container">Screening Task For Frontend Developer</h1>
            <div className="container d-flex justify-content-center">
        <div className="all-container d-flex flex-row justify-content-center">
                    <div className="container1">
                        <span className="heading1">Bundle & Save</span>
                    </div>
                    <div className="container2">
                        <div className="inner-container ">
                            <div className="ellipse">
                                <input type="checkbox" className="ellipse" />
                            </div>
                            <div className="pair-detials">
                                <span className="details">1 Pair</span>
                                <span className="details">DKK 195.00</span>
                            </div>
                            <div className="offer-details">
                                <span className="details">50% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div className="container3">
    <div className="inner-container col-md-12">
        <div className="ellipse">
            <input type="checkbox" className="ellipse" />
        </div>
        <div className="pair-detials">
            <span className="details">2 Pair</span>
            <span className="details">DKK 345.00</span>
        </div>
        <div className="offer-details">
            <p className="Most">Most Popular</p>
            <span className="details">50% OFF</span>
        </div>
    </div>
    {/* <div className="line-throught">
        DKK 195.00
    </div> */}
</div>
                    <div className="container2">
                        <div className="inner-container ">
                            <div className="ellipse">
                                <input type="checkbox" className="ellipse" />
                            </div>
                            <div className="pair-detials">
                                <span className="details">3 Pair</span>
                                <span className="details">DKK 528.00</span>
                            </div>
                            <div className="offer-details">
                                <span className="details">60% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div className="free-total">
                        <span className="shipping">Free 2 Day Shipping</span>
                        <span className="total-shipping">Total : DKK 360.00</span>
                    </div>
                    <button>Add to Cart</button>
                    <span className="power-by">@ Powered by Pumped</span>
                </div>    
            </div>
        </div>
    );
};

export default FrontendScreeningTask;
