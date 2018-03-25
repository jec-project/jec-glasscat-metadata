"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlassCatMetadata_1 = require("../GlassCatMetadata");
class GlassCatMetadataParser {
    constructor() { }
    parse(config) {
        const metadata = new GlassCatMetadata_1.GlassCatMetadata();
        metadata.id = config.id;
        metadata.creation = config.creation;
        metadata.version = config.version;
        return metadata;
    }
}
exports.GlassCatMetadataParser = GlassCatMetadataParser;
