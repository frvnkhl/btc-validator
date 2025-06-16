# btc-validator

A lightweight TypeScript library for validating Bitcoin addresses across different formats.

[![npm version](https://img.shields.io/npm/v/btc-validator.svg)](https://www.npmjs.com/package/btc-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install btc-validator
# or
yarn add btc-validator
```

## Features

- Validate Bitcoin addresses across multiple formats:
  - Legacy addresses (starting with '1')
  - P2SH-SegWit addresses (starting with '3')
  - Bech32 addresses (starting with 'bc1')
- Get detailed information about Bitcoin addresses
- Written in TypeScript with full type definitions
- Zero dependencies
- Works in both CommonJS and ESM environments

## Usage

### Basic Validation

```javascript
// ES Modules
import isValidBitcoinAddress from 'btc-validator';

// CommonJS
const isValidBitcoinAddress = require('btc-validator').default;

// Validate any Bitcoin address
const isValid = isValidBitcoinAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
console.log(isValid); // true
```

### Advanced Usage

```javascript
// ES Modules
import { getBitcoinAddressDetails } from 'btc-validator';

// CommonJS
const { getBitcoinAddressDetails } = require('btc-validator');

// Get detailed information about an address
const details = getBitcoinAddressDetails('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4');
console.log(details);
/*
{
  address: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4',
  isValid: true,
  type: 'bech32',
  network: 'mainnet'
}
*/
```

### Individual Validation Functions

```javascript
// ES Modules
import { isLegacyAddress, isSegwitP2SHAddress, isBech32Address } from 'btc-validator';

// CommonJS
const { isLegacyAddress, isSegwitP2SHAddress, isBech32Address } = require('btc-validator');

// Check specific address types
console.log(isLegacyAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')); // true
console.log(isSegwitP2SHAddress('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy')); // true
console.log(isBech32Address('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4')); // true
```

## API Reference

### Functions

#### `isValidBitcoinAddress(address: string): boolean`

Validates if a string is a valid Bitcoin address of any supported format.

#### `getBitcoinAddressDetails(address: string): BitcoinAddressDetails`

Returns detailed information about a Bitcoin address.

#### `isLegacyAddress(address: string): boolean`

Checks if an address is a valid legacy Bitcoin address (starting with '1').

#### `isSegwitP2SHAddress(address: string): boolean`

Checks if an address is a valid P2SH-SegWit address (starting with '3').

#### `isBech32Address(address: string): boolean`

Checks if an address is a valid Bech32 address (starting with 'bc1').

### Types

#### `BitcoinAddressDetails`

```typescript
type BitcoinAddressDetails = {
    address: string;
    isValid: boolean;
    type: 'legacy' | 'p2sh-segwit' | 'bech32' | 'unknown';
    network: 'mainnet' | 'testnet' | 'unknown';
};
```

## License

MIT © [elFranquito](https://github.com/frvnkhl)