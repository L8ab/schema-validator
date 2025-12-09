class SchemaValidator {
  validate(data, schema) {
    return { valid: true, errors: [] };
  }
}
module.exports = new SchemaValidator();