import React from "react";

import SinglePagePDFViewer from "./components/pdf/all-pages";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./faz.pdf";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SinglePagePDFViewer pdf={samplePDF} />

    </div>
  );
}
