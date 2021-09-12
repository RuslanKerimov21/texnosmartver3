$(document).ready(function(){
  // Слайдеры
  $('.slider-banner').slick({
    arrow:true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // speed: 600,
  });


  $('.slider-gallerey').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow:true,
    dots: false,
    speed: 600,
  });


  // Табы
  $(function(){
    $(".tabs-list").on("click","a",function(){
      $("a").removeClass("tab-active"),
      $(this).addClass("tab-active");
      let filter = $("[data-filter]");
      filter.on("click", function(event){
        event.preventDefault();
        let cat = $(this).data('filter');
        $("[data-cat]").each(function(){
          let workCat = $(this).data('cat');
          if(workCat != cat){
            $(this).addClass('hide');
          }
          else{
            $(this).removeClass('hide');
          }
        })
      });
    });
  })
  // 
});


// Поиск по сайту
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
// HTTP Request with fetch
fetch(endpoint)
  .then( blob => blob.json())
  .then( data => cities.push(...data));
//console.log(cities);
// Filter place based on form input
function findMatch(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}
// Display matched results
function displayMatched(){
  const matchArray = findMatch(this.value.trim(), cities);
  const html = matchArray.map( place => {
    // Highligted match
    const regex = new RegExp(this.value.trim(), 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    // Build HTML
    return `
      <li>
        <a>${cityName}, ${stateName}</a>
      </li>
    ` ;
  }).join('');
  results.innerHTML = html;
}
// Elements
const form = document.querySelector('.searchForm'),
    searchInput = document.querySelector('#search'),
    results = document.querySelector('.result-list');
// Prevent form submission
form.addEventListener('submit', (e) => e.preventDefault());
// Capture text input
searchInput.addEventListener('keyup', displayMatched);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // If we need pagination
});


const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // If we need pagination
});


$(function(){
  $(".footer-wrap-mobile .footer-group-accordion.active").children(".footer-group__list").slideDown('fast');
  $(".footer-wrap-mobile .footer-group-accordion").click(function(){
    $(this).siblings(".accordion-item").removeClass("active").children(".footer-group__list").slideUp('fast');
    $(this).toggleClass("active").children(".footer-group__list").slideToggle("fast");
  });
});



