import { Module } from "@nestjs/common"
import { TODOApiController } from "./todo-api.controller"
import { TodoService } from "./todo-api.service"
@Module({
	controllers: [TODOApiController],
	providers: [TodoService],
	imports: [],
})
export class TodoApiModule {}
