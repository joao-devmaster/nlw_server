import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


async function main() {
const user = await prisma.user.create({
    data: {
        name: "João Vitor",
        email: "joaovitor@email.com",
        avatarUrl: "https://avatars.githubusercontent.com/u/61596591?s=400&u=128749403b94e49abbac76a49b20ef9a539d68c2&v=4"
    }
})    

const pool =  await prisma.pool.create({
    data:{
        title: "bolão do jota",
        code: "bol10",
        ownerId: user.id,

        participants:{
            create:{
                userId: user.id
            }
        }
    }
})

await prisma.game.create({
    data:{
        date:"2022-11-02T12:00:00.201Z",
        firstTeamCountryCode:"DE",
        secondTeamCountryCode:"BR"
    }
})

await prisma.game.create({
    data:{
        date:"2022-11-03T12:00:00.201Z",
        firstTeamCountryCode:'BR',
        secondTeamCountryCode:'AR',
    }
})
}



main()