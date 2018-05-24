// ==UserScript==
// @name         2018GmailFixer
// @namespace    https://thinking.studio/
// @version      0.1
// @description  Fix the Fugly! My attempt to fix compact view on the new GMail which is nothing short of offensive.
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

.z0>.L3::before{
background: none !important;
width:25px !important;
height:0px !important;
margin-right:0px !important;
padding: 0px !important;
}

` );
