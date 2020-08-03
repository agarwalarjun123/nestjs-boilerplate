import * as morgan from 'morgan'
import { Logger } from '@nestjs/common'

export const handlers = {
	successHandler: morgan('combined', {
		skip: (_req, res) => res.statusCode >= 400,
		stream: { write: message => Logger.log(message) },
	}),
	errorHandler: morgan('combined', {
		skip: (_req, res) => res.statusCode < 400,
		stream: { write: message => Logger.error(message) },
	}),
}
