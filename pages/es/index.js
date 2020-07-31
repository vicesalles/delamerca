import Link from 'next/link';
import Head from 'next/head';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../../components/TopMenu'
import MailChimpForm from '../../components/MailChimpForm';

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="og:description" content="Juego indie sobre supervivencia callejera." key="description-facebook" />
        <meta name="twitter:description" content="Juego indie sobre supervivencia callejera." />
      </Head>
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <TopMenu />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src="/delaMerca.svg" width="250" />
            <h1 className="title delamercaSubtitle">
              cuanto crees que vas a durar?
            </h1>
            <MailChimpForm label="Suscríbete al diario de desarrollo"/>          
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

