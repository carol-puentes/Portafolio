import logo from '../assets/logo.svg'
import '../css/main.css'
<script src="/src/script.js"> </script>

import cv from '../CV/Carol_Puentes_CV.pdf'

const Nav = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light">

            <div class="logo">
                {/* Insercion de logo */}
                <img src={logo} alt="logo" style={{ "width": "20%", "height": "100px" }} />
                <i className='nombre'>CAROL PUENTES</i>
            </div>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#welcome-section">Sobre mi  <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tecnologis">Tecnologias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#proyectos">Mis proyectos</a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href={cv} download>
                            CV
                        </a>
                    </li>



                </ul>
            </div>
        </nav>

    )
}
export default Nav;