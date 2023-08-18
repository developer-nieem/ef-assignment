
// mega menu
const megaMenuItems = document.querySelectorAll('.has-mega');

console.log(megaMenuItems);

megaMenuItems.forEach( item=> {
    const link = item.querySelector('a');
    console.log(link);
    const megaMenu = item.querySelector('.mega-menu');
    link.addEventListener('click', (event) => {
        console.log('clicked');
        event.preventDefault(); 
        item.classList.toggle('active')
        megaMenu?.classList.toggle('show');
      });
})


//  document.querySelectorAll('.searchBtn').addEventListener('click', function(){
//     console.log('srcbtn');
// })

const searchBtn = document.getElementById('searchBtn');
console.log(searchBtn);
searchBtn.addEventListener('click', function() {
    const navMenu = document.querySelector('.main-nav');
    const searchBox = document.querySelector('.search-part');
    navMenu.style.display = 'none'
    searchBox.style.display = 'block'
    
  });

  const searchClose = document.getElementById('close-btn');
  searchClose.addEventListener('click' , function(){
    const navMenu = document.querySelector('.main-nav');
    const searchBox = document.querySelector('.search-part');
    navMenu.style.display = 'flex'
    searchBox.style.display = 'none'
  })