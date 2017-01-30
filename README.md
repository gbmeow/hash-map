# hash-map

https://github.com/mattbierner/hamt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


## Features 
[]functions for updating and querying the map. 
[]composition of functions 
[]custom hash values
[]object that contains an array of [key, value] for each element in the Map object in insertion order.

## API
[] get
[] set 
[] has



## NEXT
//todo NEXT: is this useful for data strcutures that have 
    //1) hash references 

## example 

Before
```
a {
    b: 1
}

d [ {o: 10}, {b: 1}]

```

when 

a.set( 'b' , 10 )

```
a {
    b: 10
}

d [ {o: 10}, {b: 10}]

```
