const first = document.getElementById('Service');
const second = document.getElementById('Blog');
const third = document.getElementById('Contact');

first.addEventListener('click', ()=>{
  first.classList.add = entoure;
  second.classList.remove = entoure;
  third.classList.remove = entoure;
});

second.addEventListener('click', ()=>{
  second.classList.add = entoure;
  first.classList.remove = entoure;
  third.classList.remove = entoure;
});

third.addEventListener('click', ()=>{
  third.classList.add = entoure;
  second.classList.remove = entoure;
  first.classList.remove = entoure;
});
