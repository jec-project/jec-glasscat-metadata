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

import { TestSuite, Test, Before, After } from "jec-juta";
import { expect } from "chai";
import { GlassCatMetadataContext } from "../../../../../../src/com/onsoft/glasscat/metadata/context/GlassCatMetadataContext";
import { SingletonError } from "jec-commons";

@TestSuite({
  description: "Test the GlassCatMetadataContext class properties"
})
export class GlassCatMetadataContextTest {

  private readonly VERSION:string = "1.0.0";

  @Before()
  public initTest():void {
    GlassCatMetadataContext.getInstance().setVersion(null);
  }
  
  @After()
  public resetTest():void {
    GlassCatMetadataContext.getInstance().setVersion(null);
  }
  
  @Test({
    description: "should throw a singleton error when calling the constructor function"
  })
  public newInstanceTest():void {
    let buildInstance:Function = function():void {
      new GlassCatMetadataContext();
    };
    expect(buildInstance).to.throw(SingletonError);
  }
  
  @Test({
    description: "should return a GlassCatMetadataContext instance"
  })
  public getInstanceTest():void {
    let context:GlassCatMetadataContext =
                                     GlassCatMetadataContext.getInstance();
    expect(context).to.be.an.instanceOf(GlassCatMetadataContext);
  }
  
  @Test({
    description: "should return a singleton reference"
  })
  public singletonTest():void {
    let context1:GlassCatMetadataContext =
                                     GlassCatMetadataContext.getInstance();
    let context2:GlassCatMetadataContext =
                                     GlassCatMetadataContext.getInstance();
    expect(context1).to.equal(context2);
  }
  
  @Test({
    description: "should return 'null' by default"
  })
  public getVersionDefaultTest():void {
    expect(GlassCatMetadataContext.getInstance().getVersion()).to.be.null;
  }
  
  @Test({
    description: "should set the GlassCat version"
  })
  public setVersionTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
  }
  
  @Test({
    description: "should return the same version as set with the 'setVersion()' method"
  })
  public getVersionTest():void {
    GlassCatMetadataContext.getInstance().setVersion(this.VERSION);
    expect(
      GlassCatMetadataContext.getInstance().getVersion()
    ).to.equal(this.VERSION);
  }
}