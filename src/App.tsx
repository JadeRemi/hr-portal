import React, { FC, ReactElement, useState, useEffect } from 'react';
//import { useState, useEffect } from 'react';
import './App.scss';
import JsonData from "./data/data.json";

import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";


//interface JsonRead {
//  Header: object
//}

const App = () => {
  const [pageData, setPageData] = useState(JsonData[0]);

  //useEffect(() => {
  //  //setPageData(JsonData[0]);
  //}, []);

  return (
    <div>
      <Header data={[pageData.Header, pageData.Languages]} />
      <Main data={pageData} />
      <div id="modal"></div>
      <Footer data={pageData.Footer} />
    </div>
  );
};

export default App;
