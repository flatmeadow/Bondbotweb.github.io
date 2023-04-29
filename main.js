/* main section animation */

const mainSection = document.querySelector('.main-section');
const leftContent = document.querySelector('.left-content');
const rightContent = document.querySelector('.right-content');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      leftContent.classList.add('slide-in-left');
      rightContent.classList.add('slide-in-right');
      observer.disconnect();
    }
  });
});

observer.observe(mainSection);
