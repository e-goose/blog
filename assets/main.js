// add jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// set links to blank target– open in new tab
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
