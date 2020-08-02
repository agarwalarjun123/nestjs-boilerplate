import { Module } from "@nestjs/common"
import { TodoApiModule } from "./todo-api/todo-api.module"
@Module({
	imports: [TodoApiModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
