// ==UserScript==
// @name         2018GmailFixer
// @namespace    http://thinking.studio/
// @version      0.1
// @description  fix the fugly! My attempt to fix compact view on the new GMail which is nothing short of offensive.
// @author       Joe Cincotta
// @match        https://mail.google.com/mail/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
#ibp-main {
display: none;
}

.L3{
border-radius:0px !important;
-webkit-border-radius:0px !important;
}

.aKh{
display:none;
}

.z0>.L3::before{
background: none !important;
width:25px !important;
height:0px !important;
margin-right:0px !important;
padding: 0px !important;
}

.J-KU-Jg-K9.aAA .aAy::after{
height:0px !important;

}

.gm-sticky-popin-bars{
bottom:0px !important;
}


` );


