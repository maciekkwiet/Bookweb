import { validate } from 'class-validator';

const validateEntity = async (entity: object) => {
  const errors = await validate(entity);

  if (errors.length > 0) {
    const err = errors.map((error) => {
      const errors = error.constraints;
      if (errors) {
        return Object.values(errors);
      }
    });

    throw new Error(`${err}`);
  }
};

export default validateEntity;
