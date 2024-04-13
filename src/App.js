// import "./App.css";
// import { useState, useEffect } from "react";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "./firebase";
// import { v4 } from "uuid";

// function App() {
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);

//   const imagesListRef = ref(storage, "images/");
//   const uploadFile = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {

//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//     });
//   };

//   useEffect(() => {
//     listAll(imagesListRef).then((response) => {

//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           console.log(url)
//           setImageUrls((prev) => [...prev, url]);
//         });
//       });
//     });

//   }, []);

//   return (
//     <div className="App">
//       <input
//         type="file"
//         onChange={(event) => {
//           setImageUpload(event.target.files[0]);
//         }}
//       />

//       <input type="url"/>
//       <button onClick={uploadFile}> Upload Image</button>
//       {imageUrls.map((url) => {
//         return <img src={url} />;
//       })}

//     </div>
//   );
// }

// export default App;

import React, { useDebugValue, useState } from "react";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "./firebase";
import Comp1 from "./frontend/Comp1";
import Comp2 from "./frontend/Comp2";
// const storage=getStorage();

// const storageRef = ref(storage, "images/");

export default function App() {

  const [count,setCount]=useState(8);

  // function imgFunction(e) {
  //   const form = document.getElementById("formId");

  //   let imageUrl = form.elements.imageUrl.value;

  //   const encodedData = `imageUrl=${encodeURIComponent(imageUrl)}`;

  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     fetch(form.action, {
  //       //form.action="localhost port 3001"
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       // headers:{'Content-Type': 'image/jpeg'},
  //       body: encodedData,
  //     })
  //       .then((response) => response.text())

  //       .then(base64Image=>{
  //           console.log(base64Image);
  //         // let finalImage=`data:image/png;base64,${base64Image}`;
  //         // const imageRef=ref(storage,`images/${finalImage}`)
  //         // uploadString(imageRef,finalImage,'data_url').then((snapshot)=>{
  //         //   console.log("b64 image link uploaded");
  //         //   // console.log(finalImage)
  //         // })
  //       })
  //       // .then(() => {
  //       //   const message6 = "data:text/plain;base64,U3VyeWFQYWxXb3JsZA==";

  //       //   const imageRef = ref(storage, `images/message6`);
  //       //   uploadString(imageRef, message6, "data_url").then((snapshot) => {
  //       //     console.log("Uploaded a data_url string!");
  //       //   });
  //       // })
  //       .catch((error) => {
  //         console.log("error", error);
  //       });
  //   });
  // }
  // function myFunction() {
  //   fetch(
  //     "https://firebasestorage.googleapis.com/v0/b/uploadingfile-73697.appspot.com/o/images%2Fmessage5?alt=media&token=40762d38-10c2-4ade-91cb-556428e8f650",
  //     {
        
  //     }
  //   )
  //     .then((response) => response.text())
  //     .then((response) => {
  //       // Handle the response here
  //       console.log("Response:", response);
  //     })
  //     .catch((error) => {
  //       // Handle errors here
  //       console.error("Error:", error);
  //     });

  //   // let link="https://firebasestorage.googleapis.com/v0/b/uploadingfile-73697.appspot.com/o/images%2Fmessage5?alt=media&token=40762d38-10c2-4ade-91cb-556428e8f650";
  //   // fetch(link
  //   //   //body: new FormData(form) // Send form data
  //   // )
  //   //   // .then(response => response.text())
  //   //   .then(base64Image => {

  //   //     console.log(base64Image)
  //   //   })
  //   //   .catch(error => {
  //   //     console.error('Error:', error);
  //   //   });
  // }
  // function myshowList() {
  //   const listRef = ref(storage, "texts/");

  //   // Find all the prefixes and items.
  //   listAll(listRef)
  //     .then((res) => {
  //       console.log("Below are list of prefixes")

  //       res.prefixes.forEach((folderRef) => {
  //         // All the prefixes under listRef.
  //         // You may call listAll() recursively on them.
  //         console.log("this is folderRef"+folderRef)
  //       });
  //       console.log("Below is list of items")
  //       res.items.forEach((itemRef) => {
  //         // All the items under listRef.
  //         console.log("this is Itemref-->"+' '+itemRef)

  //       });

  //     }).catch((error) => {
  //       // Uh-oh, an error occurred!
  //     });

  //   listAll(listRef)
  //   .then((response) => {
  //     response.items.forEach((item) => {
  //       // getDownloadURL(item).then((url) => {
  //       //   console.log(url);
  //       // })
  //       getDownloadURL(item).then((url) => {
  //         fetch(url)
  //           .then(response => response.text()) // or response.blob(), response.json(), etc. depending on the data type
  //           .then(data => {
  //             // Handle the retrieved data here
  //             console.log('Retrieved data:', data);
  //           })
  //           .catch(error => {
  //             // Handle errors here
  //             console.error('Error fetching data:', error);
  //           });
  //       });
        
  //     })


  //   })
  //   .catch((error)=>{console.log(error)});
  // }

  // function addString(){
  //    let tf= document.getElementById('tf')
  //    let s=tf.value;
  //    console.log(s);
  //    const message=s;
  //    const textsRef=ref(storage,'texts/message2');
     
  //    uploadString(textsRef,message)
  //    .then((snapshot)=>{
     
  //    console.log('uploaded raw string-->'+message);
  //    }).catch((error)=>{console.log(error)})

  // }
  // function addString() {
  //   let tf = document.getElementById('tf');
  //   let s = tf.value;
  //   console.log(s);
  
  //   const message = s;



    
  //   let textsRef = ref(storage, `texts/message${count}`);
  
  //   // Convert string to byte array and set content type header
  //   const textBlob = new Blob([message], { type: 'text/plain' });
  
  //   uploadBytes(textsRef, textBlob)
  //     .then((snapshot) => {
  //       console.log('uploaded raw string-->');
  //     })
  //     .catch((error) => {
  //       console.error('Error uploading string:', error);
  //     });
  //     setCount(count+1);
  //     let textsRef2 = ref(storage, `texts/message${count}`);

  //     const base64Encoded = btoa(message);

  //     // Combine data URI with Base64 encoded string
  //     // const dataURI = `data:text/plain;base64,${base64Encoded}`;
  //   //   let baseBlob=new Blob([base64Encoded],{type:'text/plain'})
  //   // uploadBytes(textsRef2,baseBlob)
  //   // .then(()=>{console.log('uploaded base string' ,base64Encoded)})
  //     // uploadString(textsRef2, dataURI, 'data_url')
  //     //   .then((snapshot) => {
  //     //     console.log('uploaded base64 string-->', base64Encoded);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.error('Error uploading string:', error);
  //     //   });
  //     // setCount(count+1);


  // }
  
  return (
    <>
      {/* <form action="http://localhost:3001/things/atom" id="formId">
        <br />
        <label>Upload via Link</label>
        <br />
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          placeholder="https://..."
        />

        <input type="submit" value="Submit" onClick={imgFunction} />
      </form>
      
      <input type="submit" value="Show" onClick={myshowList} />
      <input type="text"  id="tf" />
      <input type="submit" value="AddString" onClick={addString} /> */}
  
<Comp2/>
    </>
  );
}
