





function createImage(url, left, bottom) {
    let newImage = document.createElement('img');
    newImage.src = url;
    newImage.style.position = 'fixed';
    newImage.style.left = left;
    newImage.style.bottom = bottom;
    document.body.append(newImage);
    return newImage
}

function newItem(url, left, bottom) {
let item = createImage(url, left, bottom);
item.addEventListener('dblclick', function() {
    item.remove();
}) ;   

}


// Create and append red character
createImage('assets/red-character.gif', '450px', '200px');

// Create and append green character
createImage('assets/green-character.gif', '500px', '400px');

// Create and append grass image
createImage('assets/grass.png', '100px', '100px');

// Create and append pillar image
// newitem pillar will delete when clicked
newItem('assets/pillar.png', '850px', '700px');

// Create and append pine tree image
// newitem pillar will delete when clicked
newItem('assets/pine-tree.png ', '550px, 750px'); 

// Create and append crate tree image
createImage('assets/crate.png ', '150px, 200px');

// Create and append sword image
// newItem sword will delete when clicked
newItem('assets/sword.png', '200px, 605px' )

// / Create and append shield image
// newItem shield will delete when clicked
newItem('assets/shield.png', '165px, 185px' )

// / Create and append staff image
// newItem staff will delete when clicked
newItem('assets/staff.png', '500px, 405px' )


// / / Create and append staff image
// newItem staff will delete when clicked
newItem('assets/tree.png', '600px, 405px' )