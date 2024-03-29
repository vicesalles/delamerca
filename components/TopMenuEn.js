import Link from 'next/link';

function TopMenuEn(){

    return(<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item s-title is-1 tipodelamerca">
                        <b style={{color:"#e7401d"}}>DLM</b>
                    </a>
                </Link>    
                <Link href="/en/corners">
                    <a className="navbar-item">
                        Game
                    </a>
                </Link>      
                <Link href="/en/reviews">
                    <a className="navbar-item">
                        Reviews
                    </a>
                </Link>     
                <Link href="/movies">
                    <a className="navbar-item">
                        Movies
                    </a>
                </Link>     
                <Link href="/real-crime">
                    <a className="navbar-item">
                       Real Crime
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