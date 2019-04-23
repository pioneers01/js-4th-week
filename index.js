//测试宝箱类名更换
// function y(){
//     document.getElementsByClassName("box")[0].classList.remove("box1");
//     document.getElementsByClassName("box")[0].classList.add("first-op");
// }
// var x=setTimeout(
//     y,1000
// );
// clearTimeout("x");
var go=document.getElementsByClassName("go-one");
var num=document.getElementsByClassName("num");
var numDone=document.getElementsByClassName("num-done");
var target=document.getElementsByClassName("money-target");
var imgDone=document.getElementsByClassName("done");
var go=document.getElementsByClassName("go-one");
var barLength=document.getElementsByClassName("bar-length");
var loadedBar=document.getElementsByClassName("loaded-bar");
var barNum=document.getElementsByClassName("bar-num");
var boxShow=document.getElementsByClassName("box");
var LenArr=[[5,0],[15,193],[20,0],[30,420],[35,470],[45,530]]
var LenArr = new Array(2);
    LenArr[5] = 25.5;  
    LenArr[15] = 193;
    LenArr[20] = 309.75;
    LenArr[30] = 430;
    LenArr[35] = 470;
    LenArr[45] = 540;
    LenArr[50] = 592.5;
for(var i=0;i<go.length;i++){
    go[i].index=i;
    go[i].addEventListener("click",bingo);
};
function bingo(){
    var aN=prompt("请输入投资金额", "");
    num[this.index].innerHTML=Number(aN)+Number(num[this.index].innerHTML);
    numDone[this.index].innerHTML=num[this.index].innerHTML;
    if(Number(numDone[this.index].innerHTML)>=Number(target[this.index].innerHTML)){
        go[this.index].value="已完成";
        imgDone[this.index].classList.add("money-done");
        go[this.index].removeEventListener("click",bingo);
        barNum[0].innerHTML=Number(barLength[this.index].innerHTML)+Number(barNum[0].innerHTML);
        var x=barNum[0].innerHTML;
        loadedBar[0].style.width=LenArr[Number(barNum[0].innerHTML)]/75+'rem';
        if(x>=10&x<20){
            loadedBar[0].classList.remove("loaded-bar-none");
            boxShow[0].classList.remove("box1");
            boxShow[0].classList.add("first-op");
        }
        else if(x>=20&x<50){
            loadedBar[0].classList.remove("loaded-bar-none");
            boxShow[0].classList.remove("box1");
            boxShow[0].classList.add("first-op");
            boxShow[1].classList.remove("box2");
            boxShow[1].classList.add("second-op");
        }
        else if(x==50){
            loadedBar[0].classList.remove("loaded-bar-none");
            boxShow[0].classList.remove("box1");
            boxShow[0].classList.add("first-op");
            boxShow[1].classList.remove("box2");
            boxShow[1].classList.add("second-op");
            boxShow[2].classList.remove("box3");
            boxShow[2].classList.add("third-op");
        }
    };
};
