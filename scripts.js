const answerArray = ["in", "in", "on", "of", "of"];

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    for (var i=1; i<answerArray.length;i++) {
    document.getElementById("tick" + i).style.display = "none";
    document.getElementById("cross" + i).style.display = "none";
    };
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.style.color = "black";
    ev.target.textContent="";
    ev.target.appendChild(document.getElementById(data));
  }

function checkEm () {
    for (var i=1; i<answerArray.length;i++) {
        if (document.getElementById("span" + i).textContent == answerArray[i]){
            console.log("Brillpants")
            document.getElementById("tick" + i).style.display = "inline";
        } else {
            document.getElementById("cross" + i).style.display = "inline";
            console.log ("Buggeration");
        }
    }
}
  