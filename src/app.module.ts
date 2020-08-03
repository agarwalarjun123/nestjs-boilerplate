import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { TodoApiModule } from './todo-api/todo-api.module'
import * as cors from 'cors'
import * as helmet from 'helmet'
import { handlers } from './util/morgan'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
	imports: [
		TodoApiModule,
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				uri: configService.get('DB'),
			}),
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				cors(),
				helmet(),
				handlers.errorHandler,
				handlers.successHandler,
			)
			.forRoutes('*')
	}
}
