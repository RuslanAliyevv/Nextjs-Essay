"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import  { useState, useEffect } from 'react';
export default function Login() {

  // const [seconds, setSeconds] = useState(30);
  // const [isActive, setIsActive] = useState(true);

  // useEffect(() => {
  //   if (isActive && seconds > 0) {
  //     const interval = setInterval(() => {
  //       setSeconds(prevSeconds => prevSeconds - 1);
  //     }, 1000); // Her 1 saniyede bir azalt

  //     return () => clearInterval(interval); // 
  //   } else if (seconds === 0) {
  //     setIsActive(false); // 
  //   }
  // }, [isActive, seconds]);
  return (
    <div className={styles.Login}>
      <div className={styles.loginBorder}>
        <div className="text-center">
          <Image
            loading="lazy"
            width={167}
            height={70}
            src="/assets/image/spellorify.svg"
            alt="Tos"
          />
        </div>
        <div className="text-center">
          <h2>Giriş</h2>
          <h5>İmla.az platformasına giriş.</h5>
        </div>
        <div className={`text-center ${styles.right}`}>
          <form action="">
            <div className={styles.inputBox}>
              <input
                name="email"
                id="my"
                className={styles.input}
                placeholder=""
                type="text"
                required
              />
              <label htmlFor="my">Your Name</label>
            </div>
            <div className={styles.inputBox}>
              <input
                name="email"
                id="my1"
                className={styles.input}
                placeholder=""
                type="email"
                required
              />
              <label htmlFor="my1">E-mail</label>
            </div>

            <button className={styles.buttonHover}>Daxil ol</button>
          </form>
        </div>
        <div className="text-center mt-5">
        <Image
            loading="lazy"
            width={117}
            height={20}
            src="/assets/image/footersign.svg"
            alt="Sign"
          />
        </div>
      </div>
      {/* <p>{seconds}</p> */}
    </div>
  );
}
