import "../../styles/Footer.css"
function Footer() {
  return (
    <footer className='footer'>
      <div>
        <img src='/assets/KasaFooter.png' alt='Logo Kasa' />
      </div>
      <div>
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  )

  // Footer fixe
  // return(<footer className="footer footer_fix"><div><img src="/assets/KasaFooter.png" alt="Logo Kasa"/></div>
  // <div><span>© 2020 Kasa. All rights reserved</span></div></footer>)
}
export default Footer
