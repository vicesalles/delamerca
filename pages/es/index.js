import Link from 'next/link';
import Icon from '@mdi/react'
import { mdiTwitter,mdiInstagram,mdiMessage } from '@mdi/js'
import TopMenu from '../../components/TopMenu'

export default function Home() {
  return (
    <div>
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <TopMenu/>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 delamercaTitle">
              CORNERS DE LA MERCA
            </h1>
            <h2 className="subtitle delamercaSubtitle">
              Un juego de trapicheo
            </h2>           
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <div className="level">
             
                <div className="level-item footerHome">
                  <a href="https://twitter.com/delamerca" target="_blank"><Icon path={mdiTwitter} title="@delamerca" size={1} color="#ffffff" /></a>
                </div>

                <div className="level-item footerHome">
                            <a href="https://instagram.com/delamercagames" target="_blank">
                                <Icon path={mdiInstagram} title="@delamercagames" size={1} color="#ffffff" />
                            </a>
                </div>

                <div className="level-item footerHome">
                            <a href="https://keybase.io/vicesalles" target="_blank">
                                <Icon path={mdiMessage} title="keybase" size={1} color="#ffffff" />
                            </a>
                </div>
          
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

