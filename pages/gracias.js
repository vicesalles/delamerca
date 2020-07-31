import Link from 'next/link';
import Head from 'next/head';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../components/TopMenu'
import {motion} from 'framer-motion';


export default function Gracias() {
  return (
    <div>
      <Head>
        <meta property="og:description" content="Juego indie sobre supervivencia callejera." key="description-facebook" />
        <meta name="twitter:description" content="Juego indie sobre supervivencia callejera." />
      </Head>
      <section className="hero is-dark is-fullheight">        
        <div className="hero-body">
          <div className="container has-text-centered">   
          <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: 0.3 }}  className="title is-1 delamercaTitle" style={{color:"#e7401d"}}>
              Corners
            </motion.h1>
            <motion.img initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{delay: 0.5}} src="/Bigoti.svg" width="250" style={{marginBottom:"1em"}}/>    
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}}
            className="title delamercaSubtitle">
              gracias for subscribing !!
            </motion.h1>
            <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay: 0.8}} className="level">
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
                
           
            </motion.div>   
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

