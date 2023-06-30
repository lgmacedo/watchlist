import Joi from "joi";

const watchMovieSchema = Joi.object({
  watched: Joi.boolean().messages({
    "boolean.base": 'The "watched" field must be a boolean value.',
  }),
  overview: Joi.string().messages({
    "string.base": 'The "overview" field must be a string.',
  }),
});

export default watchMovieSchema;
