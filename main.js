Webcam.set({
    width:350,height:350,image_format:'png',png_quality:90
}
);

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lG8GisAR-/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
}
function check(){
    picture=document.getElementById('captured_image');
    classifier.classify(picture,gotresult);
}
function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_people_name").innerHTML=results[0].label;
        document.getElementById("result_people_accuracy").innerHTML=results[0].confidence.toFixed(3);

    }
}