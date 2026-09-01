const chaiWithFriend = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const masalaChai = false
    if(masalaChai){
        resolve("Masala chai is very Strong")
    }else{
        reject("Friendship tut gayi")
    }
    }, 5000)
    
})

chaiWithFriend
.then((data)=>{console.log(data)})
.catch(error=>console.log(error))

