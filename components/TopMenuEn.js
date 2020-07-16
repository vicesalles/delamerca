import Link from 'next/link';

function TopMenuEn(){

    return(<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item s-title is-1 tipodelamerca">
                        <b style={{color:"#e7401d"}}>DLM</b>
                    </a>
                </Link>    
                <Link href="/en/decks">
                    <a className="navbar-item">
                        Art
                    </a>
                </Link> 
                <Link href="/en/credits">
                    <a className="navbar-item">
                        Credits
                    </a>
                </Link>
                </div>
            </nav>)

}

export default TopMenuEn;

/*
 <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                */