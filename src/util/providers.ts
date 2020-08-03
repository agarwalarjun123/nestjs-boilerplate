import { ConfigModule, ConfigService } from '@nestjs/config'
import config from './config'
import { MongooseModule, MongooseModuleAsyncOptions } from '@nestjs/mongoose'
export const providers = [
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
]
