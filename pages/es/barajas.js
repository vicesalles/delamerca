import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Barajas() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Barajas
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
    </Pagina>)



}

export default Barajas;