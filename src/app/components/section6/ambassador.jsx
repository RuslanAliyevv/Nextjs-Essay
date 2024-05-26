import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Ambassador() {
  return (
    <div className={styles.Ambassador}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="left">
              <div className={styles.leftBox}>
                <h5>İmla Səfirlərimiz</h5>
                <div>
                <h2>Yazının incəliklərini mütəxəssislərlə kəşf edin.</h2>
                </div>
               <div>
               <p>
                  İmla səfirləri dilin orfoqrafiya və qrammatika qaydalarını
                  tədqiq edir, yazıların düzgünlüyünü təmin edir və bu bilikləri
                  başqalarına öyrədirlər.
                </p>
               </div>

              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="right">
              <div className="row">
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador1.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Name Surname</h5>
                    </div>
                    <p>İngilis Dili</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador2.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Aydın Məmmədov</h5>
                    </div>
                    <p>Azərbaycan Dili</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador2.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Aydın Məmmədov</h5>
                    </div>
                    <p>Türk Dili</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador3.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Nəsimi Məmmədov</h5>
                    </div>
                    <p>Ərəb Dili</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador4.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Name Surname</h5>
                    </div>
                    <p>İspan Dili</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador5.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Name Surname</h5>
                    </div>
                    <p>Rus Dili</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador6.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Name Surname</h5>
                    </div>
                    <p>Fransız Dili</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styles.itemDiv}>
                    <div className={styles.personImg}>
                      <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        src="/assets/image/ambassador7.png"
                        alt="Tos"
                      />
                    </div>
                    {/* <div className={styles.flag}>
                     <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/ambassadorflag1.png"
                      alt="Tos"
                    />
                     </div> */}
                    <div className={styles.h5Edit}>
                      <h5>Name Surname</h5>
                    </div>
                    <p>Çin Dili</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
