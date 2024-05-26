"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function EssayPage() {
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
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
              <h5>AZ</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.essayCenter}>
        <div className="text-center">
          <h2>Imla</h2>
          <h5>
          Imla yazmağa başlamazdan əvvəl dil və səviyyə seçin.
          </h5>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Dil</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Azərbaycan</MenuItem>
                <MenuItem value={20}>Türk</MenuItem>
                <MenuItem value={30}>İngilis</MenuItem>
                <MenuItem value={30}>Rus</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
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
          </Box>
         <div className={styles.buttonEdit}>
         <button>Davam et</button>
         </div>
        </div>
      </div>
    </div>
   </>
  );
}
