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

import { TestSuite, Test, BeforeAll } from "jec-juta";
import { expect } from "chai";
import { GlassCatMetadata } from "../../../../../src/com/onsoft/glasscat/metadata/GlassCatMetadata";

@TestSuite({
  description: "Test the GlassCatMetadata class properties and methods"
})
export class GlassCatMetadataTest {

  public metadata:GlassCatMetadata = null;

  @BeforeAll()
  public initTest():void {
    this.metadata = new GlassCatMetadata();
  }
  
  @Test({
    description: "should have an 'id' property set to 'null'"
  })
  public idTest():void {
    expect(this.metadata).to.have.property("id", null);
  }
  
  @Test({
    description: "should have a 'creation' property set to 'null'"
  })
  public creationTest():void {
    expect(this.metadata).to.have.property("creation", null);
  }
  
  @Test({
    description: "should have a 'version' property set to 'null'"
  })
  public versionTest():void {
    expect(this.metadata).to.have.property("version", null);
  }
}