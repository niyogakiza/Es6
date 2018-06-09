/*
* filter
* */

const products = [
    {name: 'Orange', type: 'fruit', quantity: 20, price: 100},
    {name: 'Banana', type: 'fruit', quantity: 20, price: 80},
    {name: 'Steak',  type: 'Beef-Meet', quantity: 40, price: 90},
    {name: 'Cabbage', type: 'Vegetables', quantity: 10, price: 150},
    {name: 'Peas',    type: 'Vegetables', quantity: 30, price: 100}
];

let fruitStore = products.filter((product) => {
       return product.type === 'fruit';
});
let vegetableStore =  products.filter((product) => {
    return product.type === 'Vegetables';
});

let meetStore = products.filter((product) => {
    return product.type === 'Beef-Meet';
});

console.log(fruitStore);

console.log(vegetableStore);

console.log(meetStore);

let fruitQuantity = products.filter((product) =>{
    return product.quantity === 20 ? product.price : null;
});
console.log(fruitQuantity);

let filteredProducts = products.filter((product) => {
    return product.type === 'Vegetables'
        && product.quantity > 0
        && product.price >= 100
});
console.log(filteredProducts);

/*
* Filter post with an associated ID
* */

const post = { id: 4, title: 'New Post'};
const comments = [
    {postId: 4, content: 'Awesome post'},
    {postId: 3, content: 'It was perfect'},
    {postId: 4, content: 'Oh Awful!!!!'}
];

function commentsForPost(post, comments) {
    return comments.filter((comment) => {
        return comment.postId === post.id
    })
}
let filteredPost = commentsForPost(post, comments);
console.log(filteredPost);
