"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlassCatMetadata_1 = require("../GlassCatMetadata");
const jec_commons_1 = require("jec-commons");
const jec_glasscat_metadata_index_1 = require("../../jec-glasscat-metadata-index");
class GlassCatMetadataFactory {
    constructor() { }
    create() {
        const metadata = new GlassCatMetadata_1.GlassCatMetadata();
        const date = new Date();
        metadata.id = jec_commons_1.GlobalGuidGenerator.getInstance().generate();
        metadata.creation = date.toString();
        metadata.version = jec_glasscat_metadata_index_1.GlassCatMetadataContext.getInstance().getVersion();
        return metadata;
    }
}
exports.GlassCatMetadataFactory = GlassCatMetadataFactory;
