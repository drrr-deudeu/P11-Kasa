import '../../styles/Article.css'

function toggleVisibility(el) {
    //console.log(el.currentTarget)

    const elt = document.getElementById("up_"+el.currentTarget.dataset.prefixindex)
    elt.classList.toggle("invisible")
    const eltToggle = document.getElementById("down_"+el.currentTarget.dataset.prefixindex)
    eltToggle.classList.toggle("invisible")
    const eltText = document.getElementById("text_"+el.currentTarget.dataset.prefixindex)
    eltText.classList.toggle("invisible")
}

function Article({title,text,prefix,index,cut=false}){
    return(<div className="article">
        <div className="article_title">
            <div><span>{title}</span></div>
            <button className="article_arrows" data-prefixindex={prefix+index} onClick={toggleVisibility}>
                <div id={"up_"+prefix+index} data-toggle={"down_"+prefix+index} data-prefixindex={prefix+index} className="closed"><img src="/assets/arrow_down.png" alt="open article"/></div>
                <div id={"down_"+prefix+index} data-toggle={"up_"+prefix+index} data-prefixindex={prefix+index} className="opened invisible"><img src="/assets/arrow_up.png" alt="close article"/></div>
            </button>
        </div>
        <div id={"text_"+prefix+index} className="article_text invisible">{cut?text.map((line,ind) =>(<p key={'cut_'+ind}>{line}</p>)):<p>{text}</p>}</div>
    </div>)
}

export default Article