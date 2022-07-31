import '../../styles/Footer.css'
function Footer(){
    if(document.getElementById("main_home")){
        console.log("MAIN_HOME?")
        return(<footer className="footer"><div><img src="/assets/KasaFooter.png" alt="Logo Kasa"/></div>
        <div><span>© 2020 Kasa. All rights reserved</span></div></footer>)
    }
    else{
        return(<footer className="footer footer_fix"><div><img src="/assets/KasaFooter.png" alt="Logo Kasa"/></div>
        <div><span>© 2020 Kasa. All rights reserved</span></div></footer>)
    }
}
export default Footer