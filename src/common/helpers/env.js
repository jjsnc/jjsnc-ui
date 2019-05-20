
//ssr support 

export const inBrowser = typeof window !=='undefined';

export const ua = inBrowser && navigator.userAgent.toLocaleLowerCase();

export const isAndroid = ua && ua.indexOf('android')> 0;

