import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {PDFExport, savePDF} from "@progress/kendo-react-pdf"
import {useRef} from 'react'


export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  const PDFExportComponent = useRef(null)
  const contentArea = useRef(null)

  const Export_method = (event) => {
    savePDF(contentArea.current,{paperSize:"A4"})
  }

  const Export = (event) => {
    PDFExportComponent.current.save();
  }

  return (

    <PDFExport ref={PDFExportComponent} paperSize="A4"> 
          <button primary={true} onClick={Export}>Download</button>
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>

    </PDFExport>
  );
}
