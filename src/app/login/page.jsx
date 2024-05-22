"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import  { useState, useEffect } from 'react';
import { login } from '../services/api/user';
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = { username, password };
      const response = await login(credentials);
      console.log('Login successful', response);
      setErrorMessage('');
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('Mission Failed');
    }
  };


  // const [seconds, setSeconds] = useState(30);
  // const [isActive, setIsActive] = useState(true);

  // useEffect(() => {
  //   if (isActive && seconds > 0) {
  //     const interval = setInterval(() => {
  //       setSeconds(prevSeconds => prevSeconds - 1);
  //     }, 1000); // Her 1 saniyede bir azalt

  //     return () => clearInterval(interval); //
  //   } else if (seconds === 0) {
  //     setIsActive(false); //
  //   }
  // }, [isActive, seconds]);
  return (
      <div className={styles.Login}>
        <div className={styles.loginBorder}>
          <div className="text-center">
            <Image
                loading="lazy"
                width={167}
                height={70}
                src="/assets/image/spellorify.svg"
                alt="Tos"
            />
          </div>
          <div className="text-center">
            <h2>Giriş</h2>
            <h5>İmla.az platformasına giriş.</h5>
          </div>
          <div className={`text-center ${styles.right}`}>
            <form onSubmit={handleSubmit} action="">
              <div className={styles.inputBox}>
                <input
                    name="username"
                    id="my"
                    className={styles.input}
                    placeholder=""
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="my">E-mail</label>
              </div>
              <div className={styles.inputBox}>
                <input
                    name="password"
                    id="my1"
                    className={styles.input}
                    placeholder=""
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="my1">Şifrə</label>
              </div>

              <button type="submit" className={styles.buttonHover}>Daxil ol</button>
              <div style={{height:"0px",marginTop:"10px"}}>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}

              </div>
            </form>
          </div>
          <div className="text-center mt-5">
            <Image
                loading="lazy"
                width={117}
                height={20}
                src="/assets/image/footersign.svg"
                alt="Sign"
            />
          </div>
        </div>
        {/* <p>{seconds}</p> */}
      </div>
  );
}
