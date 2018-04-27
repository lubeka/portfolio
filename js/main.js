import 'fullpage.js';
import $ from 'jquery';

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        anchors:['one', 'two', 'three'],
        menu: '#menu',
        responsiveWidth: 670,
        responsiveHeight: 520,
        responsiveSlides: true,

        dragAndMove: true,
    });
});