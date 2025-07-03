// types.ts

// --- Primitive types (option value types)
export type TwinLevel =
  | 'Part Twin'
  | 'Product Twin'
  | 'System Twin'
  | 'Process Twin';

export type TransmissionTechnology =
  | 'BLE'
  | 'Zigbee'
  | 'WiFi'
  | 'Ethernet'
  | 'Cellular(4G/LTE/5G)'
  | 'Other';

export type CommunicationProtocol =
  | 'BLE GATT'
  | 'Zigbee Cluster Library'
  | 'MQTT'
  | 'OPC UA'
  | 'HTTP/REST'
  | 'WebSocket'
  | 'Modbus TCP'
  | 'Profinet'
  | 'EtherCAT'
  | 'Other'
  | 'None';

export type ModelType =
  | 'Geometric Models'
  | 'Data Driven Models'
  | 'Physics Informed Models'
  | 'Physics Based Models';

// --- Main state container type
export interface TwinConfigState {
  step: number;
  previousStep: number | null;

  twinLevel: TwinLevel | '';
  lifeCycleStages: string[];
  lifeCycleOther: string;

  mainFunctions: string[];
  mainFunctionsOther: string;

  controlMethods: string[];
  controlMethodsOther: string;

  dataCollection: string[];
  dataCollectionOther: string;
  enterpriseSystemsDetail: string;

  transmissionTechnologies: TransmissionTechnology[];
  transmissionTechnologiesOther: string;

  communicationProtocols: CommunicationProtocol[];
  communicationProtocolsOther: string;

  dataPreprocessing: string[];
  dataPreprocessingOther: string;

  dataStorage: string[];
  dataStorageOther: string;

  infrastructure: string[];
  infrastructureOther: string;

  modelType: ModelType[];
  modelTypeOther: string;

  twinningEngine: string[];
  twinningEngineOther: string;
}
