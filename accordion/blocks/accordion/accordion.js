const btn = document.querySelector('.accordion__button');
const icon = document.querySelector('.accordion__icon');
const panel = document.querySelector('.accordion__panel');

let opened = false;

btn.onclick = function() {
  if (opened) {
    icon.classList.remove('accordion__icon_rotated');
    panel.classList.remove('accordion__panel_opened');
  } else {
    icon.classList.add('accordion__icon_rotated');
    panel.classList.add('accordion__panel_opened');
  }

  opened = !opened;
}
