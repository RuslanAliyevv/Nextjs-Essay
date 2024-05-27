"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";


const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function TestExam() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText(); 
    // console.log(plainText);
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
        {/* <iframe src="" frameborder="0">aaa</iframe> */}
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
  );
}
