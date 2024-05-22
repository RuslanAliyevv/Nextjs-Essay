import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Ekspert() {
  return (
    <>
      <div className={styles.Ekspert}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left">
                <h5>Ekspertlərimiz</h5>
               <div>
               <h3>
                  Yüksək <span>peşəkarlıq,</span>Geniş <span>təcrübə.</span>
                </h3>
               </div>
                <div>
                  <p>
                    Bizim mütəxəssislərimiz geniş təcrübəyə və dərin biliklərə
                    malik olan peşəkar komanda üzvləridir. Hər biri öz sahəsində
                    yüksək ixtisaslıdır və illərlə təcrübəyə malikdir. Onlar
                    təlim və tədris sahəsində əhəmiyyətli nailiyyətlər əldə
                    etmiş, bir çox insanın uğur hekayələrində pay sahibi
                    olmuşlar.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
                <div className="right">
                <Image
                  loading="lazy"
                  width={523}
                  height={427}
                  src="/assets/image/eskperts.png"
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
