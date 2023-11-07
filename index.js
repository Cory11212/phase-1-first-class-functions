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
    return function(){
        console.log('hello')
    }
}