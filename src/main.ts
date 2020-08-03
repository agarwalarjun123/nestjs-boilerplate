import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
async function bootstrap() {
	// create NestFactory Instance
	const app = await NestFactory.create(AppModule)
	await app.listen(3000)
}
bootstrap()
