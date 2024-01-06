# filter-limit

![Tests](https://github.com/yuriyyakym/filter-limit/actions/workflows/tests.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

`filter-limit` is a lightweight JavaScript library that provides a convenient method for filtering arrays while limiting the number of results. This is particularly useful for efficiently handling large datasets when you are interested in only a subset of elements.

## Features

- 🚀 Performance-focused
- 🔎 Filters arrays based on custom criteria
- 🚧 Limit the number of results
- 🕊️ Dependency-free
- 🛠️ Works with CJS and ESM
- 🪶 Lightweight
  - ESM **226b** (**201b** gzipped)
  - CJS **302b** (**254b** gzipped)

## Installation

You can install the library via npm:

```bash
npm install filter-limit
```

Or import ESM module from CDN

```js
import filterLimit from 'https://unpkg.com/filter-limit/dist/esm/index.min.js';
```

## Usage

```js
import filterLimit from 'filter-limit';

const input = [1, 2, '3', 4, '5', 6, '7', '8', 9];

const result = filterLimit(input, 3, (value) => typeof value === 'number');

console.log(result); // [1, 2, 4]
```

## License

MIT
