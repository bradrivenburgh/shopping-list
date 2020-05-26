// Users must be able to:

// Add items with keyboard and mouse
// Add items with keyboad only

// Toggle 'check' button

// Permanently delete items by pressing 'delete' button

// METHODS TO USE


// submit(): MANIPULATE. Listen for a submit event from a form.


// preventDefault(): stops the default operation; this has been useful for stopping form submission. Example: event.preventDefault()


// toggleClass(): MANIPULATE.  Toggle a class on or off an element.  For example:
/* 
TOGGLE ON
<div class="tumble">Some text.</div>
$( "div.tumble" ).toggleClass( "bounce" )
<div class="tumble bounce">Some text.</div>
TOGGLE OFF
$( "div.tumble" ).toggleClass( "bounce" )
<div class="tumble">Some text.</div>
*/


// closest(): TRAVERSE DOM up from a given element beginning with the given element and going up through ancestor elements, stopping when a match for a selector is found.  Returned object will contain 0 or 1 elements. For example:
/*
$( "li.item-a" )
  .closest( "ul" )
  .css( "background-color", "red" );
*/
