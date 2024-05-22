import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function TestExam() {
  return (
    <div className={styles.TextExam}>
      <div className="container">
        <div className="text-end">
         <Link href="/">
         <button>Ana Səhifə</button>
         </Link>
        </div>
        <h5 className="text-center">
          İmlaya başlamaq üçün aşağıdakı səs faylını başladın.
        </h5>
        {/* <iframe src="" frameborder="0">aaa</iframe> */}
        <form className={styles.form}>
          <div className={styles.textDiv}>
            <textarea className={styles.textarea} id="message" name="message" rows="4" cols="50"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
