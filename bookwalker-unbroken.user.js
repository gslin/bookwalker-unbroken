// ==UserScript==
// @name         Bookwalker Unbroken
// @namespace    https://github.com/gslin/bookwalker-unbroken
// @version      0.20200729.0
// @description  Unbreak bookwalker due to uBlock Origin
// @author       Gea-Suan Lin <gslin@gslin.org>
// @match        https://www.bookwalker.com.tw/*
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    window.Gtag = class {
        gtagData() {
        }
    };
})();
