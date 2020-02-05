var myGlobal = 10;
function fun1(){
      oopsGlobal = 5;
}
/*
    Da je u ovoj funkciji iznad ova varijabla oopsGlobal bila inicijalizovana uz VAR
    tada ne bi bila dostupna u globalnom skoupu i ne bi se dole videla sto pravi gresku
*/
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();   