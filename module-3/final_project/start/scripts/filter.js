let heading1 = document.querySelector('h1');
//selects all h1 elements and stores properties in an array
//(typing out 'heading1' in the console presents all the data in that
//array)

let buttons = document.querySelectorAll('button');

//Presents all entries in an array
//(looking at the array in the console allows you to check all the
//properties for each element in the array)
    /*for( let counter = 0; counter < buttons.length; counter++ ) {
        console.log(buttons[counter]);
    }*/

//selects the img elements within the image divs
    //let allImages = document.querySelectorAll('.image img');
let allImages = document.querySelectorAll('.image');

/*for( let counter = 0; counter < allImages.length; counter++ ) {
    console.log( allImages[counter] );
}*/

/*Arrow Function for same process
    allImages.forEach( Image => console.log(image) );
*/

function toggleImages( dataClass ) {

    if( dataClass === 'all') { //if the button click has a data-class of all

        allImages.forEach( image => image.style.display = 'flex'); //cycle through all the images and show them

    } else { //if the button has a data-class that isn't all

        allImages.forEach( image => { //cycle through the images and check to see if the button pressed has the same data-class as any of the images

            if (image.dataset.class === dataClass) {

                image.style.display = 'flex'; //if they match, show the images

            } else {

                image.style.display = 'none'; //if they don't match, hide the images

            }
        })

    }

}

const toggleActiveClass = ( active ) => {

    buttons.forEach( button => button.classList.remove('active') );
    active.classList.add('active');
}

//Event listner code
    /*for( let counter = 0; counter < buttons.length; counter++ ) {

        buttons[counter].addEventListener('click', function() {
            console.log(buttons[counter]);
        });

    }*/

//Arrow form of the same function
buttons.forEach( button => button.addEventListener('click', ()=> {
    //console.log(button.dataset.class);
    toggleImages(button.dataset.class);
    toggleActiveClass( button );
}));

//adding to document using JS
    /*let main = document.querySelector('main');

    let newDiv = document.createElement('div');
        newDiv.style.border = '1px solid green';

    let newDivText = document.createTextNode('New Div');

    newDiv.appendChild(newDivText);

    main.appendChild(newDiv);*/

/*
let image4 = allImages[3];

//loging image source
    console.log(image4.getAttribute('src') );

//changing the image
    image4.setAttribute('src', 'https://via.placeholder.com/150');

    console.log(image4.getAttribute('src') );

    image4.setAttribute('src', 'https://via.placeholder.com/250');

    console.log(image4.getAttribute('src') );

//assigns button 1 to 'firstButton' variable
    let firstButton = buttons[0];

//calls up class attribute associated with button 1
    console.log( firstButton.getAttribute('class'));

//sets the attribute to a new property
    firstButton.setAttribute('class', 'not-active');
*/
//setting events
    /*buttons.forEach( button => button.addEventListener('click', function( event ) {
        console.log( event );
        heading1.style.color = 'red';


} ) );*/