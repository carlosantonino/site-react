export default function Header() {    
    // const btnMobile = document.getElementById('btn-mobile');
    // function toggleMenu(){
    // const nav = document.getElementById('nav');
    // nav.classList.toggle('active');
    // }
    // btnMobile.addEventListener('click', toggleMenu);
    return(
        <>
            <header id="header">
                <img src="img/logo_mundo_animal.png" alt="teste" />
                <nav id="nav">   
                    <button id="btn-mobile">Menu</button>
                    <ul id="menu">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/">Portfólio</a></li>
                        <li><a href="/">Sobre</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                </nav>
            </header>  
        </>
    )
}