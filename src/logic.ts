// logic.ts

export const getFilteredFunctions = (twinLevel: string, functionOptions: string[]) => {
  if (twinLevel === 'Parts Twin') {
    return functionOptions.filter((f) => f !== 'Control');
  }
  return functionOptions;
};

export const getFilteredControls = (twinLevel: string, controlOptions: string[]) => {
  const filters: Record<string, string[]> = {
    'Product Twin': ['CNC', 'RTU', 'PLC', 'PAC', 'MES', 'SCADA', 'DCS'],
    'System Twin': ['Drive ECU', 'Engine Control Unit', 'Embedded Microcontroller', 'MES', 'SCADA', 'DCS'],
    'Process Twin': ['Drive ECU', 'Engine Control Unit', 'Embedded Microcontroller'],
  };

  const exclusions = filters[twinLevel] || [];
  return controlOptions.filter((option) => !exclusions.includes(option));
};

export const getFilteredDataCollection = (
  twinLevel: string,
  mainFunctions: string[],
  dataCollectionOptions: string[]
) => {
  if (twinLevel !== 'Product Twin' || !mainFunctions.includes('Control')) {
    return dataCollectionOptions.filter((f) => f !== 'Embedded Systems');
  }
  return dataCollectionOptions;
};

export const getFilteredCommunicationProtocols = (
  transmissionTechnologies: string[]
): string[] => {
  const protocolMap: Record<string, string[]> = {
    BLE: ['BLE GATT', 'Other'],
    Zigbee: ['Zigbee Cluster Library', 'Other'],
    WiFi: ['MQTT', 'OPC UA', 'HTTP/REST', 'WebSocket', 'Modbus TCP', 'Other'],
    Ethernet: [
      'MQTT',
      'OPC UA',
      'HTTP/REST',
      'WebSocket',
      'Modbus TCP',
      'Profinet',
      'EtherCAT',
      'Other',
    ],
    'Cellular(4G/LTE/5G)': ['MQTT', 'OPC UA', 'HTTP/REST', 'Other'],
    Other: ['Other'],
  };

  const seen = new Set<string>();
  const result: string[] = [];

  transmissionTechnologies.forEach((tech) => {
    (protocolMap[tech] ?? []).forEach((proto) => {
      if (!seen.has(proto)) {
        seen.add(proto);
        result.push(proto);
      }
    });
  });

  return ['None', ...result];
};

export const getFilteredTwinningEngines = (
  modelTypes: string[]
): string[] => {
  const twinningMap: Record<string, string[]> = {
    'Geometric Models': ['DASSAULT 3DEXPERIENCE', 'AutoDesk Tandem'],
    'Data Driven Models': ['MATLAB/Simulink', 'Azure Digital Twins', 'AWS IoT Twin Maker', 'GE Predix', 'Siemens Mindsphere'],
    'Physics Informed Models': ['Ansys Twin Builder', 'MATLAB/Simulink', 'Azure Digital Twins', 'AWS IoT Twin Maker', 'GE Predix', 'Siemens Mindsphere'],
    'Physics Based Models': ['Ansys Twin Builder', 'COMSOL Multiphysics', 'MATLAB/Simulink', 'Modelica'],
  };

  const seen = new Set<string>();
  const result: string[] = [];

  modelTypes.forEach((type) => {
    (twinningMap[type] ?? []).forEach((engine) => {
      if (!seen.has(engine)) {
        seen.add(engine);
        result.push(engine);
      }
    });
  });

  return ['Own Software/Toolchain', ...result];
};