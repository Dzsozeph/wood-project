	
	
	
	document.addEventListener('mousemove', function(e) {
    const circle = document.getElementById('cursor-circle');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
});
	
	  document.querySelector('.button-contact').addEventListener('click', function(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett hivatkozás viselkedést
        const formContainer = document.querySelector('.message-form-container');
        
        // Ellenőrzi, hogy látható-e az elem
        if (formContainer.style.display === 'none' || formContainer.style.display === '') {
            formContainer.style.display = 'flex'; // Megnyitja az űrlapot
        } else {
            formContainer.style.display = 'none'; // Bezárja az űrlapot, ha már meg van nyitva
        }
    });
	


document.querySelector('.btn-close').addEventListener('click', function(event) {
    event.preventDefault(); // Megakadályozza az alapértelmezett viselkedést
    const formContainer = document.querySelector('.message-form-container');
    formContainer.style.display = 'none'; // Bezárja az űrlapot
});

document.querySelector('.btn-contact2').addEventListener('click', function(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett hivatkozás viselkedést
        const formContainer = document.querySelector('.message-form-container');
        
        // Ellenőrzi, hogy látható-e az elem
        if (formContainer.style.display === 'none' || formContainer.style.display === '') {
            formContainer.style.display = 'flex'; // Megnyitja az űrlapot
        } else {
            formContainer.style.display = 'none'; // Bezárja az űrlapot, ha már meg van nyitva
        }
    });
	


document.querySelector('.btn-contact2').addEventListener('click', function() {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' // Simán gördít a tetejére
  });
});
	//------------------------------------------------------------------------------------------------------------------------//
	
	
	
	document.querySelector('.spinner').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
	
	
	//------------------------------------------------------------------------------------------------------------------------//
	
	
	

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null, // A viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% megjelenés
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Megállítjuk az észlelését
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Minden szekciót figyelünk
    });
});
	
	
	//UPPPPPP//
	





document.addEventListener("DOMContentLoaded", function () {
    const textBox = document.querySelector('.text-box');
    const aboutSection = document.getElementById('about');
    const workSection = document.getElementById('work');
    const customerSection = document.getElementById('customers'); // Új szekció
    const sliderContainer = document.querySelector('.slider-container');
    const customerBckg = document.querySelector('.customer-bckg');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === aboutSection) {
                    textBox.classList.add('animate');
                }
                if (entry.target === workSection) {
                    sliderContainer.classList.add('animate');
                    sliderContainer.classList.add('slide-up');
                }
                if (entry.target === customerSection) { // Új szekció
                    customerBckg.classList.add('shake'); // Rázó animáció indítása
                }
            } else {
                if (entry.target === aboutSection) {
                    textBox.classList.remove('animate');
                }
                if (entry.target === workSection) {
                    sliderContainer.classList.remove('animate');
                    sliderContainer.classList.remove('slide-up');
                }
                if (entry.target === customerSection) { // Új szekció
                    customerBckg.classList.remove('shake'); // Animáció eltávolítása
                }
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
    observer.observe(workSection);
    observer.observe(customerSection); // Az #customer szekció figyelése
});


//------------------------------------------------------------------------------------------------------------------------//
	
	document.querySelector('.btn-back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' // Simán gördít a tetejére
  });
});
	
	
	
					document.querySelector('.btn-up1').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ 
        behavior: 'smooth'
    });
});
	
			document.querySelector('.btn-up2').addEventListener('click', function() {
    document.querySelector('#work').scrollIntoView({ 
        behavior: 'smooth'
    });
});
	
	
				document.querySelector('.btn-up3').addEventListener('click', function() {
    document.querySelector('#prices').scrollIntoView({ 
        behavior: 'smooth'
    });
});


	
	
	
	
	//------------------------------------------------------------------------------------------------------------------------//
	//DOWN//
	
const button = document.querySelector('.btn-down1');
const workSection = document.getElementById('work');

// Eseménykezelő a gombra kattintáskor
button.addEventListener('click', () => {
    // Görgessen a work szekcióhoz
    workSection.scrollIntoView({
        behavior: 'smooth' // Simult görgetés
    });
});
	
	document.querySelector('.btn-down2').addEventListener('click', function() {
    document.querySelector('#prices').scrollIntoView({ 
        behavior: 'smooth'
    });
});

		document.querySelector('.btn-down3').addEventListener('click', function() {
    document.querySelector('#customers').scrollIntoView({ 
        behavior: 'smooth'
    });
});
	
	
	
	//------------------------------------------------------------------------------------------------------------------------//
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-bar li a");
const homeIcon = document.querySelector(".home-icon");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Eltávolítjuk az 'active' osztályt az összes menüelemről
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });

    // Külön kezeljük a 'home-icon'-t
    if (currentSection === "section-1") {
        homeIcon.classList.add("active");
    } else {
        homeIcon.classList.remove("active");
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

	//------------------------------------------------------------------------------------------------------------------------//
	
const portre = document.querySelector('.portre');
let isMouseInside = false; // Flag a mouse enter és leave események kezelésére

// Eseményfigyelők a mouse enter és mouse leave eseményekhez
portre.addEventListener('mouseenter', () => {
    isMouseInside = true; // Az egér a portre elem felett van
});

portre.addEventListener('mouseleave', () => {
    isMouseInside = false; // Az egér elhagyta a portre elemet
    portre.style.transform = 'translate(0, 0)'; // Visszaállítjuk az eredeti pozícióra
});

// Eseményfigyelő a mousemove eseményhez
document.addEventListener('mousemove', (event) => {
    if (isMouseInside) { // Csak akkor mozogjon, ha az egér a portre felett van
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Az elem pozíciója az egér pozíciójának ellentétes irányban
        const offsetX = (window.innerWidth / 2 - mouseX) / 20; // A mozgás érzékenysége
        const offsetY = (window.innerHeight / 2 - mouseY) / 20;

        portre.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});
	
	//------------------------------------------------------------------------------------------------------------------------//
	
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");

    function checkVisibility() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Ellenőrizd, hogy a szekció a képernyőn belül van-e
        if (sectionPosition < screenPosition && sectionPosition >= 0) {
            aboutSection.classList.add("visible"); // Hozzáadja a visible osztályt
            window.removeEventListener("scroll", checkVisibility); // Eltávolítjuk az eseményfigyelőt
        }
    }

    window.addEventListener("scroll", checkVisibility);
    // Ellenőrizzük, hogy a szekció kezdetben látható-e
    checkVisibility();
});
	//------------------------------------------------------------------------------------------------------------------------//
	
	
let slideIndex = 0;
let direction = 1; // Kezdés jobbra (1: jobbra, -1: balra)

const slideMargin = 70; // A slide-ok közötti margin (10vw = 10% a viewport szélességéből)

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // A slide-ok szélessége (20vw) plusz a margó (10vw)
    const slideWidth = 20; // Két slide szélessége (20vw)
    slides.style.transform = `translateX(${-slideIndex * (slideWidth + slideMargin)}vw)`;
}

function moveSlide(direction) {
    showSlide(slideIndex + direction);
}

// Automatikus jobbra és balra mozgás beállítása
function autoSlide() {
    setInterval(() => {
        moveSlide(direction); // Egyet mozdul a megadott irányba
        direction *= -1; // Irányváltás (jobbra-balra)
    }, 8000); // 8 másodperces intervallum
}

// Kezdő slide megjelenítése és az automatikus mozgás indítása
showSlide(slideIndex);
autoSlide();

	
//**********************************************************************************************************************//
	
	

	// JavaScript Document