// copy property btn
const eventCopyPropertyValueBtn = (btn) => {
  // copy to clipboard
  navigator.clipboard.writeText(btn.previousElementSibling.querySelector('span.password').innerText);

  // show tooltip
  btn.classList.add('active_tooltip');
  btn.setAttribute('data-balloon-visible', 'true');

  // add random ID to copy btn, so that active tooltip can be turned off if that ID is the same in 600 ms
  const btnID = generateRandomID();

  btn.setAttribute('active_tooltip_id', btnID);
  setTimeout(() => {
    if (btn.getAttribute('active_tooltip_id') == btnID) {
      btn.classList.remove('active_tooltip');
      btn.removeAttribute('data-balloon-visible');
    }
  }, 600);
};

// update position of balloon tooltip of copy property btn
const updateTooltipPosForCopyPropertyBtn = (btn) => {
  // assumes the tooltip is at most 6rem in width
  const btnFromRight = window.innerWidth - (btn.getBoundingClientRect().left + remToPx(2));
  if (btnFromRight <= remToPx(6)) {
    btn.setAttribute('data-balloon-pos', 'down');
  } else {
    btn.setAttribute('data-balloon-pos', 'right');
  }
};
