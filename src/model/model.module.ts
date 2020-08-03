import { Module, Global } from '@nestjs/common'
import { providers } from './model.provider'

@Global()
@Module({
	controllers: [],
	providers: [],
	imports: [...providers],
	exports: [...providers],
})
export class ModelModule {}
