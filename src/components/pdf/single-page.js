import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {PDFExport, savePDF} from "@progress/kendo-react-pdf"
import {useRef} from 'react'

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
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
    <>
    <PDFExport ref={PDFExportComponent} paperSize="A4">
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {/* <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        > */}
          {/* Next */}
        {/* </button> */}
        <button primary={true} onClick={Export}>Download</button>
      {/* </div> */}
      </PDFExport>
    </>
  );
}
