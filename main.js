moustacheX = 0;
moustacheY=0;
function preload(){
Moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log('PoseNet is Initialized');
}
function draw(){
image(video, 0, 0, 300, 300)
image(Moustache, moustacheX, moustacheY, 45, 45);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results){
    if(results.length>0){
        moustacheX = results[0].pose.nose.x - 18;
        moustacheY = results[0].pose.nose.y;
        console.log(results);
        console.log("moustache x = "+ moustacheX);
        console.log("moustache y = "+ moustacheY);
    }
}