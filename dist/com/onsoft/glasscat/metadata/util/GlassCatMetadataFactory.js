"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlassCatMetadata_1 = require("../GlassCatMetadata");
const jec_commons_1 = require("jec-commons");
const GlassCatMetadataContext_1 = require("../context/GlassCatMetadataContext");
class GlassCatMetadataFactory {
    constructor() { }
    create() {
        const metadata = new GlassCatMetadata_1.GlassCatMetadata();
        metadata.id = jec_commons_1.GlobalGuidGenerator.getInstance().generate();
        metadata.creation = Date.now();
        metadata.version = GlassCatMetadataContext_1.GlassCatMetadataContext.getInstance().getVersion();
        return metadata;
    }
}
exports.GlassCatMetadataFactory = GlassCatMetadataFactory;
