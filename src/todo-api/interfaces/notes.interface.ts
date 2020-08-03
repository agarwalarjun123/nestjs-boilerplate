import { Document } from 'mongoose'

export interface Note extends Document {
	note: string
	modified_date?: Date
	created_date?: Date
	created_by?: string
	meta_data?: any
}
