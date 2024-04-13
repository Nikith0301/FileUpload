// import React,{useState} from "react";
// import axios from "axios";
// import {
//   ref,
//   uploadBytes,
//   uploadString,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "../firebase";
// import { v4 } from "uuid";



// export default function Comp2() {


//   const[image,setImage]=useState(null);


// function Upload(){
//   axios.post("http://localhost:5000/compressImage", {
//   image: image
// }, {
//   method: "POST",
//   crossDomain: true,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*"
//   }
// })
// // .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((error) => console.error('Error:', error));

// }


//   function convertToBase64(e) {
//     var file = e.target.files[0];
//     var reader = new FileReader();

   
//     reader.readAsDataURL(file);
//     reader.onload = function (e) {
//       // console.log(reader.result);
//       setImage(reader.result)
   
//     };
//   }

//   function handleSubmit(e){
//       e.preventDefault(); 
//       console.log('working')
//       const fileInput = e.target.elements.image;
//       console.log(fileInput);

//       if (fileInput.files && fileInput.files.length > 0) {
//         const selectedFile = fileInput.files[0];
//         console.log('Selected file:', selectedFile);
//         // You can now access properties of the selected file object, such as:
//         console.log('File name:', selectedFile.name);
//         console.log('File size:', selectedFile.size);
//         console.log('File type:', selectedFile.type);
    
//         // Further processing (e.g., sending the file to the server for compression)
//       } else {
//         console.log('No file selected.');
//       }
//   }

//   return (
//     <>
//       {/* <input accept="image/" onChange={convertToBase64} type="file" />
//       <img src={image} alt=""/>
//       <button onClick={Upload}>Uplaod</button> */}
//       <form method="POST"  onSubmit={handleSubmit} action="/compressImage" encType="multipart/form-data">
//             <input type="file" name="image" accept="image/*" required />
//             <input type="submit" value="Compress image"  />
//         </form>


//     </>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import axios from "axios";
export default function Comp2() {
  const [image,setImage]=useState(null)
  const [maxSizeMB, setMaxSizeMB] = useState(0.08);
  const [maxWidthOrHeight, setMaxWidthOrHeight] = useState(1024);
  const [webWorker, setWebWorker] = useState({
    progress: null,
    inputSize: null,
    outputSize: null,
    inputUrl: null,
    outputUrl: null,
  });

  // const handleInputChange = (target) => (e) => { 
  //  this. setState({ [target]: e.currentTarget.value }); this is for class based component
  // };

function handleMemChange(e){
  setMaxSizeMB(e.value)
}

function handleSizeChange(e){
  setMaxWidthOrHeight(e.value)
}

function convertToBase64(b) {
  // var file = e.target.files[0];
  var file=b;
  // var file=webWorker.outputUrl;
  var reader = new FileReader();

 
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    // console.log(reader.result);
    setImage(reader.result)
 
  };
}


function Upload(){
  axios.post("http://localhost:5000/upload", {
  image: image
}, {
  method: "POST",
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
})
// .then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));

}


function handleConsole(){
  console.log(webWorker.outputUrl)
}

  const onProgress = (p) => {
    setWebWorker((prevState) => ({
      ...prevState,
      progress: p,
    }));
  };

  const compressImage = async (event) => {
    const file = event.target.files[0];
    console.log('input', file);
    console.log(
      'ExifOrientation',
      await imageCompression.getExifOrientation(file)
    );
    const options = {
      maxSizeMB,
      maxWidthOrHeight,
      useWebWorker: true, // Removed unnecessary argument
      onProgress,
    };
    const output = await imageCompression(file, options);
    console.log('output', output);

convertToBase64(output)//this will send blob to function for conversion to base 64


    setWebWorker((prevState) => ({
      ...prevState,
      inputSize: (file.size / 1024 / 1024).toFixed(2),
      inputUrl: URL.createObjectURL(file),
      outputSize: (output.size / 1024 / 1024).toFixed(2),
      outputUrl: URL.createObjectURL(output),
    }));
  };

  return (
    <>
      Options:
      <br />
      <label htmlFor="maxSizeMB">
        maxSizeMB:
        <input
          type="number"
          id="maxSizeMB"
          name="maxSizeMB"
          value={maxSizeMB}
          // onChange={()=>handleMemChange()}
        />

      </label>
      <br />

      <label htmlFor="maxWidthOrHeight">
        maxWidthOrHeight:
        <input
          type="number"
          id="maxWidthOrHeight"
          name="maxWidthOrHeight"
          value={maxWidthOrHeight}
          // onChange={handleSizeChange('maxWidthOrHeight')}
        />
      </label>
       <button onClick={handleConsole}>Output url</button> <br/>

       <button onClick={Upload}>upload image</button>
       <p>BAse 64 converted image</p><br/>
       <img src={image}/>

      <hr />
      <label htmlFor="web-worker">
        Compress in web-worker{' '}
        {webWorker.progress && <span>{webWorker.progress} %</span>}
        <input
          id="web-worker"
          type="file"
          accept="image/*"
          onChange={compressImage} // Simplified handler call
        />
      </label>
      <p>
        {webWorker.inputSize && (
          <span>Source image size: {webWorker.inputSize} mb</span>
        )}
        {webWorker.outputSize && (
          <span>, Output image size: {webWorker.outputSize}</span>
        )}
      </p>
     
      {(webWorker.inputUrl || webWorker.outputUrl) && (
        <table>
          <thead>
            <tr>
              <td>input preview</td>
              <td>output preview</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={webWorker.inputUrl} alt="input" /></td>
              <br/>
              <td><img src={webWorker.outputUrl} alt="output" /></td>
            </tr>
          </tbody>
        </table>
      )}




    </>
  );
}
