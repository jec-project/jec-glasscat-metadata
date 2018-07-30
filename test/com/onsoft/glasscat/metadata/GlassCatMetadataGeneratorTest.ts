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
import { GlassCatMetadataGenerator } from "../../../../../src/com/onsoft/glasscat/metadata/GlassCatMetadataGenerator";
import { GlassCatMetadata } from "../../../../../src/com/onsoft/glasscat/metadata/GlassCatMetadata";
import { GlassCatMetadataValidationError } from "../../../../../src/com/onsoft/glasscat/metadata/exception/GlassCatMetadataValidationError";
import { GlassCatMetadataValidator } from "../../../../../src/com/onsoft/glasscat/metadata/util/GlassCatMetadataValidator";

// TODO: replace by the "jec-commons" UUID validator
const UUID_VALIDATOR:any = require("uuid-validate");

@TestSuite({
  description: "Test the GlassCatMetadataGenerator class properties and methods"
})
export class GlassCatMetadataGeneratorTest {

  private readonly VERSION:string = "1.0.0";

  @Test({
    description: "should throw an exception if 'version' parameter is 'null'"
  })
  public nullVersionTest():void {
    const buildGenerator:Function = function():void {
      new GlassCatMetadataGenerator(null);
    };
    expect(buildGenerator).to.throw(GlassCatMetadataValidationError);
  }
  
  @Test({
    description: "should throw an exception if 'version' parameter is not valid"
  })
  public invalidVersionTest():void {
    const buildGenerator:Function = function():void {
      new GlassCatMetadataGenerator("invalid");
    };
    expect(buildGenerator).to.throw(GlassCatMetadataValidationError);
  }
  
  @Test({
    description: "should create a valid 'GlassCatMetadata' object"
  })
  public generateTest():void {
    const generator:GlassCatMetadataGenerator =
                                    new GlassCatMetadataGenerator(this.VERSION);
    const metadata:GlassCatMetadata = generator.generate();
    const validator:GlassCatMetadataValidator = new GlassCatMetadataValidator();
    expect(validator.validate(metadata)).to.be.true;
  }
  
  @Test({
    description: "should create a 'GlassCatMetadata' object with the correct 'version'"
  })
  public versionTest():void {
    const generator:GlassCatMetadataGenerator =
                                    new GlassCatMetadataGenerator(this.VERSION);
    const metadata:GlassCatMetadata = generator.generate();
    expect(metadata.version).to.equal(this.VERSION);
  }
  
  @Test({
    description: "should create a valid JSON file"
  })
  public generateFileTest():void {
    const generator:GlassCatMetadataGenerator =
                                    new GlassCatMetadataGenerator(this.VERSION);
    const file:string = generator.generateFile();
    const parsed:any = JSON.parse(file);
    const creation:number = parseInt(parsed.creation); 
    expect(parsed.version).to.equal(this.VERSION);
    expect(isNaN(creation)).to.be.false;
    expect(UUID_VALIDATOR(parsed.id, 4)).to.be.true;
  }
}