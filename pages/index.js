import Link from 'next/link';
import Icon from '@mdi/react'
import { mdiTwitter,mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../components/TopMenu'
import HeroFooter from '../components/HeroFooter';

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
              Gentlemant et Provocateur
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
                <Link href="/ca">
                <a className="langLink">
                  Català
                  </a>
                </Link>
              </div>
              
                
           
            </div>        
          </div>

        </div>
      <HeroFooter/>
      </section>
    </div>
  )
}

