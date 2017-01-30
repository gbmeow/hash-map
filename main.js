var hamt = require('hamt');
var h = hamt.empty.set('key', 'value');

var map = {
    root: {},
    empty: {
        
    }
}


function Empty() {
    this.root = {};
    this.order = 0;
}

var d = new Empty();

Empty.prototype.setA = function( key, val ) {
    this.root[key] = val;
    this.root[key].order = ++this.order;
    return this;
}

Empty.prototype.getA = function( key  ) {
    return this.root[key];
}

Empty.prototype.hasA = function( key  ) {
    
    for ( var i in Object.keys( this.root ) ) {
        if( key === Object.keys( this.root )[i] ){
            return true;
        }
    }
    return false;
}

Empty.prototype.entriesA = function( key  ) {
    var allKeys = Object.keys( this.root );
    var iteratorArray = [];
    for ( var i in Object.keys( this.root ) ) {
        iteratorArray.push( {key: Object.keys( this.root )[i], 
            val: this.root[Object.keys( this.root )[i]]  });
    }

    return iteratorArray;
}

function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var a = d.setA('tennis', 'GB');
//console.log( a ) 
var c = d.setA('tennis', 'GBsss');
var c = d.setA('francia', 'GBsss');
//console.log( d.hasA('tennisss') ) 

var it = makeIterator( d.entriesA() )
console.log( it.next() )
console.log( it.next() )







