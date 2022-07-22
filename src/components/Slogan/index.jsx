import '../../styles/Slogan.css'
function Slogan({isHome}){
    return(<section>
        { isHome ? <section className="slogan"><div><span>Chez vous, partout et ailleurs</span></div>
    </section>:<section className='slogan2'><div></div></section>}
    </section>)
}

export default Slogan;