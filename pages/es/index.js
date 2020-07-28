import Link from 'next/link';
import Head from 'next/head';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../../components/TopMenu'

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
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>    
            <div id="mc_embed_signup">
            <form action="https://delamerca.us17.list-manage.com/subscribe/post?u=87088ae9ce581bbe27ff07968&amp;id=f91bfa2e4b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Suscríbete  al diario de desarrollo</label>
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email" required/>   
                <div class="clear"><input type="submit" value="Suscríbete" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                </div>
            </form>
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

