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
import { GlassCatMetadataContext } from "../../../../../../src/com/onsoft/glasscat/metadata/context/GlassCatMetadataContext";
import { GlassCatMetadataValidator } from "../../../../../../src/com/onsoft/glasscat/metadata/util/GlassCatMetadataValidator";
import { GlassCatMetadataFactory } from "../../../../../../src/com/onsoft/glasscat/metadata/util/GlassCatMetadataFactory";

@TestSuite({
  description: "Test the GlassCatMetadataValidator class methods"
})
export class GlassCatMetadataValidatorTest {

  private readonly VERSION:string = "1.0.0";

  @Test({
    description: "should return 'true' if the instance is valid"
  })
  public validMetadataTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    expect(validator.validate(metadata)).to.be.true;
  }
  
  @Test({
    description: "should return 'false' if 'version' is 'null'"
  })
  public versionNullTest():void {
    GlassCatMetadataContext.getInstance().setVersion(null);
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    expect(validator.validate(metadata)).to.be.false;
  }
  
  @Test({
    description: "should return 'false' if 'version' is not valid"
  })
  public versionInvalidTest():void {
    GlassCatMetadataContext.getInstance().setVersion("b.14.3");
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    expect(validator.validate(metadata)).to.be.false;
  }
  
  @Test({
    description: "should return 'false' if 'id' is 'null'"
  })
  public idNullTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    metadata.id = null;
    expect(validator.validate(metadata)).to.be.false;
  }
  
  @Test({
    description: "should return 'false' if 'id' is not valid"
  })
  public idInvalidTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    metadata.id = "rrr-666r999-asze";
    expect(validator.validate(metadata)).to.be.false;
  }
  
  @Test({
    description: "should return 'false' if 'creation' is 'null'"
  })
  public creationNullTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    metadata.creation = null;
    expect(validator.validate(metadata)).to.be.false;
  }
  
  @Test({
    description: "should return 'false' if 'creation' is '-1'"
  })
  public creationInvalidTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    metadata.creation = -1;
    expect(validator.validate(metadata)).to.be.false;
  }

  @Test({
    description: "should return 'false' if 'creation' is 'NaN'"
  })
  public creationNaNTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    const factory:GlassCatMetadataFactory = new GlassCatMetadataFactory();
    const metadata:GlassCatMetadata = factory.create();
    metadata.creation = NaN;
    expect(validator.validate(metadata)).to.be.false;
  }
}