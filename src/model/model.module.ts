import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { todoSchema } from "./todo-api.schema"

@Module({
	controllers: [],
	providers: [],
	imports: [
		MongooseModule.forFeature([{ name: "todo", schema: todoSchema }]),
	],
	exports: [
		MongooseModule.forFeature([{ name: "todo", schema: todoSchema }]),
	],
})
export class ModelModule {}
