import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Corners() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Corners
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"> Corners de la merca is a casual but intense game. We all have seen how the entertainment industry is depicting the drugs industry. Far from Netflix, the drugs worl ain't romantic at all. For how long you thing you'd gonna last?</p>
            
            <p className="para"> The game is currently on active development and its release it's expected for Q4 2021</p>

        </section>
    </Pagina>)



}

export default Corners;