import React, { FC, ReactElement, useState, useEffect } from 'react';
import './App.scss';
import JsonDataRu from "./data/data_ru.json";
import JsonDataEn from "./data/data_en.json";

import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";


const App = () => {
  const availableLangs = ["RU", "EN"];
  const [appLang, setAppLang] = useState("RU");
  const [pageData, setPageData] = useState(JsonDataRu[0]);

  const changeLang = (newLang: string) => {
    setAppLang(newLang);
  }
  useEffect(() => {
    if (appLang == "RU") {
      setPageData(JsonDataRu[0]);
    }
    else if (appLang == "EN") {
      setPageData(JsonDataEn[0]);
    };
  }, [appLang]);

  return (
    <div>
      <Header data={pageData.Header} langs={availableLangs} language={changeLang}/>
      <Main data={{...pageData}} />
      <div id="modal"></div>
      <Footer data={pageData.Footer} />
    </div>
  );
};

export default App;
