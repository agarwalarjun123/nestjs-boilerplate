import { Document } from 'mongoose'
export interface Note {
	note: string
	modified_date?: Date
	created_date?: Date
	created_by?: string
	meta_data?: any
}
export interface NoteModel extends Note, Document {}

export interface ITodoService {
	postNotes(note: Note): Promise<Note>
	getNotes(): Promise<Note[]>
}
