import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Jo() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Sobre mi
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para">  M'invento històries. Són històries de mentida. A vegades s'assemblen a la realitat però no és pas culpa meva. Les històries viatgen d'un cap a l'altre a través d'un mitjà, segueixen un camí. 
            Sempre passa que aquest camí i la història en sí mateixa es perceben com una sola cosa. No tothom que agafa un llibre diu "Quina història tan bonica que duu aquest llibre", no. Diem que un llibre, un còmic o una sèrie són bons. I és clar que són bons!
            Perquè és tot un ofici això dels mitjans! El que vull dir amb tot això, és que m'agrada inventar-me històries i que no em fa por experimentar amb diversos mitjans per fer-les viatjar al cap de la gent. Primer vaig provar-ho amb els audiovisuals però 
            mai no vaig comptar amb els recursos, o la constància necessària per aconseguir-los, necessaris per explicar la història que volia explicar. Així doncs, em vaig passar a l'escriptura. Vaig explicar part de la història que volia explicar però va resultar 
            que és un món de misèria i companyia. Per aguantar imbècils a canvi de quatre molles ja hi ha altres feines. I feines, a més, que requereixen moltíssima menys dedicació i cap típus d'implicació emocional. A cagar l'escriptura. 
            </p>      

            <p className="para">
            He decidit canviar-me de mitjà. He guardat la vella història en un calaix i he passat pàgina. Estic fent un joc. Vull explicar una història nova. D'una manera nova. 
            </p>

        </section>
    </Pagina>)



}

export default Jo;