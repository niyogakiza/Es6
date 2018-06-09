const users = [
    {name: 'Samuela'},
    {name: "carine"},
    {name: "Mimi"}
];

let user = [];

for(let i = 0; i< users.length; i++){
    if(users[i].name === 'Samuela'){
        user = users[i];
    }
}
console.log(user);

let carine = users.find((user) => {
    return user.name === 'carine';
});
console.log(carine);

/*
* ===============================================*/

function Car(model) {
    this.model = model;

}
let cars = [
    new Car('Camaro'),
    new Car('Benz'),
    new Car('Jeep')
];
const foundCar = cars.find((car) => {
    return car.model === 'Camaro';
});
console.log(foundCar);

/*Another example*/

const posts = [
    { id: 1, title: 'Songs'},
    { id: 2, title: 'Cars'}
];

let comment = { id: 1, content: 'Awesome'};

function postMuchId(posts, comment) {
    return posts.find((post) =>{
        return post.id === comment.postId;
    });
}
postMuchId(posts, comment);

const usersAdmin = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

function adminTrue() {
    return  usersAdmin.find(function(user)  {
        return user.admin === true;
    });
}
let admin = adminTrue();
console.log(admin);

/*Example*/
const ladders = [
    {id: 1, height: 20},
    {id: 3, height: 25}
];

let foundLadder = ladders.find((ladder) => {
    return ladder.height === 25;
});

console.log(foundLadder);






