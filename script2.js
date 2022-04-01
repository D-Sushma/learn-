
let header = document.querySelector('.header')
console.log('header');

// let parent = document.querySelector('.parent')
// console.log('parent');

let content = document.querySelector('.content')
console.log('parent is selected',content);

//1.
header.addEventListener('click', doSomething)

function doSomething(){
    console.log('function call')
    // parent.innerHTML ='<div> This is Something</div>'
     content.innerHTML = '<div> This is Something</div>'
}

//2.
header.addEventListener('mouseenter', mouseEnter)
function mouseEnter(){
    console.log('function call')
    content.innerHTML = '<div> This is Something</div>'
}

header.addEventListener('mouseleave', LeaveContent)
function LeaveContent(){
    console.log('function call')
    content.innerHTML = ''
}


// dialog box type
header.addEventListener('mouseenter', makeBox)
function makeBox(){
    content.innerHTML = '<div class="dialog"><input type="text"></div>'
}


// for same styling-->useloop--> bina event k krne pr direct apply hota h

let sample = document.querySelectorAll(".sample")
console.log('for checking purpose',sample);

for(let i=0; i<sample.length; i++){
    console.log(' cala');
    sample[i].style.background ='red'

    // ye niche wala func  bad me pdhenge
    sample[i].addEventListener('click', () =>{
        alert('hii')
    })

}
