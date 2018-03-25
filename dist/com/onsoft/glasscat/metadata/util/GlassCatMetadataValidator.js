"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_VALIDATOR = require("uuid-validate");
const SEMVER = require('semver');
class GlassCatMetadataValidator {
    constructor() { }
    validate(metadata) {
        let isValid = UUID_VALIDATOR(metadata.id, 4);
        if (isValid) {
            isValid = SEMVER.valid(metadata.version) !== null;
            if (isValid) {
                isValid = !isNaN(Date.parse(metadata.creation));
            }
        }
        return isValid;
    }
}
exports.GlassCatMetadataValidator = GlassCatMetadataValidator;
