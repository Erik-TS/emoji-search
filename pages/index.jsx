//File emojiList.json from https://github.com/ahfarmer/emoji-search

import search from '../lib/searchEngine'
import Result from './result'
import {useState} from 'react'

export default function(props){

    const [result, setResult] = useState(<Result list={[]} />)

    return(
        <>
            <div className='search-form'>
                <div className='form-container'>
                    <input className={'inputSearch'} type={'text'} placeholder={'Ex: grinning'} />
                    <input type={'button'} value={'Search'} onClick={()=>{
                        let userInput = document.querySelector('.inputSearch')
                        let res = search(userInput.value)
                        setResult(<Result list={res} />)
                    }} />
                    <p>Click on items below to copy to clipboard</p>
                </div>
            </div>
            {result}
        </>
    )
}