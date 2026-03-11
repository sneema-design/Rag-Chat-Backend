import { ZodError } from "zod";

const validate = (schema, property = "body") => (req, res, next) => {
  try {
    const validatedData = schema.parse(req[property]);
    req[property] = validatedData;
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default validate;