/**
 * Interface representing the detailed validation result for a Bitcoin address.
 */
type BitcoinAddressDetails = {
    address: string;
    isValid: boolean;
    type: 'legacy' | 'p2sh-segwit' | 'bech32' | 'unknown';
    network: 'mainnet' | 'testnet' | 'unknown';
};
/**
 * Checks if a given string is a valid Bitcoin Legacy (P2PKH) address.
 * Starts with '1'.
 * @param address The string to validate.
 * @returns True if it's a valid legacy address, false otherwise.
 */
declare function isLegacyAddress(address: string): boolean;
/**
 * Checks if a given string is a valid Bitcoin SegWit P2SH address.
 * Starts with '3'.
 * @param address The string to validate.
 * @returns True if it's a valid P2SH address, false otherwise.
 */
declare function isSegwitP2SHAddress(address: string): boolean;
/**
 * Checks if a given string is a valid Bitcoin Bech32 (native SegWit) address.
 * Starts with 'bc1'.
 * @param address The string to validate.
 * @returns True if it's a valid Bech32 address, false otherwise.
 */
declare function isBech32Address(address: string): boolean;
/**
 * Checks if a given string is any type of valid Bitcoin address.
 * This function uses the individual type-specific validators.
 * @param address The string to validate.
 * @returns True if it's any valid Bitcoin address type, false otherwise.
 */
declare function isValidBitcoinAddress(address: string): boolean;
/**
 * Gets detailed validation information for a Bitcoin address.
 * @param address The string to validate.
 * @returns An object conforming to BitcoinAddressDetails.
 */
declare function getBitcoinAddressDetails(address: string): BitcoinAddressDetails;
export { isLegacyAddress, isSegwitP2SHAddress, isBech32Address, isValidBitcoinAddress, getBitcoinAddressDetails, BitcoinAddressDetails };
export default isValidBitcoinAddress;
