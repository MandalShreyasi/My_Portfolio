window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.scrollY;
  
    if (verticalScrollPx < 750) {
      document.body.style.backgroundColor = '#FFEDED';
    
    } else if (verticalScrollPx > 750 && verticalScrollPx < 1700) {
      document.body.style.backgroundColor = '#F2CD5C';
      document.body.style.transitionDuration="2s";
    } else if (verticalScrollPx > 1700 && verticalScrollPx < 3000) {
        document.body.style.backgroundColor = '#9ED2BE';
        document.body.style.transitionDuration="2s";
      } else if (verticalScrollPx > 3000 && verticalScrollPx < 4000) {
        document.body.style.backgroundColor = '#000';
        document.body.style.transitionDuration="2s";
      }else if (verticalScrollPx > 4000 && verticalScrollPx < 6000) {
        document.body.style.backgroundColor = '#000';
        document.body.style.transitionDuration="2s";
      } else {
      document.body.style.backgroundColor = '#F2B6A0';
    }
  });
  