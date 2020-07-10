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
                <p className="para">De la merca es una secuencia de toma de decisiones. El jugador afronta pequeñas escenas y decide entre tres decisiones posibles. Veo cada escena como una viñeta, como una estampa, 
                    como una carta ilustrada. Cada carta pinta una escena diaria con sus repercusiones. El arte es determinante para la immersión del usuario. Si tenemos en cuanta, además, que el texto
                    se trata de forma minimalista, podemos asegurar que el artista gráfico contribuirá definitivamente en el storytelling que estará a cargo del jugador y su propia imaginación.</p>
                <p className="para">Mi idea es crear barajas temáticas con artistas de todo el mundo. Todas las barajas tendran elementos comunes pero puede contemplarse la creación de cartas específicas para cada ciudad. 
                    Mi deseo es conseguir que artistas de todo el mundo, ilustren escenas que se dan en todas las ciudades con sus matices</p>
                <p className="para">Cada estampa, viñeta o carta, cuenta con dos partes gráficas: <b>El fondo</b> que es un decorado compartido por todas las cartas de la baraja estilo <i>skyline</i> representando la ciudad y <b>la figura</b>, cuya función es mostrar la escena en sí</p>
                <p className="para">Estoy buscando artistas activamente. Si te motiva este proyecto, contáctame en social media. Tienes los links en la parte inferior de la pantalla.</p>
            </section>
            </Pagina>)


}

export default Barajas;