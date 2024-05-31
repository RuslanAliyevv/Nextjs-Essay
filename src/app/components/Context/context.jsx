"use client"
import React, { createContext, useState, useContext, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return getCookie("selectedLanguage") || "";
    }
    return "";
  });
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const languageResponse = await axios.get("/api/languages");
        setLanguages(languageResponse.data);
      } catch (error) {
        console.error("Data cekme xeta:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      setCookie("selectedLanguage", selectedLanguage, { path: '/' });
    }
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};