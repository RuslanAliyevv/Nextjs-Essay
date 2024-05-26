import React from 'react'
import styles from "./styles.module.css";
import Image from "next/image";
import Link from 'next/link';
export default function Result() {
  return (
    <>
        <div className={styles.Result}>
            <div className={styles.resultBorder}>
                <div className={styles.resultItems}>
               <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"30px"}}>
               <h3 className='text-center'>İmla</h3>
               </div>
                   <div style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"30px"}}>
                   <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spicimen book. It has survived not only five centuries, but also the leap into elektronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Latraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus</p>
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
                    <span style={{color:"rgba(62, 158, 59, 1)"}}>60</span>
                    </div>
                    <div className='text-center'>
                      <Link href="/">
                      <button >Ana səhifəyə keçid</button>
                      </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
