export type TSimpleDataType = number | string | Number | String;

export interface IKeyValue {
  [key: string]: IKeyValue | TSimpleDataType | TArray;
}

export type TArray = Array<IKeyValue | TSimpleDataType>;

export type TSerializableDataTypes = TSimpleDataType | TArray | IKeyValue;
