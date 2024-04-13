const https=require('https')
const express = require('express')
// const mime=require('mime-types')




// const app = express()
const router = express.Router()

router.use(function(req, res, next) {
    console.log(req.url, "@", Date.now());
    next();
  });


  router.route('/cars')
  .get((req,res)=>{
    // console.log("")
    res.send("Getting Car")
  })

  router.route("/ice_cream")
    .get((req,res)=>{
        res.send("Ice sCreammmm")
    })
router
  .route("/cars/:carid")
  .get((req, res) => {
    res.send("hi get /things/cars/" + req.params.carid);
  })
  .put((req, res) => {
    res.send("hi put /things/cars/" + req.params.carid);
  });


router//alreadry converted from encoded form to normal
  .route('/atom')//image handler
  .post((req,res )=>{
    
    console.log(req.body)
    // res.end(req.body.imageUrl)
    let image=req.body.imageUrl;
    https.get(image,(response)=>{
      let DataChunk='';
    
      response.on('data',(chunk)=> {DataChunk+=chunk})
      response.on('end',()=>{
        let base64Image=Buffer.from(DataChunk).toString('base64')
        // let base64Image=Buffer.from("DataChunk").toString('base64')
        // console.log(base64Image)
        res.send(base64Image)//
      })
      response.on('error',()=>{console.log("there is some error while convt image to64")})
    })
  
  } )


router
  .route("/form")
  .get((req,res)=>{
    console.log("You are calling form")
    console.log(req.body)
    res.send(req.body);
  })
  .post((req,res)=>{
    console.log("converting to base 64")
    console.log(req.body)
    // let image="https://s.studiobinder.com/wp-content/uploads/2023/11/Oppenheimer-Practical-Effects-Explained-%E2%80%94-VFX-Without-CGI-Oppenheimer-practical-effects.png";

    let imageUrl=req.body.homepage;
    https.get(imageUrl,(response)=>{
      let imageData='';
      response.on('data',(chunk)=>{
        imageData+=chunk;
      })
      response.on('end', () => {
        const base64Image = Buffer.from(imageData).toString('base64');
        // console.log(base64Image);
  
        // Send the base64 encoded image or use it further in your logic
        res.send(base64Image); // Replace with appropriate response based on your endpoint's purpose
      });
  
      response.on('error', (error) => {
        console.error('Error fetching image:', error);
        res.status(500).send("Error retrieving image. Please try again later.");
      });
    })


   
    // res.send(req.body.homepage);
  })

  router
  .route("/names")

  .get((req,res,next)=>{
      console.log("THis is Get request ->"+req.body)
      // res.send(req)
  })
  .post( (req, res) => {
      // const firstName = req.body.fname;
      // const lastName = req.body.lname;
  
      // Process the names (e.g., store in a database)
      console.log(req.body)
      // console.log(`Received names: ${firstName} ${lastName}`);
      response = {  
          first_name:req.body.fname,  
          last_name:req.body.lname  
      };
      let m=  JSON.stringify(response)
      console.log(response)
      
      // Send a response with relevant information
      // res.send(req.body)
      res.send(m)
  })


router.use(express.text())
.route('/type')//will recieve a base64 string describing image and it will tell what format it is
// .get((res,res,next)=>{})

.post((req,res,next)=>{
  let flag=1;
  var signatures = {
    JVBERi0: "application/pdf",
    R0lGODdh: "image/gif",
    R0lGODlh: "image/gif",
    iVBORw0KGgo: "image/png",
    "/9j/": "image/jpg",
    
  };
  // let text="iVBORw0KGgoJRgABAQAAAQABAAD/"
var text=req.body;
console.log(req.body);
for(sig in signatures){
  if(text.startsWith(sig)){
    res.end(signatures[sig]);
    flag=0;
  }

}  
if (flag==1){res.send("text/plain")}


})


module.exports = router;