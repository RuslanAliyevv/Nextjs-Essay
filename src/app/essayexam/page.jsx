"use client"
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import  { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function EssayExam() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText(); 
    // console.log(plainText);
  };
  return (
    <>
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
          
          <div className={`row align-items-center ${styles.textarearow}`}>
            <div className="col-lg-9">
              <div className={styles.taimerLeft}>
              <form className={styles.form}>
          {/* <div className={styles.textDiv}>
            <textarea className={styles.textarea} id="message" name="message" rows="4" cols="50"></textarea>
          </div> */}
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

            <div className="col-lg-3">
              <div className={styles.taimerRight}>
                <div className={styles.taimerBorder}>
                  <div className={styles.taimerItems}>
                    <h2 className="text-center">Taymer</h2>
                    <div className={styles.hr}></div>
                    <span>30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className={styles.endButton}>Təsdiqlə</button>
          </div>
        </div>
      </div>
    </>
  );
}
