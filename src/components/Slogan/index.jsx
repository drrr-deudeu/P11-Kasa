import '../../styles/Slogan.css'
function Slogan({isHome}){
    return(<section className="slogan_container">
        { isHome ? <section className="slogan">
            <div className="image">
                <img src='/assets/Paysage.png' alt='Chez Kasa'/>
            </div>
            <div className="text">
                <span>Chez vous, partout et ailleurs</span>
            </div>
    </section>:<section className='slogan2'><div></div></section>}
    </section>)
    // if(isHome){
    //     return(
    //         <section className="slogan">
    //             <div className="image">
    //                 <img src='/assets/Paysage.png' alt='Chez Kasa'/>
    //             </div>
    //             <div className="text">
    //                 <span>Chez vous, partout et ailleurs</span>
    //             </div>
    //         </section>
    //     )
    // }
    // else{
    //     return(<section className='slogan2'><div></div></section>)
    // }
}

export default Slogan;