console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premMovie = async () =>{

const promisewifebringingticks = new Promise((resolve, reject)=>{
        setTimeout(()=>{
resolve('ticket');
    },3000)
});

const getPopcorn = new Promise((resolve, reject)=>(`popcorn`))

 let ticket = await promisewifebringingticks;
 console.log('wife: i have the tics');
 console.log('husband: we should go in');
 console.log('wife: no i am hungry');
 let popcorn = await getPopcorn;

 console.log('husband: i got some popcorn');
 console.log('wife: wife should go in ');
 console.log('husband: i need butter on my popcorn');
 
 let butter = await addButter;
 console.log(`husband: i got some ${butter}`);
 console.log(`husband: anything else darling?`);
 console.log('wife: lets go we are getting late');
 console.log('husband: Thank you for the reminder *grins');

 return ticket;
}


// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => 'premMovie';
// preMovie().then((m)=> console.log(m));




// console.log('person4: shows ticket');
// console.log('person5: shows ticket');