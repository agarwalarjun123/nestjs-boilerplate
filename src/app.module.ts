import { Module } from "@nestjs/common"
import { TodoApiModule } from "./todo-api/todo-api.module"
import { MongooseModule } from "@nestjs/mongoose"
@Module({
	imports: [
		TodoApiModule,
		MongooseModule.forRoot("mongodb://localhost:27017/test-nest-app"),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
