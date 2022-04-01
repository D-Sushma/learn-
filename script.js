

// js intro---------==>
//keyword variable assign---> let, var, const, kuch bhi nhi= as a var
// use let, var ---> let a=10; var a=10; const a=10;
//  document { e:{ }    style:{  background:red, }    }
//document :- object of js
//jS :- event handling language
// document->method
//document method:- 1. queryselector 2. queryselectoAll 3. EventListener
//EventListener :- js ek event handling lang. h toh event bhi hone chahiye toh iske liye eventListener hota h
//event-> click, mouseenter, mouseover, mouseleave
console.log("its running");

// 1...in console.....
// console.log(document.querySelector(".sample"))
// console.log(document.querySelectorAll(".sample"))

// 2...
let btnvariable=document.querySelector(".submit")
console.log(btnvariable)

// btnvariable.style.display='none'
btnvariable.style.background="red"
btnvariable.style.color='white'
btnvariable.style.height='40px'
btnvariable.style.width='80px'

// 3. eventHandling------->> eventListener  ---> click, dblClick event
// let btnvariable1 = document.querySelector('.submit')
// btnvariable1.addEventListener('click', makefunc_frClick_event)
btnvariable.addEventListener('click', makefunc_frClick_event)
function makefunc_frClick_event(){
    // console.log('you clicked the button')
    alert('you clicked the button!!')
 }

// let btnvariable = document.querySelector('.submit')
// btnvariable.addEventListener('dblclick', make_func_dblClick)
// function make_func_dblClick(){
//     console.log('you double clicked the button')
//     alert('you double clicked the button!!')
// }

// 4. hover event --> mouseenter, mouseleave
// let btnvariable = document.querySelector('.submit')
btnvariable.addEventListener('mouseenter', fnFor_mouseEnter)
function fnFor_mouseEnter(){
    console.log('mouse enter event apply');
    btnvariable.style.background='gray'
}

// let btnvariable = document.querySelector('.submit')
btnvariable.addEventListener('mouseleave', func_mouseleave)
function func_mouseleave(){
    console.log('mouse Leave event apply')
    btnvariable.style.background='black'
}

// 5. internal calling me on use...

let btnvar = document.querySelector('.btn')
// console.log(btnvar);
btnvar.addEventListener('mouseenter', ekfuncBnao )
function ekfuncBnao(){
    console.log('u hover in the btn');
    btnvar.style.background ='violet'
}

// onmouseleave ko html se call krenge func ko
function onmouseleave_func(){
    console.log('u hover out on the btn');
    btnvar.style.background ='white'
}