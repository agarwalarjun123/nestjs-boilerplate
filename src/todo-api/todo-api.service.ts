import { Injectable, HttpException, HttpStatus } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Note } from "./interfaces/notes.interface"

@Injectable()
export class TodoService {
	constructor(@InjectModel("todo") private todoModel: Model<Note>) {}
	async postNotes(note: Note): Promise<any> {
		if (!note.note) {
			throw new HttpException("note is required.", HttpStatus.BAD_REQUEST)
		}
		return note
	}
	async getNotes(): Promise<Note[]> {
		const data = await this.todoModel.find({})
		return data
	}
}
