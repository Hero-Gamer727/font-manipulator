function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.center();
  


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotResults);
}

function modelLoaded() {
    console.log("Model Loaded!")
}


function gotResults(results){
if(results.length > 0){
    console.log(results);

}
}