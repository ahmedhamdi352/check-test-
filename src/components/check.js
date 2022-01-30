import React, { useState } from 'react';
import Reaptcha from 'reaptcha';
import Captcha from "react-numeric-captcha";
import { useNavigate } from "react-router-dom";

import "./captcha.css";

const CheckOne = () => {
    const navigate = useNavigate();
    const [verifiedNumber, setVerifiedNumber]=useState(false);
    const [verified, setVerified]=useState(false);

    return (
      <form>
      <Captcha onChange={status => setVerifiedNumber(status)}/>
      <Reaptcha sitekey="6LcIEVwUAAAAAEnR50W15N0XjSGG8vOTVgVCfqU6" onVerify={()=>setVerified(true)} />
      <button disabled={!verified || !verifiedNumber} onClick={()=>navigate('welcome')}>
        Submit
      </button>
    </form>
    );
}
export default CheckOne;