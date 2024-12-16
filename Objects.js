const user1 = {
    firstName : "Ranit",
    gender : "Male"
}

const user2 = {
    firstName : "Puja",
    gender : "Female"
}


const user = [{
    firstName : "Ranit",
    gender : "Male"
},
{
    firstName : "Puja",
    gender : "Female"
}]

for(let i=0;i<user.length;i++){
    if(user[i].gender == "Female"){
        console.log(user[i].firstName);
    }
}