// let telNum = prompt("введите свой номер из 9 значений по типу 777777777")
//
// const hideNum = (arg)=>{
//     if(arg.length==9){
//         return "+996"+arg.slice(0 , -2)+"**"
//     }else{
//         return "повторите попытку"
//     }
// }
//
// console.log(hideNum(telNum))

let sentence = prompt('введите предложение')
const revSent =(arg)=>{
    let answer = []
    for (let i of arg){
        answer.unshift(i)
    }
    return answer.join("")
}


console.log(revSent(sentence))

