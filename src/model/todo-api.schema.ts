/* eslint-disable @typescript-eslint/camelcase */
import * as mongoose from "mongoose"
export const todoSchema = new mongoose.Schema(
	{
		meta_data: {
			type: mongoose.Schema.Types.Mixed,
		},
		note: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	},
)
