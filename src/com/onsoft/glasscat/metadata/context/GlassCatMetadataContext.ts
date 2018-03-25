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

import {Singleton, SingletonError, GlobalGuidGenerator} from "jec-commons";

/**
 * A singleton implementation of the <code>GuidGenerator</code> interface that
 * proxifies a the default <code>GuidGenerator</code> object. 
 */
export class GlassCatMetadataContext implements Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatMetadataContext</code> instance.
   */
  constructor() {
    if(GlassCatMetadataContext._locked || GlassCatMetadataContext.INSTANCE) {
      throw new SingletonError(GlassCatMetadataContext);
    }
    GlassCatMetadataContext._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>GlassCatMetadataContext</code> singleton instance reference.
   */
  private static INSTANCE:GlassCatMetadataContext = null;

  /**
   * Prevents <code>GlassCatMetadataContext</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>GlassCatMetadataContext</code> singleton.
   *
   * @return {GlassCatMetadataContext} a reference to the 
   *                               <code>GlassCatMetadataContext<code> singleton.
   */
  public static getInstance():GlassCatMetadataContext{
    if(GlassCatMetadataContext.INSTANCE === null) {
      GlassCatMetadataContext._locked = false;
      GlassCatMetadataContext.INSTANCE = new GlassCatMetadataContext();
    }
    return GlassCatMetadataContext.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._id = GlobalGuidGenerator.getInstance().generate();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GlassCat server version for this context.
   */
  private _version:string = null;

  /**
   * The GUID for this singleton.
   */
  private _id:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the GlassCat server version for this context.
   * 
   * @return {string} the GlassCat server version for this context.
   */
  public getVersion():string {
    return this._version;
  }
  
  /**
   * Sets a new GlassCat server version for this context.
   * 
   * @param {string} version the new GlassCat server version for this context.
   */
  public setVersion(version:string):void {
    this._version = version;
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}