import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div className="container">
          <div className="row">
            <div style={{ width: "27%" }} className="col-lg-3">
              <div className="box">
                <Link href="/">
                  <Image
                    loading="lazy"
                    width={117}
                    height={25}
                    src="/assets/image/newspellorify.svg"
                    alt="Tos"
                  />
                </Link>
                <div>
                  <p>
                    Qulaqlarınızla diqqətlə eşidin və mətni dəqiq şəkildə
                    yazaraq diktant bacarıqlarınızı inkişaf etdirin.
                  </p>
                  <div className={styles.iconDiv}>
                    <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/footerlinkedin.png"
                      alt="Tos"
                    />
                    <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/footerlfacebook.png"
                      alt="Tos"
                    />
                    <Image
                      loading="lazy"
                      width={27}
                      height={27}
                      src="/assets/image/footerinstagram.png"
                      alt="Tos"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "28.333333%" }} className="col-lg-4">
              <div className="box">
                <h3>Məzmun</h3>
                <h5>Haqqımızda</h5>
                <h5>Ekspertlərimiz</h5>
                <h5>Partnyorlarımız</h5>
                <h5>Qaydalarımız</h5>
                <h5>Sınaq</h5>
                <h5>Tiplər</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <h3>Informasiya</h3>
                <h5>Gizlilik Siyasəti</h5>
                <h5>Xidmət Şərtləri</h5>
                <h5>Təhlükəsizlik</h5>
                <h5>FAQ</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <h3>Əlaqə</h3>
                <h5>Bizimlə əlaqə</h5>
                <h5>Kömək Mərkəzi</h5>
              </div>
            </div>
          </div>
          <div className={styles.hr}>
            <div className={`row align-items-center ${styles.downRow}`}>
              <div className="col-lg-6">
                <div className={styles.left}>
                  <span>
                    <Image
                      loading="lazy"
                      width={18}
                      height={18}
                      src="/assets/image/footercopy.png"
                      alt="Tos"
                    />
                  </span>
                  <span>2024 Spellorify - All Rights Reserved.</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.right}>
                  <span>Powered by </span>
                  <span>
                    <Image
                      loading="lazy"
                      width={99}
                      height={20}
                      src="/assets/image/footerkoikom.png"
                      alt="Tos"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
