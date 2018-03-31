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
import {GlobalGuidGenerator} from "jec-commons";
import {GlassCatMetadataContext} from "../context/GlassCatMetadataContext";

/**
 * Creates new <code>GlassCatMetadata</code> instances.
 */
export class GlassCatMetadataFactory {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Creates a new <code>GlassCatMetadataFactory</code> instance.
   */
  constructor() {}
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates and returns a new <code>GlassCatMetadata</code> instance.
   */
  public create():GlassCatMetadata {
    const metadata:GlassCatMetadata = new GlassCatMetadata();
    metadata.id = GlobalGuidGenerator.getInstance().generate();
    metadata.creation = Date.now();
    metadata.version = GlassCatMetadataContext.getInstance().getVersion();
    return metadata;
  }
}
