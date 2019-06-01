var initLoopLet = 0;
for(var initLoopVar=0; initLoopVar <10; initLoopVar++) {
    console.log(`--${initLoopVar}--`);
}
console.log({ initLoopVar });

// let initLoopLet = 5;
// for(let initLoopLet=0; initLoopLet <10; initLoopLet++) {
//     console.log(initLoopLet);
// }
// console.log(`---${initLoopLet}---`);

var a = [1, 2, 3, 4];
a.forEach(function(item){
    console.log({ item });
})

a.forEach(function(itemCommonFunc) {
    console.log({ itemCommonFunc })
})
// ES6
a.forEach(itemEs6 => console.log({ itemEs6 }))