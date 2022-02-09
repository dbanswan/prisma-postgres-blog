const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

  const post = await prisma.post.update(
    {
      where :{id : 1},
      data : {published : true},
    }
  );
  
  console.log(post);
  return;
await prisma.user.create({
  data:
  {
    name:'User2',
    email:'user2@gmail.com',
    posts:{
      create:{title:'First Post'}
    },
    profile:
    {
      create:{bio:'Lets learn Prisma'}
    },
  },
});



  const allUsers = await prisma.user.findMany(
    {
      include : {
        posts : true,
        profile:true,
      }
    }
  );
  console.dir(allUsers,{depth:Infinity});
}



main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })