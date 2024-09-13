
function show(cupcakeId) {
    let image = document.getElementById("imageDisplay");
    let characterImage = document.getElementById("character_standard");
    let secondImage = document.getElementById("popup");


    if (cupcakeId === "cupcake1") {
        image.src = "pixel-speech-bubble-2.gif";
        image.style.position = 'absolute';
        image.style.marginLeft = '650px';
        image.style.width = '180px';
        image.style.height = '220px';
        image.style.marginTop = '0px';

        secondImage.style.position = 'absolute';
        secondImage.src = "ingred_cupcake1.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '350px';
        secondImage.style.height = '500px';
        secondImage.style.marginTop = '320px';


        show("character_changed");
    } else if (cupcakeId === "cupcake2") {
        image.style.position = 'absolute';
        image.src = "pixel-speech-bubble-3.gif";
        image.style.marginLeft = '800px';
        image.style.width = '180px';
        image.style.height = '220px';
        image.style.marginTop = '0px';

        secondImage.style.position = 'absolute';
        secondImage.src = "positive_ingred.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '300px';
        secondImage.style.height = '300px';
        secondImage.style.marginTop = '400px';
        show("character_standard");
      } else if (cupcakeId === "milk1") {
        image.style.position = 'absolute';
        image.src = "pixel-speech-bubble-6.gif";
        image.style.marginLeft = '10px';
        image.style.width = '200px';
        image.style.height = '200px';
        image.style.marginTop = '40px';

        secondImage.style.position = 'absolute';
        secondImage.src = "concerns_oatmilk.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '350px';
        secondImage.style.height = '500px';
        secondImage.style.marginTop = '320px';
        show("character_changed");
      } else if (cupcakeId === "milk2") {
        image.style.position = 'absolute';
        image.src = "pixel-speech-bubble-7.gif";
        image.style.marginLeft = '30px';
        image.style.width = '200px';
        image.style.height = '100px';
        image.style.marginTop = '200px';

        secondImage.style.position = 'absolute';
        secondImage.src = "positive_ingred.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '300px';
        secondImage.style.height = '300px';
        secondImage.style.marginTop = '400px';
        show("character_standard");
      } else if (cupcakeId === "syrup_bottle") {
        image.style.position = 'absolute';
        image.src = "pixel-speech-bubble-9.gif";
        image.style.marginLeft = '900px';
        image.style.width = '200px';
        image.style.height = '100px';
        image.style.marginTop = '90px';

        secondImage.style.position = 'absolute';
        secondImage.src = "positive_ingred.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '300px';
        secondImage.style.height = '300px';
        secondImage.style.marginTop = '400px';
        show("character_standard");
      } else if (cupcakeId === "syrup_bottle2") {
        image.style.position = 'absolute';
        image.src = "pixel-speech-bubble-8.gif";
        image.style.marginLeft = '970px';
        image.style.width = '200px';
        image.style.height = '200px';
        image.style.marginBottom = '100px';

        secondImage.style.position = 'absolute';
        secondImage.src = "syrup_2ingred.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '350px';
        secondImage.style.height = '500px';
        secondImage.style.marginTop = '310px';
        show("character_changed");
      } else if (cupcakeId === "chips_bag") {
        image.style.position = 'absolute';
        image.src = "pixel-speech-bubble-4.gif";
        image.style.marginLeft = '1050px';
        image.style.width = '155px';
        image.style.height = '155px';


        secondImage.style.position = 'absolute';
        secondImage.src = "chipsbag_ingred.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '300px';
        secondImage.style.height = '400px';
        secondImage.style.marginTop = '400px';
        show("character_changed");
      } else if (cupcakeId === "chips_bag2") {
        image.style.position = 'absolute';
        image.src = "pixel-speech-bubble-5.gif";
        image.style.marginLeft = '1200px';
        image.style.width = '155px';
        image.style.height = '155px';

        secondImage.style.position = 'absolute';
        secondImage.src = "positive_ingred.png";
        secondImage.style.marginLeft = '1100px';
        secondImage.style.width = '300px';
        secondImage.style.height = '300px';
        secondImage.style.marginTop = '400px';
        show("character_standard");

      } else if (cupcakeId === "character_changed") {
        characterImage.src = "char2.png";
        characterImage.style.width = '314.96px';
        characterImage.style.height = '400px';
        characterImage.style.marginTop = '150px';
      }
      else if (cupcakeId === "character_standard") {
     characterImage.src = "char1.png";
     characterImage.style.width = '250px';
     characterImage.style.height = '317.5px';
     characterImage.style.marginTop = '200px';
    }

    image.style.display = "block";
    secondImage.style.display = "block";


}

document.getElementById("cupcake1").addEventListener("click", function() {
    show("cupcake1");

});

document.getElementById("cupcake2").addEventListener("click", function() {
    show("cupcake2");
});

document.getElementById("milk1").addEventListener("click", function(){
  show("milk1");
});

document.getElementById("milk2").addEventListener("click", function() {
  show("milk2");
});

document.getElementById("syrup_bottle").addEventListener("click", function() {
  show("syrup_bottle");
});

document.getElementById("syrup_bottle2").addEventListener("click", function() {
  show("syrup_bottle2");
});

document.getElementById("chips_bag").addEventListener("click", function() {
  show("chips_bag");
});

document.getElementById("chips_bag2").addEventListener("click", function() {
  show("chips_bag2");
});
