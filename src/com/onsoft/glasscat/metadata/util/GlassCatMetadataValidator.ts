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

import {GlassCatMetadata} from "../GlassCatMetadata";

// TODO: replace by the "jec-commons" UUID validator
const UUID_VALIDATOR:any = require("uuid-validate");
const SEMVER:any = require('semver');

/**
 * Checks for valid <code>GlassCatMetadata</code> instances.
 */
export class GlassCatMetadataValidator {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Creates a new <code>GlassCatMetadataValidator</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a boolean that indicates whether the specified
   * <code>GlassCatMetadata</code> object is valid (<code>true</code>), or not
   * (<code>false</code>).
   * 
   * @param {GlassCatMetadata} metadata the <code>GlassCatMetadata</code> object
   *                                    to validate.
   * @return {boolean} <code>true</code> whether <code>metadata</code> is valid;
   *                   <code>false</code> otherwise.
   */
  public validate(metadata:GlassCatMetadata):boolean {
    const creation:number = metadata.creation;
    let isValid:boolean = UUID_VALIDATOR(metadata.id, 4);
    if(isValid) {
      isValid = SEMVER.valid(metadata.version) !== null;
      if(isValid) {
        isValid = creation !== null && !isNaN(creation) && creation !== -1;
      }
    }
    return isValid;
  }
}
