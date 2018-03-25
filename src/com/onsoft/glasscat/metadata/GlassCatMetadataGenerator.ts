//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { GlassCatMetadata } from "./GlassCatMetadata";
import { GlassCatMetadataFactory } from "./util/GlassCatMetadataFactory";
import { GlassCatMetadataContext } from "./context/GlassCatMetadataContext";
import { GlassCatMetadataValidationError } from "./exception/GlassCatMetadataValidationError";

const SEMVER:any = require('semver');

/**
 * Generates metadata for a new GlassCat server.
 */
export class GlassCatMetadataGenerator {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Creates a new <code>GlassCatMetadataGenerator</code> instance.
   * 
   * @param {string} the GlassCat server version for this generator.
   */
  constructor(version:string) {
    this.initObj(version);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GlassCat server version for this generator.
   */
  private _version:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   * 
   * @param {string} version the GlassCat server version for this context.
   */
  private initObj(version:string):void {
    let errorMsg:string = null;
    if(version === null) {
      errorMsg = "'version' parameter must not be null";
    }
    if(SEMVER.valid(version) === null) {
      errorMsg = "'version' is not a valid semver";
    }
    if(errorMsg) throw new GlassCatMetadataValidationError(errorMsg);
    this._version = version;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the GlassCat server version for this generator.
   * 
   * @return {string} the GlassCat server version for this generator.
   */
  public getVersion():string {
    return this._version;
  }

  /**
   * Generates and returns a new <code>GlassCatMetadata</code> object.
   * 
   * @return {GlassCatMetadata} a new <code>GlassCatMetadata</code> object.
   */
  public generate():GlassCatMetadata {
    GlassCatMetadataContext.getInstance().setVersion(this._version);
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    return factory.create();
  }
  
  /**
   * Generates a new <code>GlassCatMetadata</code> object and returns it as a
   * JSON string representation.
   * 
   * @return {string} a string representation of a new
   *                  <code>GlassCatMetadata</code> object.
   */
  public generateFile():string {
    GlassCatMetadataContext.getInstance().setVersion(this._version);
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    return JSON.stringify(metadata);
  }
}
