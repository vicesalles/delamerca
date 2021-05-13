import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from './TopMenu';
import Link from 'next/link';

function Pagina({ children }) {
    return (<div>
        <TopMenu />
        <div>
            {children}
        </div>
        <div className="hero-foot">
            <div className="container">
                <div className="level">

                    <div className="level-item footerHome">
                        <a href="https://twitter.com/delamerca" target="_blank">
                            <Icon path={mdiTwitter} title="@delamerca" size={1} color="#000" />
                        </a>
                    </div>

                    <div className="level-item footerHome">
                        <a href="https://instagram.com/delamercagames" target="_blank">
                            <Icon path={mdiInstagram} title="@delamercagames" size={1} color="#000" />
                        </a>
                    </div>                

                    <div className="level-item footerHome">
                        <a href="https://keybase.io/vicesalles" target="_blank">
                            <Icon path={mdiCashMultiple} title="business" size={1} color="#000" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}

export default Pagina;