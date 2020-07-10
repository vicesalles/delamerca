import Link from 'next/link';

function TopMenu(){

    return(<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item s-title is-1 tipodelamerca">
                        <b>DLM</b>
                    </a>
                </Link>    
                <Link href="/es/barajas">
                    <a className="navbar-item">
                        Barajas
                    </a>
                </Link> 
                <Link href="/credits">
                    <a className="navbar-item">
                        Créditos
                    </a>
                </Link>
                </div>
            </nav>)

}

export default TopMenu;

/*
 <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                */