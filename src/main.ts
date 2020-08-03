import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { handlers } from './util/morgan'
import * as helmet from 'helmet'
async function bootstrap() {
	// create NestFactory Instance
	const app = await NestFactory.create(AppModule, { cors: true })
	app.use(helmet())
	app.use(handlers.errorHandler, handlers.successHandler)
	await app.listen(3000)
}
bootstrap()
