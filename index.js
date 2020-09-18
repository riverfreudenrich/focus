let dropDowns = Array.from(document.querySelectorAll('.checkbox'));

const handleClick = (e) => {
  // e.preventDefault();
  dropDowns.forEach(node => {
    node.classList.remove('checked');
    node.classList.remove('current-checked');
  });
  e.currentTarget.classList.add('checked');

}

dropDowns.forEach(node => {
  node.addEventListener('click', handleClick)
});
