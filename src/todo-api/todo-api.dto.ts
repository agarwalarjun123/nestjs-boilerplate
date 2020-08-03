import { Note } from './todo-api.interface'

export class CreateNoteDTO implements Note {
	note: string
	meta_data: { [key: string]: string }
}
