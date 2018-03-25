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

import { TestSuite, Test, BeforeAll, AfterAll } from "jec-juta";
import { expect } from "chai";
import { GlassCatMetadata } from "../../../../../../src/com/onsoft/glasscat/metadata/GlassCatMetadata";
import { GlassCatMetadataContext } from "../../../../../../src/com/onsoft/glasscat/metadata/context/GlassCatMetadataContext";
import { GlassCatMetadataFactory } from "../../../../../../src/com/onsoft/glasscat/metadata/util/GlassCatMetadataFactory";
import { SingletonError } from "jec-commons";

// TODO: replace by the "jec-commons" UUID validator
const UUID_VALIDATOR:any = require("uuid-validate");

@TestSuite({
  description: "Test the GlassCatMetadataFactory class properties"
})
export class GlassCatMetadataFactoryTest {

  private readonly VERSION:string = "1.0.0";

  @BeforeAll()
  public initTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
  }
  
  @AfterAll()
  public resetTest():void {
    GlassCatMetadataContext.getInstance().setVersion(null);
  }
  
  @Test({
    description: "should create a new 'GlassCatMetadata' instance"
  })
  public createTest():void {
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    expect(factory.create()).to.be.an.instanceOf(GlassCatMetadata);
  }
  
  @Test({
    description: "should not be idempotent"
  })
  public newInstanceTest():void {
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    expect(factory.create()).to.not.equal(factory.create());
  }

  @Test({
    description: "should create a 'GlassCatMetadata' instance with a valid version"
  })
  public idTest():void {
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const ID:string = factory.create().id;
    expect(UUID_VALIDATOR(ID, 4)).to.be.true;
  }

  @Test({
    description: "should create a 'GlassCatMetadata' instance with a valid version"
  })
  public versionTest():void {
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    expect(factory.create().version).to.equal(this.VERSION);
  }
}