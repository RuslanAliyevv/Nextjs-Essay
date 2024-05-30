import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Statistic() {
  return (
    <>
      <div id="Statistic" className={styles.Statistic}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.left}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.leftDown}>
                      <div className={styles.hr1}></div>
                      <div className={styles.hr2}></div>
                      <span>9210</span>
                      <span>+</span>
                      <h5>Məmnun müştəri</h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="leftDown">
                      <span>18</span>
                      <span>+</span>
                      <h5>KAMANDA ÜZVÜ</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-5">
                    <div className="leftDown">
                      <span>28</span>
                      <span>+</span>
                      <h5>Partnyor</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-5">
                    <div className="leftDown">
                      <span>22</span>
                      <span>+</span>
                      <h5>Mükafat</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <h2>Statistika</h2>
                <div>
                  <p>
                    Məlumatlarımız, əməkdaşlığımızın fəaliyyətlərinin nəzarət
                    altında olduğunu və müsbət nəticələri vurğulayır. Bu
                    nəticələr, bizim tərəfdən göstərilən səylərin
                    sənədləşdirilmiş qərarlılığı, müştərilərimizlə olan əla
                    əlaqələrimizin nəticələri olaraq izah edilə bilər. Həmçinin,
                    məlumatlarımız bizi konkurentlərimizlə müqayisədə ən yaxşı
                    mövqe almış, bu da bizim təşkilatımızın müvafiq sektordakı
                    gücünü və inkişafını sübut edir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
