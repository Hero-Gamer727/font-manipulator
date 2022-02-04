nose_x=0;
nose_y=0;
left_wrist_x=0;
right_wrist_x=0;
gap_of_wrist=0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.center();
  


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotResults);
}

function modelLoaded() {
    console.log("Model Loaded!");
}


function gotResults(results){
if(results.length > 0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    console.log( "leftWrist_x = "+left_wrist_x);
    console.log( "rightWrist_x = "+right_wrist_x);
    gap_of_wrist= floor(left_wrist_x-right_wrist_x);
}
}

function draw(){
    document.getElementById("font-size_number").innerHTML=gap_of_wrist+" px ";

    background("grey");
    textSize(gap_of_wrist);
    fill("red");
    text("Aariz", nose_x,nose_y);
    
}