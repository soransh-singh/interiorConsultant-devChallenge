window.addEventListener('load', (event)=>{
  console.log("page is fully loaded");
  const open = document.querySelector(".btn__open");
  const close = document.querySelector(".btn__close");
  const nav = document.querySelector(".nav__list")
  console.log(open);
  open.addEventListener('click',(e)=>{
    nav.classList.add("nav__list--show")
  });

  close.addEventListener('click',(e)=>{
    nav.classList.remove("nav__list--show")
  });
});
