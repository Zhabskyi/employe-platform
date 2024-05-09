import * as Joi from 'joi';

class EmployeeValidator {
  public employee() {
    return Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      department: Joi.string().required(),
      salary: Joi.number().required(),
    });
  }
}

export default new EmployeeValidator();
