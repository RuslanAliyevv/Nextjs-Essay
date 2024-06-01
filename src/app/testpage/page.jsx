"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import { useLanguage } from "../components/Context/context";

export default function TestPage() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  
  // const [age, setAge] = React.useState("");
  // const [gender, setGender] = React.useState("");
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  // const handleGenderChange = (event) => {
  //   setGender(event.target.value);
  // };
  const [languages, setLanguages] = useState([]);
  // const [levels, setLevels] = useState([]);
  // const [selectedLevel, setSelectedLevel] = useState([]);
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

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleStartClick = async () => {
    if (!selectedLanguage) {
      setErrorMessage("Zəhmət olmasa dil seçin!");
      return;
    }

    try {
      const response = await axios.get("/api/languages", {
        params: {
          language: selectedLanguage,
        },
      });

      if (response.status === 200) {
        router.push("/testexam");
      } else {
        setErrorMessage("Bir hata oluştu");
      }
    } catch (error) {
      console.error("Başlama hatası:", error);
      setErrorMessage("Bir hata oluştu!");
    }
  };
  return (
   <>
    <div className={styles.TestPage}>
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
      <div className={styles.testCenter}>
        <div className="text-center">
          <h2>Sınaq</h2>
          <h5>
            Özünüzü sınayın, biliklərinizi və bacarıqlarınızı qiymətləndirin.
          </h5>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Dil</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedLanguage}
                  onChange={handleLanguageChange}
                label="Age"
              >
                
                  {languages.map((language) => (
                    <MenuItem key={language.language_code} value={language.language_code}>
                      {language.language_name}
                    </MenuItem>
                  ))}
                {/* <MenuItem value={10}>Azərbaycan</MenuItem>
                <MenuItem value={20}>Türk</MenuItem>
                <MenuItem value={30}>İngilis</MenuItem>
                <MenuItem value={30}>Rus</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
          {/* <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="gender-select-label">Səviyyə</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                value={gender}
                label="Gender"
                onChange={handleGenderChange}
              >
                  <MenuItem value={"male"}>Asan</MenuItem>
                <MenuItem value={"female"}>Orta</MenuItem>
                <MenuItem value={"other"}>Çətin</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
         <div className={styles.buttonEdit}>
        {/* <Link href="/testexam"> */}
        <button onClick={handleStartClick} className={styles.buttonHover}>Davam et</button>
        {/* </Link> */}
         </div>
         {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
      </div>
    </div>
   </>
  );
}
