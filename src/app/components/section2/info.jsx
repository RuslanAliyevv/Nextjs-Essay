import React from 'react'
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Info() {
  return (
    <div className={styles.Info}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className={styles.left}>
                        <div>
                           <div className={styles.h1Edit}> <h1>Yazın, nəzərdən keçirin və öyrənin ki, bilik və bacarıqlarınızı artırasınız.</h1></div>
                            <h5>Yazı bacarıqlarınızı artırmaq üçün mütəmadi olaraq yazılış qaydalarını məşq etmək vacibdir, çünki sözlərin düzgün yazılışını mənimsəmək yalnız ünsiyyətinizi yaxşılaşdırmır, həm də dili effektiv istifadə etməkdə inamınızı artırır.</h5>
                            <button>Başla</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.right}>
                    <Image
                  loading="lazy"
                  width={600}
                  height={600}
                  src="/assets/image/infocircle.png"
                  alt="Tos"
                />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
