import * as Joi from '@hapi/joi'

export const schema = Joi.object({
	note: Joi.string().required(),
	// eslint-disable-next-line @typescript-eslint/camelcase
	meta_data: Joi.object().optional(),
})
