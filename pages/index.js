import Link from 'next/link';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../components/TopMenu'
import HeroFooter from '../components/HeroFooter';

export default function Home() {
  return (
    <div>
      <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="level">
              <div className="level-item">
                <div className="container">
                  <figure class="image is-16by9">
                    <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/a2p-mUxQhEg" title="YouTube video player"
                      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </figure>
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-item">
                <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=delamerca.com-home'><img width="200" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
              </div>
            </div>
            <h1 className="title is-1 delamercaTitle" style={{ color: "#e7401d" }}>
              de la merca
            </h1>
            <img src="/Bigoti.svg" width="250" style={{ marginBottom: "1em" }} />


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
        <HeroFooter />
      </section>
    </div>
  )
}

