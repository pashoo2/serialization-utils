[@pashoo2/serialization-utils](README.md) / Exports

# @pashoo2/serialization-utils

## Table of contents

### Interfaces

- [IKeyValue](interfaces/ikeyvalue.md)

### Type aliases

- [TArray](modules.md#tarray)
- [TSerializableDataTypes](modules.md#tserializabledatatypes)
- [TSimpleDataType](modules.md#tsimpledatatype)

### Functions

- [stringify](modules.md#stringify)

## Type aliases

### TArray

Ƭ **TArray**: ([`IKeyValue`](interfaces/ikeyvalue.md) \| [`TSimpleDataType`](modules.md#tsimpledatatype))[]

#### Defined in

types.ts:7

___

### TSerializableDataTypes

Ƭ **TSerializableDataTypes**: [`TSimpleDataType`](modules.md#tsimpledatatype) \| [`TArray`](modules.md#tarray) \| [`IKeyValue`](interfaces/ikeyvalue.md)

#### Defined in

types.ts:9

___

### TSimpleDataType

Ƭ **TSimpleDataType**: `number` \| `string` \| `Number` \| `String`

#### Defined in

types.ts:1

## Functions

### stringify

▸ **stringify**(`data`): `string`

Stringify a data passed in props.
For an object and array value always do a deep sort of it's keys before stringify.
So comparison of objects or arrays can be done also by comparison of it's
stringified versions.

**`export`**

**`throws`** - if a data passed as a parameters has an unsupported type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`TSerializableDataTypes`](modules.md#tserializabledatatypes) | string, number, key-value or an array |

#### Returns

`string`

- data stringified

#### Defined in

utils.ts:16
