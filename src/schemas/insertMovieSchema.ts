import Joi from "joi";

const insertMovieSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": 'The "link" field is mandatory.',
    "string.empty": 'The "link" field cannot be empty.',
    "string.base": 'The "overview" field must be a string.',
  }),
  platform: Joi.string().required().messages({
    "any.required": 'The "link" field is mandatory.',
    "string.empty": 'The "link" field cannot be empty.',
    "string.base": 'The "overview" field must be a string.',
  }),
  genre: Joi.string().required().messages({
    "any.required": 'The "link" field is mandatory.',
    "string.empty": 'The "link" field cannot be empty.',
    "string.base": 'The "overview" field must be a string.',
  }),
  watched: Joi.boolean().messages({
    "boolean.base": 'The "watched" field must be a boolean value.',
  }),
  overview: Joi.string().messages({
    "string.base": 'The "overview" field must be a string.',
  }),
});

export default insertMovieSchema;
