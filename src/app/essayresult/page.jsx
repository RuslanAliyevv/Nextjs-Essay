"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function Result() {
  const router = useRouter();
  const [highlightedText, setHighlightedText] = useState("");

  useEffect(() => {
    const transcription = getCookie("userTranscription");
    const errors = JSON.parse(getCookie("transcriptionErrors"));
    
    if (transcription && errors) {
      const highlighted = highlightErrors(transcription, errors);
      setHighlightedText(highlighted);
    }
  }, []);

  const highlightErrors = (text, errors) => {
    let newText = text;
    let offset = 0;

    errors.forEach((error) => {
      if (error.line2ContentIndexes && error.line2ContentIndexes.length > 0) {
        error.line2ContentIndexes.forEach((index) => {
          const start = index.startIndex + offset;
          const end = index.endIndex + offset + 1;
          const before = newText.slice(0, start);
          const highlight = newText.slice(start, end);
          const after = newText.slice(end);

          newText = `${before}<mark>${highlight}</mark>${after}`;
          offset += 13; // <mark></mark> eklenmesiyle oluşan offset
        });
      }
    });

    return newText;
  };

  return (
    <div className={styles.Result}>
      <div className={styles.resultBorder}>
        <div className={styles.resultItems}>
          <div
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "30px",
            }}
          >
            <h3 className="text-center">İmla</h3>
          </div>
          <div
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "30px",
            }}
            dangerouslySetInnerHTML={{ __html: highlightedText }}
          >
          </div>
          <div className={`text-center ${styles.buttonDiv}`}>
            <Link href="/">
              <button className={styles.buttonHover}>Ana səhifəyə keçid</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



