const choiceColor = document.querySelectorAll('.colorchoice-btn');
const contentItem =  document.querySelectorAll('.content-item');

choiceColor.forEach(function(element){
  element.addEventListener('click', open);
});

function open(evt) {
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  choiceColor.forEach(function(item){
    item.classList.remove('colorchoice-btn--active');
  });

  target.classList.add('colorchoice-btn--active');

  contentItem.forEach(function(item){
    item.classList.remove('content-item--active');
  });

  contentActive.forEach(function(item){
    item.classList.add('content-item--active');
  });
}
