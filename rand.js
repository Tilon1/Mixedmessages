function randnum(max) {
    return Math.floor(Math.random() * max);
  }
  let nouns= ['hunting ground','lettuce','friendly grandma','french chef','candlestick maker']
  let adjetives=['adulterous','alcoholic','angry','arrogant','at-the-ready','blithering','confused']
 console.log(`it was a ${adjetives[randnum(adjetives.length)]}, cold November day.`);


const story = {
    career: ['Data scientist','Software tester','Web developer','Systems analyst','Full-stack developer'],
    color: ['blue','green','purple','orange','pink','gold','silver'],
    age: ['12', '43', '66', '75', '21', '99', '35', '56', '63', '81'],
    food: ['pizza', 'tangerines', 'soup', 'chicken', 'burger', 'steak']
};

let sentence = [];
for(let words in story){
let num=randnum(story[words].length);
switch(words){
case 'career':
    sentence.push(`you will be a ${story[words][num]}.`)
    break;
case 'color':
    sentence.push(`your favorite color is ${story[words][num]}.`)
    break;
case 'age':
    sentence.push(`you are ${story[words][num]} years old`)
    break;
case 'food':
    sentence.push(`your favorite food is ${story[words[num]]}.`)
    break
default:
    sentence.push('Error!')
}
}
sentence.join('.');
console.log(sentence);


