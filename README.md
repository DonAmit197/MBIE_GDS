# GDS Design System Templates for Formio

This project provides the templates required to implement the GDS Design System for Formio form renderer.

## Set up and configuration

### Prerequisites

NodeJS version 14

### Installation

```bash
   npm install @ukhomeoffice/formio-gds-template
```

## Usage

Using vanilla formio

```javascript
import gds from '@ukhomeoffice/formio-gds-template';
import {Formio} from 'formiojs';

Formio.use(gds);
```

Using react-formio

```javascript
import gds from '@ukhomeoffice/formio-gds-template';
import {Formio} from "react-formio";

Formio.use(gds);
```

## How to publish to NPM registry

Publishing to the NPM registry is done through GitHub actions. This is triggered by creating a release through GitHub as documented in the steps below.

As a prerequisite, push a feature branch or merge into the `main` branch (providing the change has been tested). Ensure the `version` in `package.json` has been incremented accordingly. To follow best practices, use the semantic versioning system: <https://semver.org/>
> [!NOTE]
> Changes which are pre-releases i.e. changes in feature branches which are not ready to be released as general availability, should be [marked as a pre-release](https://semver.org/#spec-item-9) e.g. `1.2.3-alpha`

1. Create a release through GitHub by going to <https://github.com/UKHomeOffice/formio-gds-template/releases/new>
2. Create a new tag version to match the version in `package.json` prefixing with a `v` e.g. `v1.2.3-alpha`
3. Title the release with the same tag version as created in the previous step
4. Choose the appropriate branch, be it a feature branch or the primary branch as the target
5. For simplicity, select the `Generate release notes` button or for more granularity, populate the release note as relevant
6. Optionally, mark the release as a pre-release if publishing from a feature branch
7. Click `publish release`. This will trigger a GitHub action workflow run
8. Wait for the GitHub action to finish

> [!TIP]
> Optionally, verify the new version has been published by heading over to <https://www.npmjs.com/package/@ukhomeoffice/formio-gds-template> to check the new version is present (you may need to reload your browser cache when visiting <https://www.npmjs.com>). Alternatively, verify it exists through the CLI by running `npm view @ukhomeoffice/formio-gds-template versions` locally and checking to see if the new version exists

### Notes

For additional information on GitHub releases, [see the GitHub Documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=webui#creating-a-release)
