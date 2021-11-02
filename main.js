function start()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yHA0_atyB/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien_1') 
    img1 = document.getElementById('alien_2')
    img2 = document.getElementById('alien_3')
    img3 = document.getElementById('alien_4')

    if (results[0].label == "mooing") {
      img.src = 'Cow.gif';
      img1.src = 'Bark.png';
      img2.src = 'Meow.png';
      img3.src = 'Lion.png';
    } else if (results[0].label == "barking") {
      img.src = 'Cow.png';
      img1.src = 'Bark.gif';
      img2.src = 'Meow.png';
      img3.src = 'Lion.png';
    } else if (results[0].label == "meowing") {
      img.src = 'Cow.png';
      img1.src = 'Bark.png';
      img2.src = 'Meow.gif';
      img3.src = 'Lion.png';
    }else if (results[0].label == "roaring"){
      img.src = 'Cow.png';
      img1.src = 'Bark.png';
      img2.src = 'Meow.png';
      img3.src = 'Lion.gif';
    }
  }
}
