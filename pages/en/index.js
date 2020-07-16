import Link from 'next/link';
import Icon from '@mdi/react'
import { mdiTwitter,mdiInstagram, mdiDiscord,mdiCashMultiple } from '@mdi/js'
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
            <img src="/delaMerca.svg" width="250"/>
            <h1 className="title delamercaSubtitle">
              for how long do you gonna last?
            </h1>           
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
                            <a href=" https://discord.gg/gDWkqm" target="_blank">
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