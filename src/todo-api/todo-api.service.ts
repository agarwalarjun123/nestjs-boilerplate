import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Note } from './interfaces/notes.interface'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class TodoService {
	constructor(@InjectModel('todo') private todoModel: Model<Note>) {}
	async postNotes(note: Note): Promise<any> {
		note = await new this.todoModel(note).save()
		return note
	}
	async getNotes(): Promise<Note[]> {
		const data = await this.todoModel.find({})
		return data
	}
}
