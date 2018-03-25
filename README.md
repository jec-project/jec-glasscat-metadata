# JEC GlassCat Metadata Project

JEC GlassCat Metadata is a [JavaScript Entreprise Container][jec-url] project which provides utility tools for working with GlassCat server metadata.

[![][jec-logo]][jec-url]

## Requirements

JEC GlassCat Metadata needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Set up the JEC GlassCat Metadata module with:

```bash
$ npm install jec-glasscat-metadata --save
```

## Using Components

All JEC GlassCat Metadata components have to be imported with the ES6 syntax:

```javascript
import { FilePropertiesBuilder } from "jec-glasscat-metadata";

const BUILDER:FilePropertiesBuilder = new FilePropertiesBuilder();
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## API Reference

The API Reference documentation is not included into the JEC GlassCat Metadata node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation will be available soon at the JEC Website.

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [1.0.0](CHANGELOG.md#jec-glasscat-metadata-1.0.0)
 
For a complete listing of release notes for all JEC GlassCat Metadata update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC GlassCat Metadata Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: https://github.com/pechemann/JEC
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png