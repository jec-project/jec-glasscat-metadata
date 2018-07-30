"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_VALIDATOR = require("uuid-validate");
const SEMVER = require('semver');
class GlassCatMetadataValidator {
    constructor() { }
    validate(metadata) {
        const creation = metadata.creation;
        let isValid = UUID_VALIDATOR(metadata.id, 4);
        if (isValid) {
            isValid = SEMVER.valid(metadata.version) !== null;
            if (isValid) {
                isValid = creation !== null && !isNaN(creation) && creation !== -1;
            }
        }
        return isValid;
    }
}
exports.GlassCatMetadataValidator = GlassCatMetadataValidator;
