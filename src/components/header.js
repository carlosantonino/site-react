import '../css/header.css';

export default function Header() {    
    // const btnMobile = document.getElementById('btn-mobile');
    // function toggleMenu(){
    // const nav = document.getElementById('nav');
    // nav.classList.toggle('active');
    // }
    // btnMobile.addEventListener('click', toggleMenu);
    return(
        <>
            <header class="header">
            <a href="" class="logo">Mundo Animal</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li><a href="#work">Inicio</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#careers">Contato</a></li>
                <li><a href="#contact">Portfólio</a></li>
            </ul>
            </header> 
        </>
    )
}