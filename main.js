
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


