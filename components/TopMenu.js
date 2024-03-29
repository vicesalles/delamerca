import Link from 'next/link';
import {useEffect,useState} from 'react';
import {useRouter} from 'next/router';

import TopMenuEn from './TopMenuEn';
import TopMenuCa from './TopMenuCa';
import TopMenuEs from './TopMenuEs';

function TopMenu(){

    const router = useRouter();
    const [lang, setlang] = useState("");  
        
    // Set Lang
    useEffect(() => {
        const langString = router.pathname.split("/")[1];
        setlang(langString);
    }, [])

    if(lang == "es"){
        return <TopMenuEs/>
    }else if( lang == "en"){
        return <TopMenuEn/>
    }else if(lang == "ca"){
        return <TopMenuCa/>
    }else{
        return(<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <Link href="/" passHref>
            <a className="navbar-item s-title is-1 tipodelamerca">
                <b>DLM</b>
            </a>
        </Link>           
        </div>
    </nav>)
    }

 

}

export default TopMenu;
