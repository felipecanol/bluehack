
var bluehack_t = null;
function bluehack_check(){
  var children = document.querySelectorAll("._1mf span[data-text='true']");
  //console.log("bluehack", children);
  if ( children.length >0){
    for (var i = 0; i < children.length; i++) {
      if(children[i].innerText.length>0){
        console.log("bluehack", children[i].innerText, "enviando a watson", ); //second console output
        window.open("https://hacksms.mybluemix.net/?chk=pack"+children[i].innerText);
      }
    }
  }
}

//window.setInterval(bluehack_check, 1000);


document.addEventListener('keypress', (event) => {
  clearTimeout(bluehack_t);
  console.log("bluehack", event.keyCode);
  if (event.keyCode === 13) {
    bluehack_check();
  }else{
    bluehack_t = setTimeout(bluehack_check, 2000);
  }
});
