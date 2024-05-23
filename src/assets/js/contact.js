import Scroll from './module/Scroll';
import StickyHeader from './module/StickyHeader';

window.addEventListener('load', () => {
  const header = new StickyHeader();

  const $scrollBox = document.querySelectorAll('.js-scroll');

  Array.from($scrollBox).forEach((item) => {
    const scroll = new Scroll({
      target: item,
    });
  });
});
