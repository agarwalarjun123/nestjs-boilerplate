import { Module } from '@nestjs/common'
import { TodoApiModule } from './todo-api/todo-api.module'
import { providers } from './util/providers'
@Module({
	imports: [TodoApiModule.forRoot(), ...providers],
})
export class AppModule {}
