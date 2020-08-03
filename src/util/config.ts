import Joi = require('@hapi/joi')
import { Logger } from '@nestjs/common'
require('dotenv').config()

const schema = Joi.object({
	DB: Joi.string().required(),
	NODE_ENV: Joi.string().required(),
	PORT: Joi.string().required(),
}).unknown()

export default () => {
	const { error } = schema.validate(process.env)
	if (error) {
		Logger.error(error.details)
		process.exit(1)
	}
	return {
		DB: process.env.DB || 'mongodb://localhost:27017/nest-api-demo',
		NODE_ENV: process.env.NODE_ENV || 'development',
		PORT: Number(process.env.PORT) || 3000,
	}
}
