function feedback(num, input){
    let i = 0;
    let o = 0;
    String(input).split("").forEach((item, index)=>{
        if(String(num).indexOf(item) === index){
            i++;
        }
        else if(String(num).includes(item)){
            o++;
        }
    })
    return [i, o];
}

function is(array, num, numOfI){
    num = String(num).split("");
    array = array.filter((item) => {
        item = String(item).split("");
        let onPlace = 0;
        for(let i = 0; i < item.length; i++){
            num[i] === item[i] ? onPlace++ : onPlace;
        }
        if(onPlace == numOfI){
            //console.log(item);
            return true;
        }    
    });
    return array;
}

function os(array, num, numOfO){
    num = String(num).split("");
    array = array.filter((item) => {
        item = String(item).split("");
        let include = 0;
        for(let i = 0; i < item.length; i++){
            item.includes(num[i]) && num[i] !== item[i] ? include++ : include;
        }
        if(include == numOfO){
            //console.log(item);
            return true;
        }    
    });
    return array;
}

function hasDuplicates(num) {
    array = String(num).split("");
    return (new Set(array)).size !== array.length;
}

function pAdder(x){
    let p = document.createElement("p");
    p.innerHTML = x;
    text.appendChild(p);
}

let pool = [...Array(10000).keys()];
pool = pool.filter((x) => x > 1022 && !hasDuplicates(x));

let i = 0;
let o = 0;
let repeat = 1;
let inputI = document.getElementById("positionAndValue");
let inputO = document.getElementById("onlyValue");
let getValues = document.getElementById("submit");
let text = document.getElementById("game");

let number = pool[Math.floor(Math.random()*pool.length)];
pAdder(repeat + ") " + number);

getValues.addEventListener("click", function(){
    if(typeof(parseInt(inputI.value)) === "number" && typeof(parseInt(inputO.value)) === "number" && parseInt(inputI.value) >= 0 && parseInt(inputO.value) >= 0 && parseInt(inputI.value) + parseInt(inputO.value) <= 4){
        
        if(pool.length == 0){
            pAdder("i think there has been a mistake");
        }

        i = inputI.value;
        o = inputO.value;
        inputI.value = "";
        inputO.value = "";

        pAdder(`yerinde: ${i} yerinde dal: ${o}`);
        pAdder("___________");

        pool = is(pool, number, i);
        pool = os(pool, number, o);
        pool = pool.filter((item) => item != number);
        repeat++;
        
        if(i == 4){
            pAdder("i guessed, beach!");
        }
        else{
            number = pool[Math.floor(Math.random()*pool.length)];
            pAdder(repeat + ") " + number);
        }
    }
    else{
        inputI.value = "";
        inputO.value = "";
    }
});
