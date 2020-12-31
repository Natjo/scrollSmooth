/**
 * Smooth scroll
 * @module ScrollSmooth
 *
 * @param {Object} params
 * @param {Function} params.onscroll
 * @return {number} scroll offset
 * 
 */


function ScrollSmooth(onscroll) {
    const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    const el = document.querySelector('[data-scroll]');
    const content = document.querySelector('[data-scroll-content]');
   
    if(isTouch){
        window.addEventListener('scroll', () => onscroll(window.scrollY || window.pageYOffset), { passive: true })
    }
    else{
        var raf = requestAnimationFrame || webkitRequestAnimationFrame;
        var current = 0;
        var last = 0;
        var rounded = 0;
        var ease = .09;

        const scroll = () => current = window.scrollY || window.pageYOffset;
        
        const onresize = () => {
            document.body.style.height = `${content.clientHeight}px`;
            scroll();
        }
  
        const run = () => {
            last += (current - last) * ease;
            rounded = Math.round(last * 100) / 100;
            content.style.transform = `translate3d(0, -${rounded}px, 0)`;
            onscroll(rounded);
            raf(run);
        }
    
        window.addEventListener('resize', onresize, {passive: true})
        window.addEventListener('scroll', scroll, {passive: true})

        onresize();

        raf(run);

        Object.assign(el.style, {
            position: 'fixed',
			overflow: 'hidden',  
			/*top: 0,
			left: 0,
			height: '100%',
			width: '100%',  */
        })
    }
}



export default ScrollSmooth;
