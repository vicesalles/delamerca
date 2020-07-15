import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Barajas(){

    return(<Pagina>
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
                <p className="para">Cada baraja representa una ciudad del mundo y su cultura. Es por esto que busco colaboradores en todas las ciudades del mundo. Busco artistas gráficos que sean capaces de mostrar las calles de su ciudad al mundo.</p>
                <p className="para">Cada estampa, viñeta o carta, cuenta con dos partes gráficas: <b>El fondo</b> que es un decorado compartido por todas las cartas de la baraja estilo <i>skyline</i> 
                representando la ciudad y <b>la figura</b>, cuya función es mostrar la escena en sí.</p>
                <p className="para">Estoy buscando artistas activamente. Si te motiva este proyecto, contáctame en social media. Hablaremos de negocios. Tienes los links en la parte inferior de la pantalla. </p>
            </section>
            </Pagina>)


}

export default Barajas;