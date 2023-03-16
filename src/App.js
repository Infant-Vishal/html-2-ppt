import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import pptxgen from "pptxgenjs";
import "./App.css";

function App() {
  const [downloadImg, setDownloadImg] = useState("");
  const getImage = () => {
    const node = document.getElementById("app");

    // useCors to draw image from different origin
    html2canvas(node, { useCORS: true }).then((canvas) => {
      console.log("canvas", canvas.toDataURL);
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.href = canvas.toDataURL();
      a.click();
      setDownloadImg(a.href);
      // console.log("a ==>", a.href);
      return a.href;
    });
  };

  

  useEffect(() => {
    // console.log("img   000", downloadImg.toString)
    if (downloadImg != "") {
      let pres = new pptxgen();

      // 2. Add a Slide
      let slide = pres.addSlide();
      let abc = downloadImg.replace("data:", "");

      // console.log("img   000", downloadImg.replace('data:', '').replace(/^.+,/, ''))
      slide.addImage({ data: abc, x: "5%", y: "8%", w: "90%", h: "90%" });

      // 4. Save the Presentation
      pres.writeFile();
    }
  }, [downloadImg]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div id="app">
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>

      <h2>Start editing to see some magic happen!</h2>
      {/* <button onClick={getImage}>Download Image</button> */}
      <button onClick={(e) => getImage(e)}>Generate</button>
    </div>
  );
}

export default App;
