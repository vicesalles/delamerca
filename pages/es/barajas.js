import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Barajas() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Barajas: Arte que representa una ciudad
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para">El juego se basa en la toma rápida de decisiones callejeras. Las situaciones se muestran cómo una carta o estampa.</p>
            <p className="para">Cada baraja representa una ciudad del mundo y su cultura. Es por esto que busco colaboradores en todas las ciudades del mundo.
            Busco artistas gráficos que sean capaces de mostrar las calles de su ciudad al mundo.</p>
            <p className="para">Cada estampa, o carta, cuenta con dos partes gráficas: </p>
            <p className="para">

                <ul>
                    <li><b>El fondo</b> es un decorado compartido por todas las cartas de la baraja estilo <i>skyline</i> y represeta cada ciudad</li>
                    <li><b>La figura</b> representa una situación callejera o una persona</li>
                </ul>
            </p>
            <p className="para">Cada baraja consta de un único fondo compartido y de unas 20 cartas/estampas únicas.</p>

            <p className="para"><b>Estoy buscando artistas activamente</b>. Si te motiva este proyecto, contáctame en social media. Hablaremos de negocios. Tienes los links en la parte inferior de la pantalla.</p>
        </section>
        <section className="container section ">
            <div className="level">
                <div className="level-item">
                    <iframe src="https://giphy.com/embed/MRxJqmk3MNta8" width="480" height="208" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
            </div>
        </section>
        <section className="container section">
            <h1 className="title">Estilo</h1>
            <p className="para">Busco arte de linia simple y mucha fuerza. No busco arte que luzca por su realismo si no escenas impactantes e icónicas.</p>

            <p className="para">Si tomamos dos extremos que amo, busco algo en medio de <a href=" https://www.rockstargames.com/V/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2FV%2F&options=&locale=en_us" target="_blank">GTA</a> y <a href="https://reignsgame.com/reigns/" target="_blank">REIGNS</a></p>


            <div className="level">
                <div className="level-item">
                    <div className="container has-text-centered">
                        <img src="https://reignsgame.com/reigns/assets/img/ser01.png" />
                        <p>El principe, un personaje de Reigns</p>
                    </div>

                </div>
                <div className="level-item">
                    <div className="container has-text-centered">
                        <img width="600" src="https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/wallpapers/games/v_tonya_twitter.jpg" />
                        <p>Tonya, un personaje de GTA V</p>
                    </div>
                </div>
            </div>

            <p className="para">Es posible? Estoy seguro que sí! Crees que tu arte puede representar a tu ciudad? Contactame</p>
        </section>
    </Pagina>)



}

export default Barajas;