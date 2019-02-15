function callBack(p) {
    console.log(`callback function invoked with parameter: ${p}`);
}

function callWithPotato(fun) {
    fun('potato');
}

callWithPotato(callBack);