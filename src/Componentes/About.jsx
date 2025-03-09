import me from '../assets/me.png'
import '../css/main.css'

const About = () => {
    return (
        <div id="welcome-section">
             <div class="me-pictures">
             <img src={me} alt="logo" id="header-img" />
             </div>
          
            <div id="personal-inf">
                <h1>Carol Stefania Puentes Motta</h1>
                <h2>INGENIERA DE SOFTWARE </h2>
                <p>!Hola! Soy ingeniera de software con énfasis en desarrollo web, apasionada por transformar ideas en experiencias digitales impactantes. Combino creatividad y tecnología para diseñar interfaces intuitivas y estéticas, dominando herramientas como Figma y React. Mi enfoque está en desarrollar aplicaciones responsivas que conecten con los usuarios y aporten soluciones innovadoras. </p>
            </div>

        </div>
    )
}

export default About;