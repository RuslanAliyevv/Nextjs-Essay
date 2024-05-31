"use client"
import React from 'react'
import styles from "./styles.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { useSearchParams,useRouter } from "next/navigation";
const highlightMistakes = (text, mistakes) => {
  const elements = [];
  let lastIndex = 0;

  mistakes.forEach((mistake, index) => {
    if (lastIndex < mistake.userWordPositionStart) {
      elements.push(
        <span key={`text-${index}`}>{text.slice(lastIndex, mistake.userWordPositionStart)}</span>
      );
    }

    const incorrectWord = text.slice(mistake.userWordPositionStart, mistake.userWordPositionEnd);

    if (mistake.userWord === incorrectWord) {
      elements.push(
        <span key={`mistake-${index}`}>
          <span style={{ color: "red" }}>{incorrectWord}</span>
        </span>
      );
    } else {
      elements.push(
        <span key={`mistake-${index}`}>
          {incorrectWord}
        </span>
      );
    }
    
    lastIndex = mistake.userWordPositionEnd;
  });

  if (lastIndex < text.length) {
    elements.push(<span key={`text-end`}>{text.slice(lastIndex)}</span>);
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
                   <p>{highlightMistakes(userTranscription, mistakes)}</p>
                   </div>
                    <div className={styles.hr}></div>
                    <div  style={{paddingLeft:"30px",paddingRight:"30px",marginTop:"20px"}}>
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
                    </div>

                    <div  style={{paddingLeft:"30px",paddingRight:"30px"}} className='mt-5'>
                    <span style={{color:"rgba(189, 27, 50, 1)"}}>Nəticəniz:</span>
                    <span style={{color:"rgba(62, 158, 59, 1)"}}>{score}</span>
                    </div>
                    <div className='text-center'>
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
