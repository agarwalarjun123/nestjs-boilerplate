import { Module } from "@nestjs/common"
import { TODOApiController } from "./todo-api.controller"
import { TodoService } from "./todo-api.service"
import { ModelModule } from "../model/model.module"
@Module({
	controllers: [TODOApiController],
	providers: [TodoService],
	imports: [ModelModule],
})
export class TodoApiModule {}
