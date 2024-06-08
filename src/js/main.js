import '../css/style.css';
/**
 * @class
 * @description Main class for handling various events and functionalities
 */
class Main {
    constructor() {
        this.preloader = document.querySelector("[data-preaload]");
        this.navbar = document.querySelector("[data-navbar]");
        this.navTogglers = document.querySelectorAll("[data-nav-toggler]");
        this.overlay = document.querySelector("[data-overlay]");
        this.header = document.querySelector("[data-header]");
        this.backTopBtn = document.querySelector("[data-back-top-btn]");
        this.heroSlider = document.querySelector("[data-hero-slider]");
        this.heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
        this.heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
        this.heroSliderNextBtn = document.querySelector("[data-next-btn]");
        this.parallaxItems = document.querySelectorAll("[data-parallax-item]");
        this.lastScrollPos = 0;
        this.currentSlidePos = 0;
        this.lastActiveSliderItem = this.heroSliderItems[0];
        this.autoSlideInterval = null;
        this.init();
	}
	/**
	 * Initialize the main class
	 * @returns {void}
	 * @memberof Main
	 * 
	 */

    init() {
        window.addEventListener("load", this.handleLoad.bind(this));
        window.addEventListener("scroll", this.handleScroll.bind(this));
        window.addEventListener("mousemove", this.handleMouseMove.bind(this));
        this.addEventOnElements(this.navTogglers, "click", this.toggleNavbar.bind(this));
        this.heroSliderNextBtn.addEventListener("click", this.slideNext.bind(this));
        this.heroSliderPrevBtn.addEventListener("click", this.slidePrev.bind(this));
        this.addEventOnElements([this.heroSliderNextBtn, this.heroSliderPrevBtn], "mouseover", this.stopAutoSlide.bind(this));
        this.addEventOnElements([this.heroSliderNextBtn, this.heroSliderPrevBtn], "mouseout", this.autoSlide.bind(this));
    }

	/**
	 * Handle the load event
	 * @returns {void}
	 * @memberof Main
	 * @description`This function handles the load event
	 * 
	 */
    handleLoad() {
        this.preloader.classList.add("loaded");
        document.body.classList.add("loaded");
        this.autoSlide();
    }
	/**
	 * Handle the scroll event
	 * @returns {void}
	 * @memberof Main
	 * @description This function handles the scroll event
	 * @since 1.0.0
	 */
	
    handleScroll() {
        if (window.scrollY >= 50) {
            this.header.classList.add("active");
            this.backTopBtn.classList.add("active");
            this.hideHeader();
        } else {
            this.header.classList.remove("active");
            this.backTopBtn.classList.remove("active");
        }
    }

	/**
	 * Handle the mousemove event
	 * @param {MouseEvent} event - The event object
	 * @returns {void}
	 * @memberof Main
	 * @description This function handles the mousemove event
	 * @since 1.0.0
	 * 
	 */
    handleMouseMove(event) {
        let x = (event.clientX / window.innerWidth * 10) - 5;
        let y = (event.clientY / window.innerHeight * 10) - 5;
        x = x - (x * 2);
        y = y - (y * 2);
        for (let i = 0, len = this.parallaxItems.length; i < len; i++) {
            x = x * Number(this.parallaxItems[i].dataset.parallaxSpeed);
            y = y * Number(this.parallaxItems[i].dataset.parallaxSpeed);
            this.parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
        }
    }
    /**
     * @method
     * @param {Array} elements - The elements to add event listeners to
     * @param {string} eventType - The type of the event
     * @param {Function} callback - The callback function to be called when the event is triggered
     * @description Add event listeners to the given elements
     * @returns {void}
     */
    addEventOnElements(elements, eventType, callback) {
        for (let i = 0, len = elements.length; i < len; i++) {
            elements[i].addEventListener(eventType, callback);
        }
    }
    /**
     * @method
     * @description Toggle the navbar
     * @returns {void}
	 * @description This function toggles the navbar
     */
    toggleNavbar() {
        this.navbar.classList.toggle("active");
        this.overlay.classList.toggle("active");
        document.body.classList.toggle("nav-active");
    }

	 /**
     * @method
     * @description Hide the header
     * @returns {void}
     */
    hideHeader() {
        const isScrollBottom = this.lastScrollPos < window.scrollY;
        if (isScrollBottom) {
            this.header.classList.add("hide");
        } else {
            this.header.classList.remove("hide");
        }
        this.lastScrollPos = window.scrollY;
    }

	
    /**
     * @method
     * @description Update the slider position
     * @returns {void}
     */
    updateSliderPos() {
        this.lastActiveSliderItem.classList.remove("active");
        this.heroSliderItems[this.currentSlidePos].classList.add("active");
        this.lastActiveSliderItem = this.heroSliderItems[this.currentSlidePos];
    }

	 /**
     * @method
     * @description Slide to the next slide
     * @returns {void}
     */
    slideNext() {
        if (this.currentSlidePos >= this.heroSliderItems.length - 1) {
            this.currentSlidePos = 0;
        } else {
            this.currentSlidePos++;
        }
        this.updateSliderPos();
    }

	 /**
     * @method
     * @description Slide to the previous slide
     * @returns {void}
     */
    slidePrev() {
        if (this.currentSlidePos <= 0) {
            this.currentSlidePos = this.heroSliderItems.length - 1;
        } else {
            this.currentSlidePos--;
        }
        this.updateSliderPos();
    }

	/**
     * @method
     * @description Start auto sliding 
     * @returns {void}
     */
    autoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.slideNext();
        }, 7000);
    }

	/**
     * @method
     * @description Stop auto sliding 
     * @returns {void}
     */
    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }
}

new Main();