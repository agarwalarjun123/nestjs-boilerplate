import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { handlers } from './util/morgan'
import * as helmet from 'helmet'
async function bootstrap() {
	// create NestFactory Instance
	const app = await NestFactory.create(AppModule, { cors: true })
	// setup global middlewares
	app.use(helmet())
	app.use(handlers.errorHandler, handlers.successHandler)

	const options = new DocumentBuilder()
		.setTitle('todo-api')
		.setDescription('API for todo-module')
		.setVersion('0.1.0')
		// You can add new tags for your controllers here
		.build()
	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('api', app, document)
	// listen on port 3000
	await app.listen(app.get('ConfigService').get('PORT'))
	Logger.log(`server running on port ${await app.getUrl()}`)
}
bootstrap()
