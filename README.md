<!-- <p align="center">
  <img src="logo.png" width="450" alt="Nodelinter logo" />
</p> -->

<p align="center">
  <h1 align="center">Nodelinter</h1>
</p>

<p align="center">
  Static code analyzer for n8n node files<br />
  by <a href="https://github.com/ivov">Iván Ovejero</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-work%20in%20progress-blue">
  <a href="https://github.com/n8n-io"><img src="https://img.shields.io/badge/org-n8n-ff6d5a"></a>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<br />

<!-- <p align="center">
  <img src="screenshot.png" width="450" alt="Nodelinter screenshot" />
</p> -->

**Nodelinter** is a static code analyzer for n8n node files, for linting:

- default values based on param type,
- casing for display names and descriptions,
- alphabetization for params and options,
- required and optional key-value pairs,
- expected values for specific params,
- codebase conventions and modern JS

See [full lintings list](./src/lintings.ts).

Lintable n8n node files:

- `*.node.ts` (main node file)
- `*Description.ts` (resource description file)

## Operation

Run via npx:

```sh
npx nodelinter
```

Or locally:

```sh
git clone https://github.com/ivov/nodelinter
cd nodelinter; npm i
npm run -- lint
```

**Options**

```sh
npx nodelinter --option
# or
npm run lint -- --option
```

Primary options:

| Option     | Effect                                                                             | Type   |
| ---------- | ---------------------------------------------------------------------------------- | ------ |
| `--target` | Target the file or all the files in the dir at this path                           | String |
| `--config` | Use the [custom config](##config-file) at this path to override the default config | String |

```sh
npx nodelinter --path=/Users/john/n8n/packages/nodes-base/nodes/Stripe/Stripe.node.ts
npx nodelinter --path=/Users/john/n8n/packages/nodes-base/nodes/Stripe
npx nodelinter --config=/Users/john/Documents/myConfig.json
```

Secondary options:

| Option            | Effect                                             | Type    |
| ----------------- | -------------------------------------------------- | ------- |
| `--print`         | Print lint logs to a JSON file                     | Boolean |
| `--errors-only`   | Enable error logs only - overrides custom config   | Boolean |
| `--warnings-only` | Enable warning logs only - overrides custom config | Boolean |
| `--infos-only`    | Enable info logs only - overrides custom config    | Boolean |

```sh
npx nodelinter --config=/Users/john/nodelinter/nodelinter.config.json --print
npx nodelinter --path=/Users/john/n8n/packages/nodes-base/nodes/Stripe --errors-only
```

### Custom config file

Nodelinter settings are found in its [default config](./src/defaultConfig.ts), which can be overridden by a custom config. To override the default config, create a JSON file containing any settings to override:

```json
{
  "target": "/Users/john/n8n/packages/nodes-base/nodes/Notion/Notion.node.ts",
  "sortMethod": "lineNumber",
  "lintings": {
    "PARAM_DESCRIPTION_MISSING_WHERE_OPTIONAL": {
      "enabled": false
    },
    "NAME_WITH_NO_CAMELCASE": {
      "enabled": false
    }
  }
}
```

And use the `--config` option to specify the path to it:

```sh
npx nodelinter --config=/Users/john/Documents/myConfig.json
# or
npm run lint -- --config=/Users/john/Documents/myConfig.json
```

For convenience, when running locally, if you name the custom config file `nodelinter.config.json` and place it in the nodelinter dir, the custom config file will be auto-detected.

<!-- ## Classification

Lintings are tagged with one or more **lint areas**, i.e. the section of code affected by the linting, such as `default` (default values), `displayName` (user-facing names for params and options), `limit` (limit params), etc.

Every linting also flags a single **lint issue**, i.e. the type of problem flagged by the linting, such as `alphabetization` (alphabetical sorting of params or options), `casing` (proper casing for user-facing param names and options), `missing` (for missing context-dependent key-value pairs), etc.

Lintings can be toggled on and off by lint area, by lint issue, or individually. -->

## Pending

- More lintings
- Add GitHub link as lint target
- Add PR diff as lint target
- Add `GenericFunctions.ts` as lint target
- Add redesigned nodes as lint target
- Validate custom config file in full
- Create PoC to auto-fix lintings
- Write Contribution guide

## Author

© 2021 [Iván Ovejero](https://github.com/ivov)

## License

Distributed under the [MIT License](LICENSE.md).
