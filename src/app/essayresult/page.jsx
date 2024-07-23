"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function Result() {
  const [highlightedText, setHighlightedText] = useState("");
  const [finalScore, setFinalScore] = useState(null);
  const [rightWords, setRightWords] = useState([]);

  useEffect(() => {
    const transcription = getCookie("userTranscription");
    const errors = JSON.parse(getCookie("transcriptionErrors"));
    
    if (transcription && errors) {
      const highlighted = highlightErrors(transcription, errors);
      setHighlightedText(highlighted);

      // finalScore'u errors dan gotur
      const score = errors.find(error => error.finalScore)?.finalScore;
      if (score !== undefined) {
        setFinalScore(score);
      }

      // line1Content değerlerini rightWords'e ekle, split hatalarını tekil hale getir
      const wordsSet = new Set(errors.map(error => error.line1Content).filter(Boolean));
      setRightWords(Array.from(wordsSet));
    }
  }, []);

  const highlightErrors = (text, errors) => {
    let newText = text;
    let offset = 0;

    const allErrors = errors.flatMap(error => {
      if (error.line2ContentIndexes && error.line2ContentIndexes.length > 0) {
        return error.line2ContentIndexes.map(index => ({
          startIndex: index.startIndex,
          endIndex: index.endIndex,
        }));
      }
      return [];
    }).sort((a, b) => a.startIndex - b.startIndex);

    allErrors.forEach(({ startIndex, endIndex }) => {
      const start = startIndex + offset;
      const end = endIndex + offset + 1; // endIndex'in kendisini de dahil edin
      const before = newText.slice(0, start);
      const highlight = newText.slice(start, end);
      const after = newText.slice(end);

      newText = `${before}<mark>${highlight}</mark>${after}`;
      offset += 13; 
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
            {finalScore !== null && (
              <p style={{color:"red",fontWeight:"bold"}}  className="text-center">Final Score: {finalScore}</p>
            )}
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
          <div
           style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "30px",
          }}
          >
          <div>
          <span style={{color:"blue"}}>Right Words:</span>
              {rightWords.map((word, index) => (
                <span style={{color:"green"}} key={index}> {word},</span>
              ))}
          </div>
           
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




