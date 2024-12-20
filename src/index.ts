import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username:string,password:string,age:number,city:string){
    const res = await prisma.user.create({
        data:{
            username,
            password,
            age,
            city
        }
    })
}

async function getUserDetails(username:string){
    const res = await prisma.user.findMany({
        where:{
            username
        }
    })
    console.log(res);
    
}

// getUserDetails("LikhithMar14")
async function updateUserDetails(username:string){
    const res = await prisma.user.updateMany({
        where:{
            username
        },
        data:{
            city:"Zurich"
        }
    })
}

// insertUser("dummy","dummy ke paas kya hi password hoga",21,"neerukonda")
// updateUserDetails("LikhithMar14")
// getUserDetails("LikhithMar14")

async function deleteUserDetails(username:string){
    const res = await prisma.user.delete({
        where:{
            username
        }
    })
}
deleteUserDetails("dummy")

