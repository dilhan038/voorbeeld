//soorten variabelen
var testVar = 7;
const testConst = 3;
let testlet;

//wiskundige operatoren
var testSom = testConst+testVar;
var testVerschil= testConst-testVar;
var testProduct= testConst*testVar;
var testquotient= testConst/testVar;

//logica (als-dan-anders)
if(testSom > testVerschil){   
    //console.log("waar");
}

else if(testConst<testVar) {
    //console.log("else if");
}
else{
    //console.log("else");
}
//herhaallussen,loops,repeat
for(var i=0;i<15;i++){
    //console.log(i);
}
for(var i =10; i > -1; i--){
    //console.log(i)
}
var counter=0;
while(counter < testVar) {
     //console.log(counter);
    counter++;
}


//logische operatoren
if(testVar === 7){
    //console.log("testVar is 7");
}
if(testVar != 6){
    //console.log("testVar is niet gelijk aan 6");
}
if(testConst != 3 && testVar === 7){
    //console.log ("testconst is 3 EN testVar")
   }
if(testConst === 3 || TestProduct !=5 ){
    console.log("testconst is 3 Of testProduct is niet 5")
}
