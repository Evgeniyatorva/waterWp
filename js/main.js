window.onload = function () {

	//scroll

		(function(window, undefined) // Code in a function to create an isolate scope
{
    'use strict';
    var height_fixed_header = 200, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
        speed = 500,
        moving_frequency = 15, // Affects performance ! High number makes scroll more smooth
        links = document.querySelectorAll('a[href*="#"]'),
        href;
    
    for(var i = 0; i < links.length; i++)
    {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.indexOf('#') != -1) // href.substr(0, 1) == '#'
        {
            links[i].onclick = function()
            {
                var element,
                    href = this.attributes.href.nodeValue.toString(),
                    url = href.substr(0, href.indexOf('#')),
                    id = href.substr(href.indexOf('#') + 1);
                if (element = document.getElementById(id))
                {

                    var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
                        getScrollTopDocumentAtBegin = getScrollTopDocument(),
                        gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                    
                    if (window.history && typeof window.history.pushState == 'function')
                        window.history.pushState({}, undefined, url + '#' + id); // Change URL for modern browser

                    for (var i = 1; i <= hop_count; i++)
                    {
                        (function()
                        {
                            var hop_top_position = gap * i;
                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency * i);
                        })();
                    }

                    return false;
                }
            };
        }
    }
    
    var getScrollTopElement =  function(e)
    {
        var top = height_fixed_header * -1;

        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };
    
    var getScrollTopDocument = function()
    {
        return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    };
})(window);

	slider();

window.onscroll = function () {

//header
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	function header () {
		var header = document.querySelector('.header');

		if (scrollTop >= 50) {
			header.classList.add('header_scroll');
		} else if (scrollTop < 200) {
			header.classList.remove('header_scroll');
		}
	}
	header ();


// arrow-top
	function arrowTop () {
		var arrow = document.getElementById('arrow-top');

		if (scrollTop >= 550) {
			arrow.classList.add('arrow-show');
		} else if (scrollTop <= 550) {
			arrow.classList.remove('arrow-show');
		}

		arrow.addEventListener('click', up);
	}
	arrowTop ();

	progressBar ();
}
// end window.onscroll

	hamburger();	
}
//end window.onload


// slider
function slider () {
	var slider = document.getElementById('slider');

	var list = slider.querySelector("ul");

	var width = 195 + 20;
	var count = 1;
	var position = 0;

	var prev = slider.querySelector('.slider__prev');
	var next = slider.querySelector('.slider__next');

	next.onclick = function () {
		position = position - width * count;	
		if (position < -860 && window.innerWidth >= 1200 ) {
			position = 0;
		} else if (position < -1075 && window.innerWidth <= 1200 && window.innerWidth >= 992) {
			position = 0;
		} else if (position < -1290 && window.innerWidth <= 992 && window.innerWidth >= 598) {
			position = 0;
		} else if (position < -1505 && window.innerWidth <= 598 && window.innerWidth >= 0) {
			position = 0;
		}

		list.style.left = position + 'px';
	}

	prev.onclick = function () {
		if (position == 0 && window.innerWidth >= 1200) {
			position = -860 - width;		
		} else if (position == 0 && window.innerWidth <= 1200 && window.innerWidth >= 992) {
			position = -1075 - width;
		} else if (position == 0 && window.innerWidth <= 992 && window.innerWidth >= 598) {
			position = -1290 - width;
		} else if (position == 0 && window.innerWidth <= 598 && window.innerWidth >= 0) {
			position = -1505 - width;
		}
		position = position + width * count;
		list.style.left = position + 'px';
	}
}


// hamburger-menu
function hamburger () {
	var hamb = document.querySelector('.hamburger-menu');
	var menu = document.querySelector('.header__menu');
	var menuClass = menu.classList;

	hamb.addEventListener('click', function () {
		if (menuClass.contains('menu-block')) {
			menuClass.remove('menu-block');
		} else {
			menuClass.add('menu-block');
		}			
	});
}


// progress-bar
function progressBar () {
	var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scroll = (windowScroll / documentHeight) * 100;
	var bar = document.getElementById('bar');
	bar.style.width = scroll + '%';
}


// scroll-up
function up() {
	var t;
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
};


//ajax
$(document).ready(function() {

	$("#form1").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form1").trigger("reset");
		});
		return false;
	});
	
});

