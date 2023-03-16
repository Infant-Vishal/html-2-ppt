import html2canvas from "html2canvas";
import React, { useEffect } from "react";


export const HandleClickImage = (e, id ) => {
    e.preventDefault();
    useEffect(() => {
        const node = document.getElementById("overall-container");
    
        html2canvas(node, { useCORS: true }).then((canvas) => {
          let a = document.createElement("a");
          document.body.appendChild(a);
          a.download = "test.png";
          a.href = canvas.toDataURL();
          a.click();
        });
      });
  
  }
  

