



//sets createImage to  add images to page//

function createImage(url, left, bottom) {
    let newImage = document.createElement('img');
    newImage.src = url;
    newImage.style.position = 'fixed';
    newImage.style.left = left;
    newImage.style.bottom = bottom;
    document.body.append(newImage);
    return newImage
}

//sets the double click item remove to newItem//
function newItem(url, left, bottom) {
let item = createImage(url, left, bottom);
item.addEventListener('dblclick', function() {
    item.remove();
}) ;  


//sets the sky as the background image//
}
    document.addEventListener("DOMContentLoaded", function() {
    let imageUrl = "assets/sky.png/"; 
    document.body.style.backgroundImage = "url('" + imageUrl + "')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  });
 
  
  //sets the grass asset as background element with the background id from the html//

    let backgroundImageUrl = "assets/grass.png"; 
    let backgroundElement = document.getElementById("background");
    backgroundElement.style.backgroundImage = "url('" + backgroundImageUrl + "')"
    backgroundElement.style.backgroundSize = "100% auto";
    backgroundElement.style.backgroundRepeat = "no-repeat";
    backgroundElement.style.backgroundPosition = "bottom";
    backgroundElement.style.position = "absolute";
    backgroundElement.style.left = "0";
    backgroundElement.style.bottom = "0";
    backgroundElement.style.width = "100vw";
    backgroundElement.style.height = "55vh";


// Create and append green character
createImage('assets/green-character.gif', '100px', '100px');

// Create and append pillar image
createImage('assets/pillar.png', '350px', '100px');

// / / Create and append treeimage//
createImage('assets/tree.png', '200px', '300px' )

// Create and append pine tree image//
createImage('assets/pine-tree.png ', '450px', '200px'); 

// Create and append well image//
createImage('assets/well.png', '500px', '425px');

// Create and append crate image//
createImage('assets/crate.png', '150px', '200px');

// Create and append sword image
// newItem sword will delete when clicked
newItem('assets/sword.png', '500px', '405px');

// / Create and append shield image
// newItem shield will delete when clicked
newItem('assets/shield.png', '165px', '185px' );

// / Create and append staff image
// newItem staff will delete when clicked
newItem('assets/staff.png', '600px', '100px');



