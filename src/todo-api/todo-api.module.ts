import { Module, DynamicModule } from '@nestjs/common'
import { TODOApiController } from './todo-api.controller'
import { TodoService } from './todo-api.service'
import { ModelModule } from '../model/model.module'
import { TerminusModule } from '@nestjs/terminus'
@Module({
	controllers: [TODOApiController],
	providers: [TodoService],
	imports: [ModelModule, TerminusModule],
})
export class TodoApiModule {
	static forRoot(): DynamicModule {
		/**
		 * Dynamic Module logic
		 */
		return {
			module: TodoApiModule,
		}
	}
}
