"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
export default function Info() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleStartClick = () => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      router.push("/essaypage");
    } else {
      setErrorMessage("Zəhmət olmasa Daxil olun !");
    }
  };
  return (
    <div className={styles.Info}>
      <div className="container">
        <div className={`row ${styles.rowAll}`}>
          <div className="col-lg-6">
            <div className={styles.left}>
              <div>
                <div className={styles.h1Edit}>
                  <h1>
                    Yazın, nəzərdən keçirin və öyrənin ki, bilik və
                    bacarıqlarınızı artırasınız.
                  </h1>
                </div>
                <h5>
                  Yazı bacarıqlarınızı artırmaq üçün mütəmadi olaraq yazılış
                  qaydalarını məşq etmək vacibdir, çünki sözlərin düzgün
                  yazılışını mənimsəmək yalnız ünsiyyətinizi yaxşılaşdırmır, həm
                  də dili effektiv istifadə etməkdə inamınızı artırır.
                </h5>
                <button className={styles.buttonHover} onClick={handleStartClick}>Başla</button>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.right}>
              <Image
              className={styles.circleImg}
                loading="lazy"
                width={560}
                height={560}
                src="/assets/image/infocircle.png"
                alt="Tos"
              />

              <Image
              className={styles.audio}
                loading="lazy"
                width={407}
                height={403}
                src="/assets/image/section2audioimg.png"
                alt="Tos"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
