import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Ranking() {
  return (
    <>
      <div id="Ranking" className={styles.Ranking}>
        <h2 className="text-center">Reytinq Cədvəli</h2>
        <div className="container">
          <div className={styles.liderBorder}>
            <h5>Lider</h5>
          </div>
          <div className={styles.rankingBorder}>
            <div>
              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-6">
                  <div className={styles.left}>
                    <div className={styles.leftRowDiv}>
                      <div className={styles.leftSpanBorder}>
                      <span>1</span>
                      </div>
                      <div>
                      <h3>Fərhad Əliyev</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.right}>
                    <Image
                      loading="lazy"
                      width={44}
                      height={26}
                      src="/assets/image/rankingflag1.png"
                      alt="Tos"
                    />
                  <div className={styles.spanlang}>
                    <span>Azərbaycan Dili</span>
                    </div>
                   <div className={styles.spanNumber}>
                   <span>3627</span>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className={styles.otherh5Edit}>Digər nəticələr</h5>
          <div className={styles.downRankingBorder}>
          <div className={styles.rankingBorder}>
            <div>
              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-6">
                  <div className={styles.left}>
                    <div className={styles.leftRowDiv}>
                      <div className={styles.leftSpanBorder}>
                      <span>2</span>
                      </div>
                      <div>
                      <h3>Orxan Məmmədov</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.right}>
                    <Image
                      loading="lazy"
                      width={44}
                      height={26}
                      src="/assets/image/rankingflag1.png"
                      alt="Tos"
                    />
                    <div className={styles.spanlang}>
                    <span>Azərbaycan Dili</span>
                    </div>
                   <div className={styles.spanNumber}>
                   <span>3627</span>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rankingBorder}>
            <div>
              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-6">
                  <div className={styles.left}>
                    <div className={styles.leftRowDiv}>
                      <div className={styles.leftSpanBorder}>
                      <span>3</span>
                      </div>
                      <div>
                      <h3>Səbinə Allahverdiyeva</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.right}>
                    <Image
                      loading="lazy"
                      width={44}
                      height={26}
                      src="/assets/image/rankingflag2.png"
                      alt="Tos"
                    />
                   <div className={styles.spanlang}>
                    <span>Alman Dili</span>
                    </div>
                   <div className={styles.spanNumber}>
                   <span>3627</span>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rankingBorder}>
            <div>
              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-6">
                  <div className={styles.left}>
                    <div className={styles.leftRowDiv}>
                      <div className={styles.leftSpanBorder}>
                      <span>4</span>
                      </div>
                      <div>
                      <h3>Kərim Abbasov</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.right}>
                    <Image
                      loading="lazy"
                      width={44}
                      height={26}
                      src="/assets/image/rankingflag3.png"
                      alt="Tos"
                    />
                   <div className={styles.spanlang}>
                    <span>Rus Dili</span>
                    </div>
                   <div className={styles.spanNumber}>
                   <span>3627</span>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.rankingBorder}>
            <div>
              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-6">
                  <div className={styles.left}>
                    <div className={styles.leftRowDiv}>
                      <div className={styles.leftSpanBorder}>
                      <span>5</span>
                      </div>
                      <div>
                      <h3>Abbas Həsənov</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.right}>
                    <Image
                      loading="lazy"
                      width={44}
                      height={26}
                      src="/assets/image/rankingflag2.png"
                      alt="Tos"
                    />
                     <div className={styles.spanlang}>
                    <span>Alman Dili</span>
                    </div>
                   <div className={styles.spanNumber}>
                   <span>3627</span>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
       

          
        </div>
      </div>
    </>
  );
}
