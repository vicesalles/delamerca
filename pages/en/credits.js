import Icon from '@mdi/react'
import { mdiTwitter } from '@mdi/js'
import Pagina from '../../components/Pagina';

function Credits(){

    return(<Pagina>
            <section className="hero is-danger">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title delamercaTitle">
                            Art Credits
                        </h1>                   
                    </div>
                </div>
            </section>
            <section className="container section">
                <h4 className="title is-4">
                    Twitter pictures
                </h4>               
                <p>Header picture <a href="https://unsplash.com/@jessicalfadel" target="_blank" className="outLinkArtist">Jessica Fadel</a></p>
            </section>
            </Pagina>)


}

export default Credits;