const medias = {
  audio: false,
  video: {
    facingMode: {
      exact: "user"
    }
  }
};
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
}

function errorCallback(err) {
  console.log(err);
  alert(err);
}

function draw() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(video, 0, 0);
  checkPicture();
  requestAnimationFrame(draw);
}
function checkPicture(){
  const code = jsQR(imageData.data, canvas.width, canvas.height);
  if(code){
    alert(code);
  }
  else{
    setTimeout( () => {
      checkPicture();
    }, 500);
  }
}
