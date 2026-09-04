
//hoisting
getRandomInt(5, 10);

function getRandomInt(min, max){
return Math.floor(Math.random()*(max-min)+min+1);
}

const getRandomIntAnonymousFunction = function (min, max){
 return Math.floor(Math.random()*(max-min)+min+1);
};

const getRandomIntArrowFunction = (min, max)=>{
 return Math.floor(Math.random()*(max-min+1)+min);
};

                            //string,function
function genericActionPerformer(name, action){
    return action(name);
}

function playingGuitarAction(name){
    return `${name} likes to play guitar`;
}

const watchingMoviesAction = (name) => {
    return `${name} likes watching movies`
};

console.log(genericActionPerformer("Elias", playingGuitarAction));

//Elias, playing guitar
/* Assignment
    using genericActionPerformer, make it say Elias likes to play guitar
*/

console.log(genericActionPerformer("Magnus", watchingMoviesAction));

//Magnus, watch movies
/*
    Create arrow function called watchingMoviesAction
*/

//callback function

// Jacop, Sail
/* Assignment 
    Do same as above as a oneliner
*/

console.log(genericActionPerformer("jacop", (name)=> `${name} likes Sailing`));

