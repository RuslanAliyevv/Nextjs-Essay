"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { getCookie } from 'cookies-next';
export default function MainPageHeader() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //   const accessToken = getCookie('accessToken');
    //   if (accessToken) {
    //     setIsLoggedIn(true);
    //   }
    // }, []);
  return (
    <div className={styles.MainHeader}>
      <div className="container">
        <div className={`row align-items-center ${styles.rowAll}`}>
          <div className="col-lg-7">
            <div className={styles.left}>
              <Link href="/">
                <Image
                  loading="lazy"
                  width={117}
                  height={25}
                  src="/assets/image/newspellorify.svg"
                  alt="Tos"
                />
              </Link>
             <Link href="/">
             <span>Ekspertlərimiz</span>
             </Link>
             <Link href="/">
             <span>Statistika</span>
             </Link>
             <Link href="/">
             <span>Qaydalar</span>
             </Link>
             <Link href="/">
             <span>Reytinq Cədvəli</span>
             </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className={styles.right}>
                <Link href="/testpage">
                <span>Sınaq</span>
                </Link>
                {/* {isLoggedIn ? (
                <span>Welcome</span>
              ) : (
                <Link href="/login">
                  <button>Daxil ol</button>
                </Link>
              )} */}
                <Link href="/login">
              <button>Daxil ol</button>
                </Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
