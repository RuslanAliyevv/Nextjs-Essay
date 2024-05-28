import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function InfoVideo() {
  return (
    <>
      <div className={styles.InfoVideo}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className={styles.leftUp}>
                <div>
                  <h2>
                    Daha yaxşı yazı, daha <span>yaxşı nəticələr</span>
                  </h2>
                </div>
                <p>
                  Səs yazısını diqqətlə dinləyin, eşitdiyinizi dəqiq şəkildə
                  yazın və hər bir kəlmə ilə yazı bacarıqlarınızı zirvəyə
                  çatdırın.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div>
                <Image
                  loading="lazy"
                  width={635}
                  height={327}
                  src="/assets/image/testVideo.png"
                  alt="Tos"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className={styles.leftDown}>
                <div>
                  <Image
                    loading="lazy"
                    width={635}
                    height={327}
                    src="/assets/image/testVideo.png"
                    alt="Tos"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className={styles.rightDown}>
                <div>
                  <h2>
                    Başlamazdan əvvəl özünüzü <span> sınayın.</span>
                  </h2>
                </div>
                <p>
                  mla yazmağa başlamazdan əvvəl özünüzü sınayın, bilik və
                  bacarıqlarınızı qiymətləndirin, zəif tərəflərinizi müəyyən
                  edin və uğurla yazmaq üçün tam hazırlıqlı olduğunuzdan əmin
                  olun.
                </p>
               <Link href="/testpage">
               <button className={styles.buttonHover}>Sınaq</button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
