import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiCashMultiple, mdiTshirtV, mdiMusic } from '@mdi/js'

function HeroFooter() {

  return (
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
            <a href="https://www.tiktok.com/@delamerca?" target="_blank">
              <Icon path={mdiMusic} title="TikTok" size={1} color="#ffffff" />
            </a>
          </div>

          <div className="level-item footerHome">
            <a href="https://delamerca.net" target="_blank">
              <Icon path={mdiTshirtV} title="shop" size={1} color="#ffffff" />
            </a>
          </div>

          <div className="level-item footerHome">
            <a href="https://keybase.io/vicesalles" target="_blank">
              <Icon path={mdiCashMultiple} title="Let's talk business" size={1} color="#ffffff" />
            </a>
          </div>

        </div>

      </div>
    </div>
  )

}

export default HeroFooter;