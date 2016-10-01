//This is freaking dumb that I have to do it this way.  For some reason the adaptive height
//with slick carousel doesn't work if you call .slick() after DOM ready and the images haven't
//finished downloading.
window.onload = function () {
    $('.slick-carousel').slick({
        infinite: true,
        lazyLoad: 'progressive', //Presumably this allows window.onload to fire after the first
                                 //image finishes downloading.
        speed: 500,
        variableWidth: false,
        responsive: [
        {
            breakpoint: 2048,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 1640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1275,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
        	breakpoint: 975,
        	settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1
        	}
        }]
    });

    $('.slick-carousel img').css('display', 'block');
};