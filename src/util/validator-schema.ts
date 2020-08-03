import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common'
import { ObjectSchema, ValidationErrorItem } from '@hapi/joi'
@Injectable()
export class JoiValidationPipe implements PipeTransform {
	constructor(private schema: ObjectSchema) {}
	transform(value: any) {
		const { error } = this.schema.validate(value)
		if (error) {
			const validationErrors: ValidationErrorItem[] = error.details || []
			throw new BadRequestException(
				validationErrors[0]
					? validationErrors[0].message || null
					: null,
			)
		}
		return value
	}
}
