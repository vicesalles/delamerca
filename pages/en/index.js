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
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <TopMenu/>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img className="logo" src="/delaMerca.svg" width="250"/>
            <h2 className="subtitle homeSubtitle">
              "Corners" is my first game. It's a simple decision making game where you'll never win.
            </h2>  
            <h1 className="title delamercaSubtitle">
              for how long you'd gonna last?
            </h1>   
            <MailChimpForm label="Stay tunned with my dev diary and join the beta"/>     
          </div>
        </div>
        <HeroFooter/>
      </section>
    </div>
  )
}