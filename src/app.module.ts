import { Module } from '@nestjs/common'
import { TodoApiModule } from './todo-api/todo-api.module'
import { MongooseModule, MongooseModuleAsyncOptions } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'
import config from './util/config'
@Module({
	imports: [
		TodoApiModule,
		// Config Module Root import
		ConfigModule.forRoot({
			isGlobal: true,
			load: [config],
		}),
		// mongoose Module import
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) =>
				({
					uri: configService.get('DB'),
					useNewUrlParser: true,
					useCreateIndex: true,
					useUnifiedTopology: true,
					connectTimeoutMS: 3000,
					serverSelectionTimeoutMS: 18000,
					useFindAndModify: false,
				} as MongooseModuleAsyncOptions),
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
