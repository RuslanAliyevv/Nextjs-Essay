import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Partner() {
  return (
    <>
      <div className={styles.Partner}>
        <h2 className="text-center">Partnyorlarımız</h2>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-1">
              <div className="box">
                <Image
                  loading="lazy"
                  width={140}
                  height={27}
                  src="/assets/image/partnerlogo1.png"
                  alt="Tos"
                />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="box">
                <Image
                  loading="lazy"
                  width={140}
                  height={27}
                  src="/assets/image/partnerlogo2.png"

                  alt="Tos"
                />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="box">
                <Image
                  loading="lazy"
                  width={140}
                  height={27}
                  src="/assets/image/partnerlogo3.png"

                  alt="Tos"
                />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="box">
                <Image
                  loading="lazy"
                  width={140}
                  height={27}
                  src="/assets/image/partnerlogo4.png"

                  alt="Tos"
                />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="box">
                <Image
                  loading="lazy"
                  width={140}
                  height={27}
                  src="/assets/image/partnerlogo5.png"

                  alt="Tos"
                />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="box">
                <Image
                  loading="lazy"
                  width={140}
                  height={27}
                  src="/assets/image/partnerlogo6.png"

                  alt="Tos"
                />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="box">
                <Image
                  loading="lazy"
                  width={140}
                  height={27}
                  src="/assets/image/partnerlogo7.png"

                  alt="Tos"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
