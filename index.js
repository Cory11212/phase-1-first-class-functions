function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    function gogo(x){
        console.log(x)
    }

    return gogo
}

function returnsAnAnonymousFunction(){
    const myne = function(){
        console.log('hello')
    }
    return myne
}