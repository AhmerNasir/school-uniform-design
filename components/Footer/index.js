import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import styles from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="contain">
            <div className="col">
              <h1>Company</h1>
              <div className="footer-social">
                <div className="footer-social-icon">
                  <BiLogoFacebook style={{ width: "25px", height: "25px" }} />
                </div>
                <div className="footer-social-icon">
                  <AiOutlineInstagram
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>
                <div className="footer-social-icon">
                  <AiOutlineTwitter style={{ width: "25px", height: "25px" }} />
                </div>
              </div>
            </div>
            <div className="col">
              <h1>Important Links</h1>
              <ul>
                <li>Track Your Oder</li>
                <li>About Us</li>
                <li>Terms of Sevices</li>
              </ul>
            </div>
            <div className="col">
              <h1>Our Policies</h1>
              <ul>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
            <div className="col">
              <h1>Contact Us</h1>
              <ul>
                <li>Comapny@gmail.com</li>
                <li>Redeem code</li>
                <li>WHOIS lookup</li>
              </ul>
            </div>
          </div>
          <div className="footer-divider" />
          <div
            style={{
              margin: '20px 0',
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>@2023 Company. All rights reserved</p>

            <div className="footer-text">
              <p>Canada (CAD $)</p>{" "}
              <IoIosArrowDown
                color="#fff"
                style={{ width: "15px", height: "15px" }}
              />
            <div className="cards-container">
              <Image
                src="/static/images/visa-card.png"
                alt="card-images"
                width={30}
                height={30}
              />
              <Image
                src="/static/images/visa-card.png"
                alt="card-images"
                width={30}
                height={30}
              />
              <Image
                src="/static/images/visa-card.png"
                alt="card-images"
                width={30}
                height={30}
              />
              <Image
                src="/static/images/visa-card.png"
                alt="card-images"
                width={30}
                height={30}
              />
            </div>
            </div>
            <div></div>

          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

export default Footer;
