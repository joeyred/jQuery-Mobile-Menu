// Problem: Menu breaks on smaller screens
// Solution: To hide the text links and swap them out for a more appropriate navigation

// Create a select element and append to menu. Options should use text links to get their info.
var $select = $( '<select></select>' );
$( '#menu' ).append( $select );

// Cycle over menu links
$( '#menu a' ).each( function() {
	var $anchor = $( this );
	var $option = $( '<option></option>' );

	// Take care of selected options depending on current page
	if ( $anchor.parent().hasClass( 'selected' ) ) {

		$option.prop( 'selected', true );
	}

	// options value is href
	$option.val( $anchor.attr('href') );
	// options text is the text of the link
	$option.text( $anchor.text() );
	// append option to select
	$select.append( $option );
});
// Bind listener to select
$select.change( function() {
	// Go to select's location
	window.location = $select.val();
});
	

