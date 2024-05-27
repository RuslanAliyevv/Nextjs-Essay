"use client"
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import  { useState,useEffect,useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { EditorState, convertToRaw } from "draft-js";
import Loading from "../essayexam/loading";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
export default function EssayExam() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [timer, setTimer] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleAudioEnd = () => {
      let countdown = 5;
      setTimer(countdown);
      setIsTimerRunning(true);
      const interval = setInterval(() => {
        countdown -= 1;
        setTimer(countdown);
        if (countdown <= 0) {
          clearInterval(interval);
          buttonRef.current.click();
        }
      }, 1000);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, [isTimerRunning]);
       

  const handleSubmit = () => {
    setIsLoading(true); // Yükleniyor durumunu true yapın
    setTimeout(() => {
      setIsLoading(false); // 2 saniye sonra yükleniyor durumunu false yapın
      router.push('/essayresult');
    }, 2000);
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText(); 
    // console.log(plainText);
  };
  return (
    <>
       {isLoading && <Loading />} {/* Yükleniyor animasyonunu gösterin */}
      <div className={styles.EssayExam}>
        <div className="container">
          <div className="text-end">
            <Link href="/">
              <button>Ana Səhifə</button>
            </Link>
          </div>
          <div className={styles.rowAll}>
            <div className={styles.left}>
              <span>Dil:</span>
              <span> Azərbaycan dili</span>
            </div>
            <div className={styles.right}>
              <span>Səviyyə:</span>
              <span> Orta</span>
            </div>
          </div>
          <h5>İmlaya başlamaq üçün aşağıdakı səs faylını başladın.</h5>
          <audio style={{ marginTop: "10px" }} controls ref={audioRef}>
            <source src="/assets/image/the-wind-goodbye-2023-183300.mp3" type="audio/mpeg" />
            Tarayıcı audio elementini desteklemir.
          </audio>
          <div className={`row align-items-center ${styles.textarearow}`}>
            <div className="col-lg-9">
              <div className={styles.taimerLeft}>
                <form className={styles.form}>
                  <div className={styles.textDiv}>
                    <Editor
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange}
                      placeholder="Metni yazin"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.taimerRight}>
                <div className={styles.taimerBorder}>
                  <div className={styles.taimerItems}>
                    <h2 className="text-center">Taymer</h2>
                    <div className={styles.hr}></div>
                    <span className={isTimerRunning ? styles.redText : ""}>{timer}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button ref={buttonRef} onClick={handleSubmit} className={styles.endButton}>
              Təsdiqlə
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
