class Main {

    #observers = [];

    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this.fv = document.querySelector('.fv');
        // this.#init();
        this.#scrollInit();
    }

    #init() {
        new MobileMenu;
        Pace.on('done', this.#scrollInit.bind(this));
    }

    destroy() {
        this.#observers.forEach(so => so.destroy());
    }

    #scrollInit() {
        this.#observers.push(
            // new ScrollObserver('#bg-inside', this.#slowBackground.bind(this), { once: false }),
            // new ScrollObserver('.about', this.#inviewAnimation, {rootMargin: "-15%"}),
            // new ScrollObserver('.main-title', this.#textAnimation, {rootMargin: "-20%"}),
            // new ScrollObserver('.vision__row', this.#visionAnimation , {rootMargin: "-20%", once: true}),
            new ScrollObserver('.nav-trigger', this.#navAnimation.bind(this), { once: false }),
            new ScrollObserver('.main-title__line', this.#aboutLineAnimation),
        )
         this.#aboutLineAnimation();

        
    }

    #slowBackground(el, inview) {
    
        if(inview){
            this.bs.addSlow();
        } else {
            this.bs.removeSlow();
        }
    }

    #toggleSlideAnimation(el, inview) {
        if(inview) {
            // this.hero.start();
        } else {
            // this.hero.stop();
        }
    }

    

    #textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }
    #visionAnimation(el, inview) {
        if(inview) {
             const va = new TestTextAnimation(el);
            // ta.typeAnimate();
            // ta.typeAnimate();
            va.animate();
        }
    }

    
    #sideAnimation(el, inview) {
        if(inview) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }
    
    #inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }
    
    #aboutLineAnimation(el,inview) {
        if(inview){
            console.log('yobare');
            gsap.to(el, {
                '--mask-position': '100%',
                duration: .6,
                ease: 'power2.out',
                
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 20%',
                }
            });
        }

    }

    #navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
            this.fv.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
            this.fv.classList.add('triggered');
        }
    }
}
const main = new Main;
