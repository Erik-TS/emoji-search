export default function Result(props){
    
    return(
        <div className="result">
            <div className="result-list">
                {props.list.map((emoji, index) => {
                    return (
                        <div key={index} className="result-item">
                            <p className='result-title' onClick={ () => {
                                let e = document.getElementsByClassName('result-emoji ' + emoji.title)
                                navigator.clipboard.writeText(e[0].innerText)
                            }}>{emoji.title}</p>
                            <p className={'result-emoji ' + emoji.title} onClick={ element => {
                                let e = element.target.innerText
                                navigator.clipboard.writeText(e)
                            }}>{emoji.symbol}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}