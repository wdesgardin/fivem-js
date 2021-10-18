<h1 align="center">fivem-js</h1>

<p align="center">
  <i>:fire: A Javascript/Typescript wrapper for the FiveM natives :video_game:</i>
  <br>
  <br>
  <a href="https://github.com/wdesgardin/fivem-js/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="License: MIT">
  </a>
  <a href="https://github.com/wdesgardin/fivem-js/actions/workflows/main.yml">
    <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/wdesgardin/fivem-js/master">
  </a>
  <a href="https://github.com/wdesgardin/fivem-js/commits/master">
    <img src="https://img.shields.io/github/last-commit/wdesgardin/fivem-js.svg?style=flat" alt="Last commit">
  </a>
</p>

<a href="https://wdesgardin.github.io/fivem-js/">Documentation</a>

Functionality of this wrapper is **based on the FiveM C# wrapper** - [link](https://github.com/citizenfx/fivem/tree/master/code/client/clrcore/External). It's a feature-rich set of helper classes, objects, and functions to help you develop your project faster.

This library was originally created by <a href="https://github.com/d0p3t/fivem-js">d0p3t</a>. I am maintaining it for the moment for my personal use.

## Features

- One dependency [@citizenfx/client](https://www.npmjs.com/package/@citizenfx/client)
- Abstracts common used FiveM practices
- Entity management through class objects (i.e. `Vehicle` and `Ped` entities)
- UI elements such as `scaleforms` and loading `prompts`
- Audio, Blips, Cameras and more...

In other words, whatever the FiveM C# wrapper can do, this package can as well and more!

## Download & Install

`npm i fivem-js`

https://www.npmjs.com/package/fivem-js

## Simple Usage

See [here](https://github.com/wdesgardin/fivem-js/tree/master/examples) for example projects.

### Typescript

```typescript
import * as Cfx from 'fivem-js';

RegisterCommand(
  'adder',
  async (source: number, args: string[]) => {
    const vehicle = await Cfx.World.createVehicle(
      new Cfx.Model('adder'),
      new Cfx.Vector3(1, 2, 3),
      4,
    );
    Cfx.Game.PlayerPed.setIntoVehicle(vehicle, Cfx.VehicleSeat.Driver);
  },
  false,
);
```

You can also individually import classes.

```typescript
import { World } from 'fivem-js/lib/World';
```

### Javascript

```js
/// <reference path="node_modules/fivem-js/lib/index.d.ts"/>
/// <reference path="node_modules/@citizenfx/client/natives_universal.d.ts"/>

const Cfx = require('fivem-js');

RegisterCommand(
  'adder',
  async (source, args) => {
    const vehicle = await Cfx.World.createVehicle(
      new Cfx.Model('adder'),
      new Cfx.Vector3(1, 2, 3),
      4,
    );
    Cfx.Game.PlayerPed.setIntoVehicle(vehicle, Cfx.VehicleSeat.Driver);
  },
  false,
);
```

## Contributing

You are more than welcome to contribute to this project by submitting a pull request and creating issues.

Please checkout [CONTRIBUTING.md](./CONTRIBUTING.md) for our contributing guidelines.

## License

MIT with customization. See [LICENSE](https://github.com/wdesgardin/fivem-js/blob/master/LICENSE)
