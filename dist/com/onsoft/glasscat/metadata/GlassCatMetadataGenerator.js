"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlassCatMetadataFactory_1 = require("./util/GlassCatMetadataFactory");
const GlassCatMetadataContext_1 = require("./context/GlassCatMetadataContext");
const GlassCatMetadataValidationError_1 = require("./exception/GlassCatMetadataValidationError");
const SEMVER = require('semver');
class GlassCatMetadataGenerator {
    constructor(version) {
        this._version = null;
        this.initObj(version);
    }
    initObj(version) {
        let errorMsg = null;
        if (version === null) {
            errorMsg = "'version' parameter must not be null";
        }
        if (SEMVER.valid(version) === null) {
            errorMsg = "'version' is not a valid semver";
        }
        if (errorMsg)
            throw new GlassCatMetadataValidationError_1.GlassCatMetadataValidationError(errorMsg);
        this._version = version;
    }
    getVersion() {
        return this._version;
    }
    generate() {
        GlassCatMetadataContext_1.GlassCatMetadataContext.getInstance().setVersion(this._version);
        const factory = new GlassCatMetadataFactory_1.GlassCatMetadataFactory();
        return factory.create();
    }
    generateFile() {
        GlassCatMetadataContext_1.GlassCatMetadataContext.getInstance().setVersion(this._version);
        const factory = new GlassCatMetadataFactory_1.GlassCatMetadataFactory();
        const metadata = factory.create();
        return JSON.stringify(metadata);
    }
}
exports.GlassCatMetadataGenerator = GlassCatMetadataGenerator;
