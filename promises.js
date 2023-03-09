const posts = [


    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body:'this is post tow'}
];


function getposts(){
    setTimeout(() => {
let output = '';

posts.forEach((post, index) => {
    output += `<li>${post.title} </li>`;
});
document.body.innerHTML = output;
    },3000)
}

function createPost(post){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
        posts.push(post);
const error = false;
if(!error) {
    resolve();
}else{
    reject('Error: Something went wrong')
}

    },2000)
    });
}
// createPost({title: 'post three', body:'this is post three'})
// .then(getposts)
// .catch(err=>console.log(err));

function updateLastUserActivityTime(){
    Promise.all([createPost, updateLastUserActivityTime])


}
const promise1 = Promise.resolve('Hello world!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>
    setTimeout(resolve, 2000, 'Goodbye')
    
    );
    // const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    Promise.all([promise1, promise2, promise3]).then(values => console.log(values))
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])





