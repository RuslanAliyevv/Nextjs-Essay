"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { EditorState, convertToRaw } from "draft-js";
import Loading from "../essayexam/loading";
import axios from "axios";
import { useLanguage } from "../components/Context/context";
import { getCookie, deleteCookie } from "cookies-next";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function TestExam() {
  const { selectedLanguage  } = useLanguage();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [timer, setTimer] = useState(30);
  // const [isTimerRunning, setIsTimerRunning] = useState(false);
  const audioRef = useRef(null);
  // const router = useRouter();
  // const [audioSrc, setAudioSrc] = useState("");

  // useEffect(() => {
  //   const fetchAudio = async () => {
  //     try {
  //       const response = await axios.get("/api/attachment/audio", {
  //         headers: {
  //           "accept-language":
  //             selectedLanguage || getCookie("selectedLanguage"),
  //         },
  //       });
  //       const audioPath = response.data.data.attachmentPath.replace(/\\/g, "/");
  //       console.log(audioPath);
  //       const audioUrl = `/api/${audioPath}`;
  //       setAudioSrc(audioUrl);
  //       setAudioData(response.data.data.attachmentId);
  //     } catch (error) {
  //       console.error("Error fetching audio:", error);
  //     }
  //   };

  //   fetchAudio();
  // }, []);

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
  }, []);

 

 

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();
  };

 
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
        <form className={styles.form}>
          <audio
            src="/assets/image/the-wind-goodbye-2023-183300.mp3"
            style={{ marginTop: "10px" }}
            controls
            ref={audioRef}
          >
            <source type="audio/mpeg" />
            Tarayıcı audio elementini desteklemir.
          </audio>
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
          {/* <button type="button" onClick={getEditorContent}>
           Testiqle
          </button> */}
        </form>
      </div>
    </div>
  );
}
