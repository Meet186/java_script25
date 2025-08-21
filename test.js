// create own map , filter , reduce method
Array.prototype.ownMap = function(callback){
     // MAP
    let result = [];
    for(let i=0; i<this.length; i++){
        result.push(callback(this[i],i,this));
    }
    return result;
}
Array.prototype.ownFilter = function(callback){ 
    // FILTER
    let result = [];
    for(let i=0; i<this.length; i++){
        if((callback(this[i],i,this))){
            result.push(this[i]);
        }
    }
    return result;
}
Array.prototype.ownReduce = function(callback,initialValue){ 
    // REDUCE
    let accumulator = initialValue;
    let startIndex = 0;
    if(accumulator === undefined){
        accumulator = this[0];
        startIndex = 1;
    }
    for(let i=startIndex; i<this.length; i++){
        accumulator = callback(accumulator,this[i]);     
    }
    return accumulator;
}













