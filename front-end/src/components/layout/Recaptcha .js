import React from 'react'
const Recaptcha = require('react-recaptcha');


function recaptcha () {
    const recaptchaLoaded=()=>{
        console.log("recaptcha Loaded")
    }
    const verifyCallback =()=>{
        console.log("verified");
    }
    // const [VerifiedState, setVerifiedState] = useState({varified: false});

  return (

     <Recaptcha
    sitekey="6LdzecAeAAAAADSF_xYgeDf1oYC6xX3FqLsphDFd"
    render="explicit"
    verifyCallback={verifyCallback}

    onloadCallback={recaptchaLoaded}
  />
  )
}

export default recaptcha 