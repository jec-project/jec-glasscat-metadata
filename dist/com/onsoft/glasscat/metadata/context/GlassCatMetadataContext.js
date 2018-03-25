"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
class GlassCatMetadataContext {
    constructor() {
        this._version = null;
        this._id = null;
        if (GlassCatMetadataContext._locked || GlassCatMetadataContext.INSTANCE) {
            throw new jec_commons_1.SingletonError(GlassCatMetadataContext);
        }
        GlassCatMetadataContext._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (GlassCatMetadataContext.INSTANCE === null) {
            GlassCatMetadataContext._locked = false;
            GlassCatMetadataContext.INSTANCE = new GlassCatMetadataContext();
        }
        return GlassCatMetadataContext.INSTANCE;
    }
    initObj() {
        this._id = jec_commons_1.GlobalGuidGenerator.getInstance().generate();
    }
    getVersion() {
        return this._version;
    }
    setVersion(version) {
        this._version = version;
    }
    getId() {
        return this._id;
    }
}
GlassCatMetadataContext.INSTANCE = null;
GlassCatMetadataContext._locked = true;
exports.GlassCatMetadataContext = GlassCatMetadataContext;
