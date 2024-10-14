function receivesAFunction(spy){
    return spy(5)
}

const spy= (num) =>{
 return num*num
}

function returnsANamedFunction(){
    return spy
}
function returnsAnAnonymousFunction(){
    return function(){
        return "bite"
    }

console.log(receivesAFunction(spy))
