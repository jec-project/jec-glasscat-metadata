/*!
 * JEC GlassCat Metadata Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-glasscat-metadata" {

/// <reference types="node" />

export class GlassCatMetadataContext implements Singleton {    constructor();    private static INSTANCE;    private static _locked;    static getInstance(): GlassCatMetadataContext;    private initObj();    private _version;    private _id;    getVersion(): string;    setVersion(version: string): void;    getId(): string;}export class GlassCatMetadata {    constructor();    id: string;    creation: string;    version: string;}export class GlassCatMetadataFactory {    constructor();    create(): GlassCatMetadata;}}