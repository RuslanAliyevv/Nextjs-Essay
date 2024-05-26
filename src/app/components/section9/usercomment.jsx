import React from 'react'
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function UserComment() {
  return (
    <>
    <div className={styles.UserComment}>
     <div className={styles.row}>
            <div className={styles.left}>
                <div className={styles.imgEdit}>
                <Image
                      loading="lazy"
                      width={500}
                      height={400}
                      src="/assets/image/usercomment.png"
                      alt="Tos"
                    /> 
                </div>
            </div>
            <div style={{background:"rgba(249, 250, 252, 1)"}} className={styles.right}>
                        <div className={styles.rightItems}>
                            <h2>İstifadəçi rəyləri</h2>
                            <h5>Bizim haqqımızda nə deyirlər?</h5>
                </div>
                <div className={styles.box}>
                        <div className={styles.boxDownItems}>
                    <div>
                        <p>Bu saytı istifadə etməyə başladıqdan sonra yazma prosesim dəyişdi. Artıq mətnlərimi düzgün və sürətli bir şəkildə yazıram. Saytın interfeysi sadə və anlaşıqlıdır, və saytın təklif etdiyi dil seçimləri genişdir. Ən əsası, saytın səsləndirmə funksiyası çox effektivdir və məni heyrətə saldı. Təşəkkür edirəm</p>
                       <div className={styles.hr}></div>
                       <div className={styles.boxDown}>
                        <Image
                      loading="lazy"
                      width={33}
                      height={33}
                      src="/assets/image/usercommenthead.png"
                      alt="Tos"
                    /> 
                        <div>
                        <h4>Arif Əlizadə</h4>
                        </div>
                       </div>
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                        <div className={styles.boxDownItems}>
                    <div>
                        <p>Bu saytı istifadə etməyə başladıqdan sonra yazma prosesim dəyişdi. Artıq mətnlərimi düzgün və sürətli bir şəkildə yazıram. Saytın interfeysi sadə və anlaşıqlıdır, və saytın təklif etdiyi dil seçimləri genişdir. Ən əsası, saytın səsləndirmə funksiyası çox effektivdir və məni heyrətə saldı. Təşəkkür edirəm</p>
                       <div className={styles.hr}></div>
                       <div className={styles.boxDown}>
                        <Image
                      loading="lazy"
                      width={33}
                      height={33}
                      src="/assets/image/usercommenthead.png"
                      alt="Tos"
                    /> 
                        <div>
                        <h4>Arif Əlizadə</h4>
                        </div>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
