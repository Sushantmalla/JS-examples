const person = 'Mike';
const age = 28;

function myTag(strings, personExp, ageExp){
    console.log(strings);

    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    const ageStr = ageExp > 99 ? `centurion`: `youngster`;

    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age} .`;

console.log(output);
