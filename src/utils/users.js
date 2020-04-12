const users=[]

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id,username,room})=>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return{
            error: 'Username is in use!'
        }
    }

    //Store User
    const user = {id, username,room}
    users.push(user)
    return {user}
}


const removeUser = (id)=>{
    const index = users.findIndex((user)=>{
        return user.id === id
    })
    if(index!=-1){
        return users.splice(index,1)[0]
    }

}

const getUser = (id)=>{
    const userData = users.find((user)=>{
        return user.id === id
    })
    return userData
}

const getUsersInRoom = (room)=>{
    return users.filter((user)=>{
        return user.room === room
    })
}


module.exports = {
    addUser, 
    removeUser, 
    getUser, 
    getUsersInRoom
}

// addUser({
//     id: 22,
//     username: 'Rohan',
//     room: 'Halo'
// })
// addUser({
//     id: 32,
//     username: 'Robin',
//     room: 'rob'
// })
// addUser({
//     id: 42,
//     username: 'Raj',
//     room: 'Halo'
// })


// // console.log(users)

// const res = addUser({
//     id:33,
//     username:'Raju',
//     room: 'rob'
// })


//console.log('Users are:  ',users)

// const removedUser = removeUser(22)
// console.log('Removed User data:  ',removedUser)
// console.log('Users after removing:  ',users)


// const userData = getUser(42)
// console.log('User data: ',userData)

// const userList = getUsersInRoom('ro')
// console.log(userList)