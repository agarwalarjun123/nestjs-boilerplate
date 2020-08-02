import { Injectable } from "@nestjs/common"
import { Note } from "./interfaces/notes.interface"
@Injectable()
export class TodoService {
	private notes: Note[] = []

	postNotes(note: Note): any {
		this.notes.push(note)
	}
	getNotes(): Note[] {
		return this.notes
	}
}
