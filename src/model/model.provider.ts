import { MongooseModule } from '@nestjs/mongoose'
import { todoSchema } from './todo-api.schema'
export const providers = [
	MongooseModule.forFeature([{ name: 'todo', schema: todoSchema }]),
]
