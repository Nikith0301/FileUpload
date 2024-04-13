import React,{useState} from "react";
import axios from "axios";
import {
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";



export default function () {


  const[image,setImage]=useState(null);


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

function FireUpload(){
  axios.post("http://localhost:5000/fire", {
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
.then((data) => console.log(data.data))
.catch((error) => console.error('Error:', error));
}

  function convertToBase64(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

   
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      // console.log(reader.result);
      setImage(reader.result)
   
    };
  }

  return (
    <>
      <input accept="image/" onChange={convertToBase64} type="file" />
      <img src={image} alt=""/>
      <button onClick={Upload}>Uplaod</button>
    </>
  );
}
