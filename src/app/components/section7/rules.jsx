import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Rules() {
  return (
    <>
      <div id="Rules" className={styles.Rules}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.left}>
                <h5>Qaydalar</h5>
                <div>
                  <h2>Mükəmməl ünsiyyətin təməli!</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.right}>
                <div>
                  <p>
                    Qrammatika qaydaları, dilin strukturunu və məntiqini
                    anlamağımıza kömək edir, düzgün və effektiv ünsiyyət üçün
                    vacibdir. Onlar yazılı və şifahi ifadələrimizi aydınlaşdırır
                    və anlaşılmasını asanlaşdırır.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.downHoverDiv}>
            <div>
              <div className={styles.container}>
                <div className={styles.single}>
                  <div className={styles.content}>
                    <h2>Ayrı Yazılan Sözlər</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt quas itaque architecto, esse possimus quae
                      distinctio nemo inventore repellat dignissimos voluptatum,
                      minima repudiandae obcaecati enim ad repellendus adipisci
                      sequi? Sed?
                    </p>
                  </div>
                </div>
                <div className={styles.single}>
                  <div className={styles.content}>
                    <h2>Orfoqrafik qaydalar</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt quas itaque architecto, esse possimus quae
                      distinctio nemo inventore repellat dignissimos voluptatum,
                      minima repudiandae obcaecati enim ad repellendus adipisci
                      sequi? Sed?
                    </p>
                  </div>
                </div>
                <div className={styles.single}>
                  <div className={styles.content}>
                    <h2>Ədatlar və Bağlayıcı<lar></lar></h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt quas itaque architecto, esse possimus quae
                      distinctio nemo inventore repellat dignissimos voluptatum,
                      minima repudiandae obcaecati enim ad repellendus adipisci
                      sequi? Sed?
                    </p>
                  </div>
                </div>
                <div className={styles.single}>
                  <div className={styles.content}>
                    <h2>Durğu İşarələri</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt quas itaque architecto, esse possimus quae
                      distinctio nemo inventore repellat dignissimos voluptatum,
                      minima repudiandae obcaecati enim ad repellendus adipisci
                      sequi? Sed?
                    </p>
                  </div>
                </div>
                <div className={styles.single}>
                  <div className={styles.content}>
                    <h2>Samitlərin Yazılışı</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt quas itaque architecto, esse possimus quae
                      distinctio nemo inventore repellat dignissimos voluptatum,
                      minima repudiandae obcaecati enim ad repellendus adipisci
                      sequi? Sed?
                    </p>
                  </div>
                </div>
                <div className={styles.single}>
                  <div className={styles.content}>
                    <h2>Tire (—) və Defis (-)</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt quas itaque architecto, esse possimus quae
                      distinctio nemo inventore repellat dignissimos voluptatum,
                      minima repudiandae obcaecati enim ad repellendus adipisci
                      sequi? Sed?
                    </p>
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
