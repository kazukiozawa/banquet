class Marquee {
    constructor() {
        this.marquee = document.querySelector('.marquee');
        this.track = this.marquee?.querySelector('.marquee__track');
        this.group = this.track?.querySelector('.marquee__group');

        if (!this.marquee || !this.track || !this.group) return;

        this.tween = null;

        this.#setupMarquee();
    }

    #setupMarquee() {
        // 既存の複製グループを削除
        this.track.querySelectorAll('.marquee__group:not(:first-child)')
            .forEach(clone => clone.remove());

        gsap.set(this.track, { x: 0 });

        const groupWidth = this.group.offsetWidth;

        // 表示領域を埋めるまでグループを複製
        while (this.track.scrollWidth < this.marquee.clientWidth + groupWidth) {
            const clone = this.group.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            this.track.appendChild(clone);
        }

        // GSAPアニメーション
        this.tween = gsap.to(this.track, {
            x: -groupWidth,
            duration: 30,
            ease: 'none',
            repeat: -1,
            paused: true,
        });
    }

    play() {
        this.tween?.play();
    }

    pause() {
        this.tween?.pause();
    }

    destroy() {
        this.tween?.kill();
    }
}