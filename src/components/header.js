
export default function Header() {
    return(
        <>
            <header id="header">
                <img src="img/logo_mundo_animal.png" />
                {/* <h1>Logo</h1> */}
                <nav>   
                    <button id="btn-mobile">Menu</button>
                    <ul className="menu">
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