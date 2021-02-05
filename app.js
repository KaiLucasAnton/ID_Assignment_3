//Script for the sidebar that appears when the burger button is pressed while in mobile mode, or when the page is narrow

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    //toggle Nav
    burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
    
    //Animete Links
        navLinks.forEach((link, index) => {
        //console.log(index);
            link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
            console.log(index/7);
        });
    });

}

const app = () =>{
    navSlide();
}

app();