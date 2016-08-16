
// function clearDisplay() {
//     let display = document.getElementById('display');
//     display.value = 0;
//     storedNum = '';
//     calculationFinished = true;
//     operation = operations.none;
// }
// let el = document.getElementById('overlayBtn');
// if(el){
//   el.addEventListener('click', false);
// }
// let  EinBtn = document.getElementById('1');
// if(EinBtn){
//     EinBtn.addEventListener('click', 1);
// }
//  let ZweiBtn = document.getElementById('2');
 
// if(ZweiBtn){
//   ZweiBtn.addEventListener('click', 2);
// }
// let  DreiBtn = document.getElementById('3');
// if(DreiBtn){
//     DreiBtn.addEventListener('click', 3);
// }
    
//  let  VierBtn = document.getElementById('4');
//     if(VierBtn){
//     VierBtn.addEventListener('click', 4);
// }
//  let  FunfBtn = document.getElementById('5');
//     if(FunfBtn){
//     FunfBtn.addEventListener('click', 5);
// }
//  let  SechsBtn = document.getElementById('6');
//     if(SechsBtn){
//     SechsBtn.addEventListener('click', 6);
// };
// let  SiebenBtn = document.getElementById('7');
//     if(SiebenBtn){
//     EinBtn.addEventListener('click', 7);
// }
//  let  AchtBtn = document.getElementById('8');
//     if(AchtBtn){
//     AchtBtn.addEventListener('click', 8);
// }
//  let  NeunBtn = document.getElementById('9');
//     if(NeunBtn){
//     NeunBtn.addEventListener('click', 9);
// }
//  let  NullBtn = document.getElementById('0');
//     if(NullBtn){
//     NullBtn.addEventListener('click', 0);
// }
//  let  ClearBtn = document.getElementById('CL');
//     if(ClearBtn){
//     ClearBtn.addEventListener('click', '');
// }
//  let  AddBtn = document.getElementById('add');
//     if(AddBtn){
//     AddBtn.addEventListener('click', '+');
// }
//  let  SubtractBtn = document.getElementById('-');
//     if(SubtractBtn){
//     SubtractBtn.addEventListener('click', '-');
// }
//     let  MultiplyBtn = document.getElementById('*');
//     if(MultiplyBtn){
//     MultiplyBtn.addEventListener('click', x );
// }

// let  DivideBtn = document.getElementById('/');
//     if(DivideBtn){
//     DivideBtn.addEventListener('click', '/');
// }
//     let  DecimalBtn = document.getElementById('.');
//     if(DecimalBtn){
//     DecimalBtn.addEventListener('click', '.');
// }



function addition() {

}


window.addEventListener('load', function (){
    let first = document.getelementById ('firstVal')
    let second = document.getelementById ('secondVal');
    let answer = document.getelementById ('answer');
    
    let plusBtn = document.getElementById('addition');
    plusBtn.addEventListener('click', function()) {
        console.log('good day');
        let sum = parseInt(first.value) + parseInt(second.value);
        answer.textContent = 'Answer' + sum;
}
}