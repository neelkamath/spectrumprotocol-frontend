/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>
 */
export type Binary = string;
export type PollStatus = "in_progress" | "passed" | "rejected" | "executed" | "failed";

export interface PollResponse {
  creator: string;
  deposit_amount: Uint128;
  description: string;
  end_time: number;
  execute_data?: PollExecuteMsg[] | null;
  id: number;
  link?: string | null;
  no_votes: Uint128;
  staked_amount?: Uint128 | null;
  status: PollStatus;
  title: string;
  total_balance_at_end_poll?: Uint128 | null;
  yes_votes: Uint128;
  [k: string]: unknown;
}
export interface PollExecuteMsg {
  contract: string;
  msg: Binary;
  order: number;
  [k: string]: unknown;
}
