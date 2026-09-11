/* let browserVersion=130 */

function browser(browserVersion) {//parameter
    switch (browserVersion) {
    case 160:
        console.log("edge browser");
        break;
    case 140:
        console.log("chrome browser");
        break;  
    case 120:
        console.log("firefox browser");
        break;

    default:
        console.log("invalid browser");
        break;
}
}

browser(110)//argument
browser(160)//argument
browser(140)//argument
browser(120)//argument