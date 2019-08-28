function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);//3000);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');

    let bodyEl = document.getElementsByTagName('body');
    bodyEl[0].classList.remove('overflow_hidden');
    let str = bodyEl[0].getAttribute('class');
    if(str == "")
      bodyEl[0].removeAttribute('class');
  });


document.addEventListener('DOMContentLoaded', function(){


});


// Начало навскрола

  var bodyRect = document.body.getBoundingClientRect(),
    navLis = document.querySelectorAll('.top_menu_right li'),
    outPutValue = {},
    heightSections = {},
    numSec = 0;

  for (var i = 0; i < navLis.length; i++) 
  {
    outPutValue[i] = navLis[i].dataset.value;
    heightSections[i] = document.querySelector('section.'+outPutValue[i]).getBoundingClientRect().top - bodyRect.top - 5;
  }


document.addEventListener('scroll',(e)=>{
  var navLiActive = document.querySelector('nav li.active');

  while (numSec < Object.keys(heightSections).length) 
  {
    if (pageYOffset < heightSections[numSec+1])
    {
      if (navLiActive.dataset.value != outPutValue[numSec])
      {
        navLiActive.classList.remove('active');
        navLis[numSec].classList.add('active');
      }

      numSec = heightSections.length;
    }
    else
    {
      if(pageYOffset > heightSections[Object.keys(heightSections).length-1])
      {
        numSec = Object.keys(heightSections).length;
        navLiActive.classList.remove('active');
        navLis[numSec-1].classList.add('active');
      }
      numSec++;
    }
  }

  numSec = 0;
});

// Конец навскрола



const btns = document.querySelectorAll('.soft_transition .tabs_soft li');
const items = document.querySelectorAll('.soft_transition .info_soft');
const imgs = document.querySelectorAll('.soft_transition img');
var valueTarget;

function animeFunc(targetParam,textParam)
{
  items[targetParam-1].classList.toggle('anime-'+textParam);
  imgs[targetParam-1].classList.toggle('anime-'+textParam);
  items[targetParam-1].addEventListener('animationend',e=>{
      items[targetParam-1].classList.remove('anime-'+textParam);
  });
  imgs[targetParam-1].addEventListener('animationend',e=>{
      imgs[targetParam-1].classList.remove('anime-'+textParam);
  });
}

const setActive = (id)=>{
  for(let i =0;i<btns.length;i++)
  {
    if(btns[i].querySelector('a').dataset.value==id)
    {
      btns[i].querySelector('a').classList.add('active');
      setTimeout(function() {
        items[i].classList.add('visible-block');
        imgs[i].classList.add('visible-block');
        animeFunc(valueTarget,"after"); },200);    
    }
    else
    {
      btns[i].querySelector('a').classList.remove('active');
      setTimeout(function() {
        items[i].classList.remove('visible-block');
        imgs[i].classList.remove('visible-block');
        animeFunc(valueTarget,"after"); },200);
    }
  }
}

document.querySelector('#soft_transition').addEventListener('click',(e)=>{
  var activeBtn = document.querySelector('.tabs_soft li a.active').dataset.value;
  if(e.target.matches('.tabs_soft li a') && !(e.target.dataset.value == activeBtn))
  {
    valueTarget = e.target.dataset.value;
    setActive(valueTarget);
    animeFunc(activeBtn,"before");
  }
  return false;
});

AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
