import Link from 'next/link';
import Icon from '@mdi/react'
import { mdiTwitter } from '@mdi/js'
import Pagina from '../components/Pagina';

function Credits(){

    return(<Pagina>
            <section className="hero is-danger">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Créditos
                        </h1>                   
                    </div>
                </div>
            </section>
            <section className="container section">
                <h2 className="title is-2">
                    Twitter
                </h2>
                <p>Foto de perfil de <a href="https://unsplash.com/@theshuttervision" target="_blank" className="outLinkArtist">Jonathan Cooper</a></p>
                <p>Foto de cabezera de <a href="https://unsplash.com/@jessicalfadel" target="_blank" className="outLinkArtist">Jessica Fadel</a></p>
            </section>
            </Pagina>)


}

export default Credits;