// Get the header
var header = document.querySelector('#site-nav');

// Initialize Gumshoe
var spy = new Gumshoe('#site-nav-list a', {
    offset: function () {
        return header.getBoundingClientRect().height + 100;
    }
});