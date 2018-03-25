/*!
 * JEC GlassCat Metadata Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-glasscat-metadata" {

import { Singleton } from "jec-commons";

export class GlassCatMetadataContext implements Singleton {    constructor();    private static INSTANCE;    private static _locked;    static getInstance(): GlassCatMetadataContext;    private initObj();    private _version;    private _id;    getVersion(): string;    setVersion(version: string): void;    getId(): string;}export class GlassCatMetadataValidationError extends Error {    constructor(message: string);}export class GlassCatMetadata {    constructor();    id: string;    creation: string;    version: string;}export class GlassCatMetadataGenerator {    constructor(version: string);    private _version;    private initObj(version);    getVersion(): string;    generate(): GlassCatMetadata;    generateFile(): string;}export class GlassCatMetadataFactory {    constructor();    create(): GlassCatMetadata;}export class GlassCatMetadataValidator {    constructor();    validate(metadata: GlassCatMetadata): boolean;}}