import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Contact Us!</h5>
            <p>deified1.7lnd@gmail.com</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box la">
          <div className="box-info lb">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquarters</h5>
            <p>London, United Kingdom</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box flip-box">
          {" "}
          {/* Add the class here */}
          <div className="box-info">
            <div className="front">
              <div className="info-image">
                <i className="fas fa-fax"></i>
              </div>
              <h5>Shipping and Returns</h5>
              <p>Our Shipping Policy</p>
            </div>
            <div className="back">
              <h5>Shipping</h5>
              <p>
                All orders are shipped from London, UK. While orders are
                typically shipped within 2-3 business days, orders may take
                longer due to unforeseen circumstances. You will receive an
                order confirmation email once your order has been successfully
                placed and additional emails once your order has been shipped ar
                delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
