// Problem: Menu breaks on smaller screens
// Solution: To hide the text links and swap them out for a more appropriate navigation

// Create a select element and append to menu. Options should use text links to get their info.
var $select = $( '<select></select>' );
$( '#menu' ).append( $select );

// Cycle over menu links
$( '#menu a' ).each( function() {
	var $anchor = $( this );
	var $option = $( '<option></option>' );

	// options value is href
	$option.val( $anchor.attr('href') );
	// options text is the text of the link
	$option.text( $anchor.text() );
	// append option to select
	$select.append( $option );
});
	
// create button to click to go to select's location
var $button = $( '<button>Go</button>' );
$( '#menu' ).append( $button );
// Bind Click to button
$button.click( function() {
	// Go to select's location
	window.location = $select.val();
});
	
// Modify CSS to hide links on small width and show button and select
	// also hides select and button on larger width and show's links
