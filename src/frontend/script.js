
function draw(){
    let p=document.getElementById("info");
      let img =document.getElementById('convertedImage')
      img.crossOrigin = "anonymous";// Mind blown
    let h=img.height,w=img.width;
      console.log(h);
  
    
    let c=document.getElementById("myCanvas");
    c.height=h;
    c.width=w;
    let ctx=c.getContext("2d");
  
    
    ctx.drawImage(img,0,0,w,h);
    var myImg=c.toDataURL();
    p.value=myImg;
    console.log(myImg)
  }
function imgFunction(){

  let img =document.getElementById('convertedImage');
  let tf=document.getElementById('imageUrl');
  
  img.src=tf.value;



}  