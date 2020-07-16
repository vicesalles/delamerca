import Link from 'next/link';
import Icon from '@mdi/react'
import { mdiTwitter,mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../components/TopMenu'

export default function Home() {
  return (
    <div>
      <section className="hero is-dark is-fullheight">      
        <div className="hero-body">
          <div className="container has-text-centered">
            
            <h1 className="title is-1 delamercaTitle" style={{color:"#e7401d"}}>
              de la merca
            </h1>
            <img src="/Bigoti.svg" width="250" style={{marginBottom:"1em"}}/>
            <h2 className="subtitle homeSubtitle">
              A trapicheo game
            </h2>   
            <div className="level">
              <div className="level-item">
                <Link href="/es">
                  <a className="langLink">
                  Español
                  </a>
                </Link>
                <Link href="/en">
                <a className="langLink">
                  English
                  </a>
                </Link>
              </div>
              
                
           
            </div>        
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
                            <a href="https://discord.gg/T2T97XJ" target="_blank">
                                <Icon path={mdiDiscord} title="discord" size={1} color="#ffffff" />
                            </a>
                </div>

                <div className="level-item footerHome">
                            <a href="https://keybase.io/vicesalles" target="_blank">
                                <Icon path={mdiCashMultiple} title="business" size={1} color="#ffffff" />
                            </a>
                </div>
          
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

