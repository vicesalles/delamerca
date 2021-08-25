import Link from 'next/link';

function TopMenuCa(){

    return(<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item s-title is-1 tipodelamerca">
                        <b style={{color:"#e7401d"}}>DLM</b>
                    </a>
                </Link>    
                <Link href="/ca/cantonades">
                    <a className="navbar-item">
                        Joc
                    </a>
                </Link>    
                <Link href="/ca/opinions">
                    <a className="navbar-item">
                        Opinions
                    </a>
                </Link>   
                <Link href="/movies">
                    <a className="navbar-item">
                        Pelis
                    </a>
                </Link>                       
                <Link href="/real-crime">
                    <a className="navbar-item">
                        Crims Reals
                    </a>
                </Link>  
                <Link href="/ca/jo">
                    <a className="navbar-item">
                        Autor
                    </a>
                </Link>     
                </div>
            </nav>)

}

export default TopMenuCa;

/*
 <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                */