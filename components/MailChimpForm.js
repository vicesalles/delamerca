import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"

const mailFormANimation = {

    hidden:{
        y:100,
        opacity:0
        
    },
    visible:{
        y:0,
        opacity:1,
        delay: 1,
        transition:{
            ease:"easeInOut",        
        }
        
    },
    exit:{
        opacity:0,
        y:100,
    }

}

function MailChimpForm(props){

    const mailForm = useRef();
    const {label} = props;

    useEffect(() => {
      return () => {
        mailForm.current.focus();
      };
    }, [])

    return(<motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mailFormANimation}
            >
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>    
            <div id="mc_embed_signup">
                <form action="https://delamerca.us17.list-manage.com/subscribe/post?u=87088ae9ce581bbe27ff07968&amp;id=f91bfa2e4b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                <label for="mce-EMAIL">{label}</label>
                <input ref={mailForm} type="email" autoFocus="true" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email" required/>   
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                    </div>
                </form>
            </div>
            </motion.div>)


}

MailChimpForm.propTypes = {
    label: PropTypes.string.isRequired
  };

export default MailChimpForm;