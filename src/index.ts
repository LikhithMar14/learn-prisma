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

getUserDetails("LikhithMar14")