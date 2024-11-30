$(document).ready(function() {
    // Set the initial text of the button based on the visibility of the experience section
    if ($('.experience').is(':visible')) {
        $('#toggle-experience').text('Hide Work Experience');
    } else {
        $('#toggle-experience').text('Hide Work Experience');
    }

    // When the "Show/Hide Work Experience" button is clicked
    $('#toggle-experience').click(function() {
        // Toggle the visibility of the .experience div
        $('.experience').slideToggle();

        // Change the button text based on the visibility of the work experience section
        if ($('.experience').is(':visible')) {
            $(this).text('Show Work Experience');
        } else {
            $(this).text('Hide Work Experience');
        }
    });
});
