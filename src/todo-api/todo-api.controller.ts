import { Controller, Post, Body, Get, UsePipes } from "@nestjs/common"
import { TodoService } from "./todo-api.service"
import { Note } from "./interfaces/notes.interface"
import { JoiValidationPipe } from "src/util/validator-schema"
import { schema } from "./todo-api.schema"
@Controller("todo")
export class TODOApiController {
	constructor(private noteService: TodoService) {}
	@Post()
	@UsePipes(new JoiValidationPipe(schema))
	create(@Body() note: Note): any {
		return this.noteService.postNotes(note)
	}
	@Get()
	getList(): any {
		return this.noteService.getNotes()
	}
}
