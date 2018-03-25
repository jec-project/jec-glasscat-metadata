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

import { TestSuite, Test } from "jec-juta";
import { expect } from "chai";
import { GlassCatMetadata } from "../../../../../../src/com/onsoft/glasscat/metadata/GlassCatMetadata";
import { GlassCatMetadataParser } from "../../../../../../src/com/onsoft/glasscat/metadata/util/GlassCatMetadataParser";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/GlassCatMetadataParserTestUtils";

@TestSuite({
  description: "Test the GlassCatMetadataParser class methods"
})
export class GlassCatMetadataParserTest {

  @Test({
    description: "should return an instance of the 'GlassCatMetadata' class"
  })
  public instanceOfTest():void {
    const parser:GlassCatMetadataParser = new GlassCatMetadataParser();
    const config:any = JSON.parse(utils.FILE);
    const metadata:any = parser.parse(config);
    expect(metadata).to.be.an.instanceOf(GlassCatMetadata);
  }

  @Test({
    description: "should return the correct 'id' value"
  })
  public validIdTest():void {
    const parser:GlassCatMetadataParser = new GlassCatMetadataParser();
    const config:any = JSON.parse(utils.FILE);
    const metadata:any = parser.parse(config);
    expect(metadata.id).to.equal(utils.ID);
  }

  @Test({
    description: "should return the correct 'creation' value"
  })
  public validCreationTest():void {
    const parser:GlassCatMetadataParser = new GlassCatMetadataParser();
    const config:any = JSON.parse(utils.FILE);
    const metadata:any = parser.parse(config);
    expect(metadata.creation).to.equal(utils.CREATION);
  }

  @Test({
    description: "should return the correct 'version' value"
  })
  public validVersionTest():void {
    const parser:GlassCatMetadataParser = new GlassCatMetadataParser();
    const config:any = JSON.parse(utils.FILE);
    const metadata:any = parser.parse(config);
    expect(metadata.version).to.equal(utils.VERSION);
  }
}