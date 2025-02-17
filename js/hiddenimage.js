class HiddenImage {
    constructor(el) {
        this.DOM = {
            el: el
        };
        
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hidden-image-reveal';
        this.DOM.reveal.style.overflow = 'hidden';
        
        this.DOM.image = this.DOM.el.querySelector('img');
        this.DOM.imageClone = this.DOM.image.cloneNode(true);
        this.DOM.revealInner = document.createElement('div');
        this.DOM.revealInner.className = 'hidden-image-reveal__inner';
        this.DOM.revealInner.appendChild(this.DOM.imageClone);
        this.DOM.reveal.appendChild(this.DOM.revealInner);
        this.DOM.el.appendChild(this.DOM.reveal);
        
        this.initEvents();
    }

    initEvents() {
        this.mouseenterFn = (ev) => {
            this.showImage();
        };
        this.mouseleaveFn = (ev) => {
            this.hideImage();
        };
        
        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }

    showImage() {
        gsap.killTweensOf(this.DOM.revealInner);
        
        this.tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: 'power4.out'
            }
        })
        .set([this.DOM.reveal, this.DOM.revealInner], {
            opacity: 1
        })
        .fromTo(this.DOM.reveal, {
            scale: 0,
            rotation: -15
        }, {
            scale: 1,
            rotation: 0
        })
        .fromTo(this.DOM.revealInner, {
            scale: 2
        }, {
            scale: 1
        }, 0);
    }

    hideImage() {
        gsap.killTweensOf(this.DOM.revealInner);
        
        this.tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: 'power4.out'
            }
        })
        .to(this.DOM.reveal, {
            scale: 0,
            rotation: 15
        })
        .to(this.DOM.revealInner, {
            scale: 2
        }, 0)
        .set([this.DOM.reveal, this.DOM.revealInner], {
            opacity: 0
        });
    }
} 