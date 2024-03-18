import { PrismaClient } from '@prisma/client'

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}
