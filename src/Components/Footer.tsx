import { FunctionComponent, useEffect, useState } from "react";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = ({}) => {
  return (
    <div
      className="vh-75 text-light footer"
      style={{
        borderTop: "solid 1px white",
        paddingBlock: "30px",
        marginTop: "20px",

        /* margin: "0 auto",
        textAlign: "center", */
      }}
    >
      <div
        className="row footer-second-section"
        style={{
          textAlign: "left",
          width: "80%",
          margin: "0 auto",
          marginBlock: "70px",
        }}
      >
        <div className="col-md-3">
          <h3 className="text-light">CONTACT US</h3>

          <p className="pt-3">
            <i className="fa-solid fa-location-dot me-1"></i>
            60 29th Street San Francisco, 94110 507-Union Trade Center, United
            States America
          </p>

          <p className="pt-3">
            <i className="fa-solid fa-phone me-1"></i>Call us now: +91
            123-456-789
          </p>
          <p className="pt-3">
            <i className="fa-solid fa-envelope me-1"></i>Email: demo@example.com
          </p>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <div className="col-md-3">
          <h3 className="text-light">INFORMATION</h3>

          <li>Product Support</li>
          <li>Checkout</li>
          <li>Report Abuse</li>
          <li>Redeem Voucher</li>
          <li>Order Status</li>
        </div>
        <div className="col-md-3">
          <h3 className="text-light">SUPPORT</h3>

          <li>Policies & Rules</li>
          <li>Privacy Policy</li>
          <li>License Policy</li>
          <li>My Account</li>
          <li>Locality</li>
        </div>
        <div className="col-md-3">
          <h3 className="text-light">NEWSLETTER</h3>
          <p>
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>
          <input
            type="text"
            className="rounded-5 p-3"
            placeholder="Enter Your Email"
          />
          <br />
          <button className="btn btn-success fs-5 ms-2">Subscribe</button>
        </div>
      </div>
      <div
        style={{
          borderTop: "solid 1px white",
          paddingBlock: "10px",
          marginTop: "20px",
        }}
      >
        <p>© 2024 All Rights Reserved. Developed By Codezeel</p>
      </div>
    </div>
  );
};
export default Footer;
