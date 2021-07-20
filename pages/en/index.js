import Link from 'next/link';
import Head from 'next/head';
import Icon from '@mdi/react'
import { mdiTwitter,mdiInstagram, mdiDiscord,mdiCashMultiple } from '@mdi/js'
import TopMenu from '../../components/TopMenu'
import MailChimpForm from '../../components/MailChimpForm';
import HeroFooter from '../../components/HeroFooter';


export default function Home() {

  return (
    <div>
          <Head>
        <meta property="og:description" content="Street survival game." key="description-facebook" />
        <meta name="twitter:description" content="Street survival game." />
      </Head>
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <TopMenu/>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img className="logo" src="/delaMerca.svg" width="250"/>
            <h2 className="subtitle homeSubtitle">
            <Link href="/en/corners"><span  className="cornersLink">"Corners"</span></Link> is my first game. It's a simple decision making game where you'll never win.
            </h2>  
            <h1 className="title delamercaSubtitle">
              for how long you'd gonna last?
            </h1>   
            <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=delamerca.com-en-home'><img width="200" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
             
          </div>
        </div>
        <HeroFooter/>
      </section>
    </div>
  )
}