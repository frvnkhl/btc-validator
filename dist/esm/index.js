/**
 * Checks if a given string is a valid Bitcoin Legacy (P2PKH) address.
 * Starts with '1'.
 * @param address The string to validate.
 * @returns True if it's a valid legacy address, false otherwise.
 */
function isLegacyAddress(address) {
    // Legacy addresses start with '1' and are 26-34 alphanumeric characters long.
    // A more rigorous check would involve base58 decoding and checksum validation.
    return /^1[a-km-zA-HJ-NP-Z0-9]{25,34}$/.test(address);
}
/**
 * Checks if a given string is a valid Bitcoin SegWit P2SH address.
 * Starts with '3'.
 * @param address The string to validate.
 * @returns True if it's a valid P2SH address, false otherwise.
 */
function isSegwitP2SHAddress(address) {
    // P2SH addresses start with '3' and are 26-34 alphanumeric characters long.
    // Again, a full validation would involve base58 decoding and checksum.
    return /^3[a-km-zA-HJ-NP-Z0-9]{25,34}$/.test(address);
}
/**
 * Checks if a given string is a valid Bitcoin Bech32 (native SegWit) address.
 * Starts with 'bc1'.
 * @param address The string to validate.
 * @returns True if it's a valid Bech32 address, false otherwise.
 */
function isBech32Address(address) {
    // Bech32 addresses start with 'bc1' and are 42 characters long.
    // A full validation requires Bech32 checksum algorithm.
    return /^bc1[ac-hj-np-z02-9]{39,69}$/.test(address);
}
/**
 * Checks if a given string is any type of valid Bitcoin address.
 * This function uses the individual type-specific validators.
 * @param address The string to validate.
 * @returns True if it's any valid Bitcoin address type, false otherwise.
 */
function isValidBitcoinAddress(address) {
    return isLegacyAddress(address) || isSegwitP2SHAddress(address) || isBech32Address(address);
}
/**
 * Gets detailed validation information for a Bitcoin address.
 * @param address The string to validate.
 * @returns An object conforming to BitcoinAddressDetails.
 */
function getBitcoinAddressDetails(address) {
    const details = {
        address: address,
        isValid: false,
        type: 'unknown',
        network: 'unknown'
    };
    if (address.length === 0) {
        return details;
    }
    if (isLegacyAddress(address)) {
        details.isValid = true;
        details.type = 'legacy';
        if (address.startsWith('1')) {
            details.network = 'mainnet';
        }
        else if (address.startsWith('m') || address.startsWith('n')) {
            details.network = 'testnet';
        }
    }
    else if (isSegwitP2SHAddress(address)) {
        details.isValid = true;
        details.type = 'p2sh-segwit';
        if (address.startsWith('3')) {
            details.network = 'mainnet';
        }
        else if (address.startsWith('2')) {
            details.network = 'testnet';
        }
    }
    else if (isBech32Address(address)) {
        details.isValid = true;
        details.type = 'bech32';
        if (address.startsWith('bc1')) {
            details.network = 'mainnet';
        }
        else if (address.startsWith('tb1')) {
            details.network = 'testnet';
        }
    }
    return details;
}
export { isLegacyAddress, isSegwitP2SHAddress, isBech32Address, isValidBitcoinAddress, getBitcoinAddressDetails };
// Default export (a common pattern for libraries with a primary function)
export default isValidBitcoinAddress;
