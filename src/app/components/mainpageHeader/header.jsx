"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { getCookie,deleteCookie } from 'cookies-next';
import { useRouter } from "next/navigation";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export default function MainPageHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    setIsLoggedIn(false);
    router.push('/'); // Ana sayfaya yönlendir
  };

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
              <ScrollLink
                to="Ekspert"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>Ekspertlərimiz</span>
              </ScrollLink>
              <ScrollLink
                to="Statistic"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>Statistika</span>
              </ScrollLink>
              <ScrollLink
                to="Rules"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>Qaydalar</span>
              </ScrollLink>
              <ScrollLink
                to="Ranking"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>Reytinq Cədvəli</span>
              </ScrollLink>
            </div>
          </div>
          <div className="col-lg-5">
            <div className={styles.right}>
              <Link href="/testpage">
                <span>Sınaq</span>
              </Link>
              {isLoggedIn ? (
                <>
                  <button onClick={handleLogout} className={styles.buttonHover}>Çıxış</button>
                </>
              ) : (
                <Link href="/login">
                  <button className={styles.buttonHover}>Daxil ol</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}