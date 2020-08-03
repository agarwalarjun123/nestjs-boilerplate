import { Controller, Post, Body, Get, UsePipes } from '@nestjs/common'
import { TodoService } from './todo-api.service'
import { Note } from './todo-api.interface'
import { JoiValidationPipe } from '../util/validator-schema'
import { schema } from './todo-api.schema'
import { CreateNoteDTO } from './todo-api.dto'
import {
	HealthCheck,
	MongooseHealthIndicator,
	HealthCheckService,
} from '@nestjs/terminus'
@Controller('todo')
export class TODOApiController {
	constructor(
		private noteService: TodoService,
		private health: HealthCheckService,
		private db: MongooseHealthIndicator,
	) {}
	@Post()
	@UsePipes(new JoiValidationPipe(schema))
	async create(@Body() note: CreateNoteDTO): Promise<any> {
		return await this.noteService.postNotes(note)
	}
	@Get()
	async getList(): Promise<Note[]> {
		return await this.noteService.getNotes()
	}

	@Get('/health')
	@HealthCheck()
	check() {
		return this.health.check([
			() => this.db.pingCheck('mongodb', { timeout: 1500 }),
		])
	}
}
