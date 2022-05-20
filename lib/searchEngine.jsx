import * as emogo from '../emojiList.json'
const emojiList = Array.from(emogo)

function getEmojiResult(userInput){
    let output = []
    emojiList.map( emoji => {
        if(emoji.title.toLowerCase() === userInput.toLowerCase() || emoji.symbol === userInput) output.push(emoji)
        else getByKeyword(emoji.keywords, userInput) && output.push(emoji)
    })
    
    return output
}

function getByKeyword(keywordsString, userInput){
    let keywordsArr = keywordsString.split(' ')
    for(let i = 0; i < keywordsArr.length; i++){
        if( keywordsArr[i].toLowerCase() === userInput.toLowerCase() ) return true
    }
    return false
}

export default function search(params){
    let output = getEmojiResult(params)
    return output
}