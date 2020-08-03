import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Note } from './todo-api.interface'
import { InjectModel } from '@nestjs/mongoose'
import { NoteModel, ITodoService } from './todo-api.interface'

@Injectable()
export class TodoService implements ITodoService {
	constructor(@InjectModel('todo') private todoModel: Model<NoteModel>) {}
	async postNotes(note: Note): Promise<any> {
		note = await new this.todoModel(note).save()
		return note
	}
	async getNotes(): Promise<Note[]> {
		const data = this.todoModel.find({})
		return data
	}
}
