export default el => {
    let WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > el.offsetHeight) {
      el.style.paddingBottom = WINDOW_HEIGHT - el.offsetHeight + 'px';
    }
};

