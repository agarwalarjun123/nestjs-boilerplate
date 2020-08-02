import { Controller, Post, Body, Get } from "@nestjs/common"
import { TodoService } from "./todo-api.service"
import { Note } from "./interfaces/notes.interface"
@Controller("todo")
export class TODOApiController {
	constructor(private noteService: TodoService) {}
	@Post()
	create(@Body() body: Note): any {
		this.noteService.postNotes(body)
	}
	@Get()
	getList(): any {
		return this.noteService.getNotes()
	}
}
