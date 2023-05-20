
function tamamlanmis(){
    var listItems=document.getElementsByTagName("li");

for( var x=0; x<listItems.length; x++){

    listItems[x].addEventListener("click",function(){
        this.classList.toggle("tamamlanmis")
    })
}
}
tamamlanmis();

//-----------------------------------------------

function silinenGorevler(){
    var silButtonlari = document.getElementsByTagName("i");

for(var i=0; i<silButtonlari.length;i++){
    silButtonlari[i].addEventListener("click",function(){

        var silinecek = this.parentElement.parentElement;
        silinecek.remove();
    })
}

}
silinenGorevler();

var gorev = document.getElementsByTagName("input")[0];

gorev.addEventListener("keypress",function(e){
    if(e.keyCode===13){

        var yeniNot = document.createElement("li");
        yeniNot.innerHTML=gorev.value;
        var yeniSpan = document.createElement("span");
        var yeniIcon = document.createElement("i");
        yeniIcon.setAttribute("class","fa fa-window-close")

        yeniSpan.insertBefore(yeniIcon,yeniSpan.firstChild);
        yeniNot.insertBefore(yeniSpan,yeniNot.firstChild);

        var gorevler = document.getElementsByTagName("ul")[0];

        gorevler.insertBefore(yeniNot,gorevler.lastChild);

        silinenGorevler();
        tamamlanmis();
    }
})



