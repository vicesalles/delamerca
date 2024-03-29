import Link from 'next/link';

function TopMenuEs(){

    return(<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item s-title is-1 tipodelamerca">
                        <b style={{color:"#e7401d"}}>DLM</b>
                    </a>
                </Link>    
                <Link href="/es/esquinas">
                    <a className="navbar-item">
                        Juego
                    </a>
                </Link> 
                <Link href="/es/opiniones">
                    <a className="navbar-item">
                        Opiniones
                    </a>
                </Link> 
                <Link href="/movies">
                    <a className="navbar-item">
                        Pelis
                    </a>
                </Link> 
                <Link href="/real-crime">
                    <a className="navbar-item">
                        Crimen real
                    </a>
                </Link> 
               
               
                </div>
            </nav>)

}

export default TopMenuEs;

/*
 <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                */