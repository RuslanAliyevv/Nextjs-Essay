"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "../components/Context/context";

export default function EssayPage() {
  const { selectedLanguage, setSelectedLanguage, languages, setLanguages } =
    useLanguage();
  // const [languages, setLanguages] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const languageResponse = await axios.get("/api/languages");
        console.log(languageResponse.data);
        setLanguages(languageResponse.data);
      } catch (error) {
        console.error("Data cekme xeta:", error);
      }
    };

    fetchData();
  }, []);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleStartClick = async () => {
    const accessToken = getCookie("accessToken");
    if (!selectedLanguage) {
      setErrorMessage("Zəhmət olmasa dil seçin!");
      return;
    }
    if (accessToken) {
      try {
        const response = await axios.get("/api/attachment/audio", {
          headers: {
            // Authorization: `Bearer ${accessToken}`,
            "accept-language": selectedLanguage,
          },
        });

        if (response.status === 200) {
          router.push("/essayexam");
        } else {
          setErrorMessage("Xeta oldu");
        }
      } catch (error) {
        console.error("BaSLAMA XETASI:", error);
        setErrorMessage("No audio file found!");
      }
    } else {
      setErrorMessage("Zəhmət olmasa Daxil olun !");
    }
  };

  return (
    <>
      <div className={styles.EssayPage}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <Link href="/">
                  <Image
                    loading="lazy"
                    width={117}
                    height={25}
                    src="/assets/image/newspellorify.svg"
                    alt="Tos"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.right}>
              <div className={styles.flag}>
            <div>
            <Image
                  loading="lazy"
                  width={22}
                  height={22}
                  src="/assets/image/headerflag1.png"
                  alt="Tos"
                />
            </div>
               <div>
               <h5 style={{marginLeft:"5px"}}>AZ</h5>
               </div>
             </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.essayCenter}>
          <div className="text-center">
            <h2>Imla</h2>
            <h5>Imla yazmağa başlamazdan əvvəl dil və səviyyə seçin.</h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Dil</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  label="Dil"
                >
                  {languages.map((language) => (
                    <MenuItem
                      key={language.language_id}
                      value={language.language_code}
                    >
                      {language.language_name}
                      {/* <Image
                      style={{marginLeft:"5px"}}
                        loading="lazy"
                        width={22}
                        height={22}
                        src="/assets/image/headerflag1.png"
                        alt="Tos"
                      /> */}
                    </MenuItem>
                    
                      
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="gender-select-label">Səviyyə</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  value={selectedLevel}
                  onChange={handleLevelChange}
                  label="Səviyyə"
                >
                  {levels.map((level) => (
                    <MenuItem key={level.id} value={level.value}>
                      {level.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box> */}
            <div className={styles.buttonEdit}>
              <button className={styles.buttonHover} onClick={handleStartClick}>
                Davam et
              </button>
            </div>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
