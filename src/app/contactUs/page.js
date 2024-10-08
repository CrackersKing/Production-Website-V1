"use client";
import React, { useEffect, useState } from "react";
import Styles from "../styles/contactUs.module.css";
import leftshotcracker from "../assets/leftshotcracker.svg";
import rightshotcracker from "../assets/rightshotcracker.svg";
import youtube from "../assets/utube.svg";
import facebook from "../assets/fb.svg";
import instagram from "../assets/insta.svg";
import Image from "next/image";
import { CRACKER_DATA } from "../cosntant";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import map from "../assets/map.png";
import Banner from "../pages/banner";
// Example Slide Components

const contactUs = () => {
  const [fireData, setFirerData] = useState(CRACKER_DATA || []);
  const [shopKart, setShopKart] = useState([]);

  // useEffect(() => {
  //   setFirerData(CRACKER_DATA);
  // }, []);
  const backgroundImageStyle = (imageUrl) => {
    return {
      backgroundImage: `url(${imageUrl})`,
      height: "143px", // Adjust as needed
      width: "138px", // Adjust as needed
    };
  };

  const options = ["flowerSpot", "Bomb", "Shot"];

  const handleCardClick = (id, key, type, value, coutType) => {
    let val = "";
    if (type === "count" && coutType === "add") {
      val = value + 1;
    } else if (type === "count" && coutType === "minus" && value > 0) {
      val = value - 1;
    } else if (type === "count" && coutType === "minus" && value === 0) {
      val = 0;
    }
    if (type === "Selection") {
      val = !value;
    }

    const data = fireData.map((item) => {
      if (item?.id === id) {
        return {
          ...item,
          sparklersData: item?.sparklersData.map((item) => {
            if (item?.key === key) {
              return { ...item, [type]: val };
            } else {
              return item;
            }
          }),
        };
      }
      return item;
    });
    setFirerData(data);
    const valData = data.map(({ sparklersData }) => sparklersData);
    const dataVal = valData.flat();
    const checkoutData = dataVal.filter((item) => item?.Selection === true);
    sessionStorage.setItem("cartData", checkoutData);
    setShopKart(checkoutData);
  };
  return (
    <>
      <Navbar fireData={shopKart} />
      {/* <div className={Styles.bannerBg1}>
        <p className={Styles.bannerHeader}>Enjoy Diwali’s Sale! </p>
        <p className={Styles.bannerSubHeader} style={{ marginTop: "10px" }}>
          Cracker’s King
        </p>
      </div> */}
      <Banner
        backgroundImage={
          "https://crackerskingsassets.s3.ap-south-1.amazonaws.com/contact_Banner.png"
        }
        headerText="Enjoy Diwali’s Sale! "
        subheaderText="Cracker’s King"
        mobileBackgroundImage={
          "https://crackerskingsassets.s3.ap-south-1.amazonaws.com/contact_mobile_Banner.svg"
        }
      />

      <div className={Styles.contactUsContainer}>
        <div className={Styles.contactUsInnerContainer}>
          <div className={Styles.contactUsContent}>
            <p className={Styles.contactUsHeader}>Contact Details</p>
            <div className={Styles.contactUsDetails}>
              <p className={Styles.contactUskey}>Address</p>
              <p className={Styles.contactUsValue}>
                1/1468 V1,Jeyarathinam nagar, Viswanatham road sivakasi.626123
                tamilnadu
              </p>
            </div>
            <div className={Styles.contactUsDetails}>
              <p className={Styles.contactUskey}>Contact</p>
              <p className={Styles.contactUsValue}>
                +91 88077 75335, +91 93601 97778
              </p>
            </div>
            <div className={Styles.contactUsDetails}>
              <p className={Styles.contactUskey}>Mail</p>
              <p className={Styles.contactUsValue}>crackersking@gmail.com</p>
            </div>
          </div>
          <p className={Styles.contactUsFollowUsOn}>Follow Us On</p>
          <div className={Styles.socialIcons}>
            <Image src={youtube} />
            <Image src={facebook} />
            <a link="https://www.instagram.com/crackersking.in?igsh=NXR3dzV2MTQ1MjFu">
              <Image src={instagram} />
            </a>
          </div>
        </div>
        <Image src={map} className={Styles.contactUsMap} />
      </div>

      <div className={Styles.homeBulkSaving} style={{ paddingTop: "40px" }}>
        <Image src={leftshotcracker} alt="leftshotcracker" />
        <div className={Styles.bulkSavingWrapper}>
          <p className={Styles.bulksavingHeader}>
            Unlock Big Bulk Savings for Diwali
          </p>
          <p className={Styles.bulksavingDesc}>
            Want better deals than everyone else? Contact us to discover special
            discounts on bulk orders and make your Diwali
            celebration truly amazing!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <a href="https://wa.me/918807775335">
              <button
                className={Styles.bulksavingBtn}
                style={{ cursor: "pointer" }}
              >
                Quick Connect
              </button>
            </a>
          </div>
        </div>

        <Image src={rightshotcracker} alt="rightshotcracker" />
      </div>

      <Footer />
    </>
  );
};

export default contactUs;
