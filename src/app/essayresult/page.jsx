"use client"
import React from 'react'
import styles from "./styles.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { useSearchParams,useRouter } from "next/navigation";
const highlightMistakes = (text, wordMistakes, spaceMistakes,specialCharMistakes) => {
  const elements = [];
  const isMistake = new Array(text.length).fill(false);
  const underscorePositions = new Set();
  const specialCharMistakePositions = new Set();
  // Word mistakes
  wordMistakes.forEach((mistake) => {
    const { userWordPositionStart, userWordPositionEnd } = mistake;
    for (let i = userWordPositionStart ; i < userWordPositionEnd; i++) {
      isMistake[i] = true;
    }
  });

  // Space mistakes
  spaceMistakes.forEach((mistake) => {
    const { startPosition, endPosition } = mistake;
    for (let i = startPosition; i < endPosition; i++) { // endPosition dahil değil
      isMistake[i] = true;
    }
    if (endPosition < text.length) {
      underscorePositions.add(endPosition);
    }
  });
  
  

  // Highlight text with underscores
  for (let i = 0; i < text.length; i++) {
    if (underscorePositions.has(i)) {
      elements.push(
        <span key={`underscore-${i}`} style={{ color: "red" ,backgroundColor: "red"}}>
          __
        </span>
      );
    }

    if (isMistake[i]) {
      elements.push(
        <span key={`mistake-${i}`} style={{ color: "red" }}>
          {text[i]}
        </span>
      );
    } else {
      elements.push(
        <span key={`text-${i}`}>
          {text[i]}
        </span>
      );
    }
  }

  return elements;
};
export default function Result() {
  const router = useRouter();
  const [userTranscription, setUserTranscription] = useState("");
  const [score, setScore] = useState(0);
  const [wordMistakes, setWordMistakes] = useState([]);
  const [spaceMistakes, setSpaceMistakes] = useState([]);
  const [specialCharMistakes, setSpecialCharMistakes] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transcription = params.get("userTranscription");
    const score = params.get("score");
    const wordMistakes = JSON.parse(decodeURIComponent(params.get("wordMistakes")));
    const spaceMistakes = JSON.parse(decodeURIComponent(params.get("spaceMistakes")));
    const specialCharMistakes = JSON.parse(decodeURIComponent(params.get("specialCharMistakes")));

    setUserTranscription(decodeURIComponent(transcription || ""));
    setScore(parseFloat(score));
    setWordMistakes(wordMistakes.mistakes || []);
    setSpaceMistakes(spaceMistakes.mistakes || []);
    setSpecialCharMistakes(specialCharMistakes.mistakes || []);
  }, []);

  const mistakes = [...wordMistakes, ...spaceMistakes, ...specialCharMistakes];
  return (
    <>
        <div className={styles.Result}>
            <div className={styles.resultBorder}>
                <div className={styles.resultItems}>
               <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"30px"}}>
               <h3 className='text-center'>İmla</h3>
               </div>
                   <div  style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"30px",}}>
                   <p>{highlightMistakes(userTranscription, wordMistakes, spaceMistakes)}</p>
                   </div>
                    <div className={styles.hr}></div>
                    {/* <div  style={{paddingLeft:"30px",paddingRight:"30px",marginTop:"20px"}}>
                    <h5>Orfoqrafik səhvlər:</h5>
                    </div>
                    <div  style={{paddingLeft:"30px",paddingRight:"30px"}}>
                    <span style={{color:"rgba(189, 27, 50, 1)"}}>Spicimen - </span>
                    <span style={{color:"rgba(62, 158, 59, 1)"}}>Specimen</span>
                    </div>
                    <div  style={{paddingLeft:"30px",paddingRight:"30px"}}>
                    <span style={{color:"rgba(189, 27, 50, 1)"}}>Elektronic  - </span>
                    <span style={{color:"rgba(62, 158, 59, 1)"}}>Electronic</span>
                    </div>
                    <div  style={{paddingLeft:"30px",paddingRight:"30px"}}>
                    <span style={{color:"rgba(189, 27, 50, 1)"}}>Latraset - </span>
                    <span style={{color:"rgba(62, 158, 59, 1)"}}>Letraset</span>
                    </div> */}

                    <div  style={{paddingLeft:"30px",paddingRight:"30px"}} className='mt-5'>
                    <span style={{color:"rgba(189, 27, 50, 1)"}}>Nəticəniz:</span>
                    <span style={{color:"rgba(62, 158, 59, 1)"}}>{score}</span>
                    </div>
                    <div className={`text-center ${styles.buttonDiv}`}>
                      <Link href="/">
                      <button className={styles.buttonHover}>Ana səhifəyə keçid</button>
                      </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
