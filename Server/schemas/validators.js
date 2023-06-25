import Joi from "joi";

const sign_up_validator = Joi.object({
  email: Joi.string().email().required(),
  userName: Joi.string().min(3).max(20),
  password: Joi.string().min(6),
});

export default sign_up_validator;
