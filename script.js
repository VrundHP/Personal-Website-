
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text span");
    const words = [
        "Web Development",
        "Software Engineering",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Science",
        "Cloud Computing",
        "Cybersecurity",
        "IT",
        "Database Management",
        "Programming Languages",
    ];

    // Determine the longest word for dynamic width
    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");
    const container = document.querySelector(".typing-text");
    container.style.width = `${longestWord.length}ch`; // Set the width based on the longest word

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 500); // Pause before typing the next word
                return;
            }
        } else {
            typingText.textContent = currentWord.substring(0, charIndex++);
            if (charIndex > currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500); // Pause before deleting
                return;
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
});




document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const homePage = document.querySelector(".home-page");

    // Ensure the navbar starts hidden
    navbar.style.opacity = "0";
    navbar.style.visibility = "hidden";

    window.addEventListener("scroll", () => {
        // Check if the user scrolled past the home-page section
        if (window.scrollY >= homePage.offsetHeight) {
            navbar.style.opacity = "1"; // Make navbar visible
            navbar.style.visibility = "visible";
        } else {
            navbar.style.opacity = "0"; // Hide navbar
            navbar.style.visibility = "hidden";
        }
    });
});

$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

})




$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineering", "Computer Science", "Machine Learning", "Web Development"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});


	


	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});


	$("[data-fancybox]").fancybox();


	/*$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});*/

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});



	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});



homePage.addEventListener("mousemove", (e) => {
    console.log("Mouse moved:", e.clientX, e.clientY);
});


function scrollToHome() {
    const homeSection = document.querySelector('.home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
}



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    // Function to add 'active' class to the current link
    function setActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the scroll position is within this section
            if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id"); // Get the section ID
            }
        });

        // Update active class on links
        navLinks.forEach(link => {
            link.classList.remove("active"); // Remove 'active' from all links
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active"); // Add 'active' to the current link
            }
        });
    }

    // Listen for scroll events
    window.addEventListener("scroll", setActiveLink);

    // Initialize active link on page load
    setActiveLink();
});

