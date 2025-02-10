const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__nav');
const links = document.querySelectorAll('.header__nav--list li a');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

links.forEach(l => {
  l.addEventListener('click', () => {
    navigation.classList.remove('open');
  });
});
