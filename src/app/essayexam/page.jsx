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
export default function EssayExam({}) {
  const { selectedLanguage, languages } = useLanguage();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [timer, setTimer] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioData, setAudioData] = useState("");

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get("/api/attachment/audio", {
          headers: {
            // Authorization: `Bearer ${accessToken}`,
            "accept-language":
              selectedLanguage || getCookie("selectedLanguage"),
          },
        });
        const audioPath = response.data.data.attachmentPath.replace(/\\/g, "/");
        console.log(audioPath);
        const audioUrl = `/api/${audioPath}`;
        setAudioSrc(audioUrl);
        setAudioData(response.data.data.attachmentId);
        console.log(response.data);
        console.log(audioUrl);
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    };

    fetchAudio();
  }, [selectedLanguage]);

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

    const preventPause = (event) => {
      const audioElement = audioRef.current;
      if (audioElement && !audioElement.ended) {
        event.preventDefault();
        audioElement.play();
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnd);
      audioElement.addEventListener("pause", preventPause);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnd);
        audioElement.removeEventListener("pause", preventPause);
      }
    };
  }, [isTimerRunning]);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const contentState = editorState.getCurrentContent();
      const plainText = contentState.getPlainText();

      const user = JSON.parse(getCookie("userInfo"));
      console.log("user", user);
      const response = await axios.post("/api/transcription", {
        userId: user.userId,
        attachmentId: audioData,
        timeSpendForUserCheck: 30,
        userTranscription: plainText,
      });
      console.log("Transcription sent to backend:", plainText);
      console.log(response.data);

      

      // Başarılı gönderim sonrası işlemler
      const { score, wordMistakes, spaceMistakes, specialCharMistakes } = response.data;
      router.push(
        `/essayresult?userTranscription=${encodeURIComponent(plainText)}&score=${score}&wordMistakes=${encodeURIComponent(
          JSON.stringify(wordMistakes)
        )}&spaceMistakes=${encodeURIComponent(
          JSON.stringify(spaceMistakes)
        )}&specialCharMistakes=${encodeURIComponent(
          JSON.stringify(specialCharMistakes)
        )}`
      );
    } catch (error) {
      // Hata durumunda işlemler
      console.error("Error handling submission:", error);
      setIsLoading(false);
    }
  };

  // const onEditorStateChange = (editorState) => {
  //   setEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const plainText = contentState.getPlainText();
  //   sendToBackend(plainText);
  // };

  // const sendToBackend = async (text) => {
  //   try {
  //     const user = JSON.parse(getCookie("userInfo"));
  //     console.log("user", user);
  //     // await axios.post("/api/transcription", { userTranscription: text });
  //     console.log("Transcription sent to backend:", text);
  //   } catch (error) {
  //     console.error("Error sending transcription to backend:", error);
  //   }
  // };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();
  };

  const handlePastedText = () => {
    return true; // Prevent default paste behavior
  };

  const preventDefaultPaste = (e) => {
    e.preventDefault(); // Prevent paste event
  };

  useEffect(() => {
    const editorNode = document.querySelector(".DraftEditor-root");
    if (editorNode) {
      editorNode.addEventListener("paste", preventDefaultPaste);
    }
    return () => {
      if (editorNode) {
        editorNode.removeEventListener("paste", preventDefaultPaste);
      }
    };
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      <div className={styles.EssayExam}>
        <div className="container">
          {/* <div className="text-end">
            <Link href="/">
              <button>Ana Səhifə</button>
            </Link>
          </div> */}
          <div className={styles.rowAll}>
            <div className={styles.left}>
              <span>Dil:</span>
              <span style={{ color: "red" }}>
                {
                  languages.find(
                    (lang) => lang.language_code === selectedLanguage
                  )?.language_name
                }
              </span>
            </div>
          </div>
          <h5>İmlaya başlamaq üçün aşağıdakı səs faylını başladın.</h5>
          <audio
            controlsList="nodownload noplaybackrate"
            src={audioSrc}
            style={{ marginTop: "10px" }}
            controls
            ref={audioRef}
          >
            <source type="audio/mpeg" />
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
                      // handlePastedText={handlePastedText}
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
                    <span className={isTimerRunning ? styles.redText : ""}>
                      {timer}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              ref={buttonRef}
              onClick={handleSubmit}
              className={styles.endButton}
            >
              Təsdiqlə
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
