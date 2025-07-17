import React from 'react';
import { step6Text } from './textBlocks';

// Step6Protocols - Select communication protocols used on top of the chosen transmission technologies.
type Step6ProtocolsProps = {
  transmissionTechnologies: string[];
  communicationProtocols: string[];
  communicationProtocolsOther: string;
  handleCommunicationProtocolsChange: (option: string) => void;
  setCommunicationProtocolsOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step6Protocols: React.FC<Step6ProtocolsProps> = ({
  transmissionTechnologies,
  communicationProtocols,
  communicationProtocolsOther,
  handleCommunicationProtocolsChange,
  setCommunicationProtocolsOther,
  onBack,
  onNext,
}) => {
  // Define which protocols go with which transmission tech
  const protocolMap: Record<string, string[]> = {
    BLE: ['BLE GATT'],
    Zigbee: ['Zigbee Cluster Library'],
    WiFi: ['MQTT', 'OPC UA', 'HTTP/REST', 'WebSocket', 'Modbus TCP'],
    Ethernet: [
      'MQTT',
      'OPC UA',
      'HTTP/REST',
      'WebSocket',
      'Modbus TCP',
      'Profinet',
      'EtherCAT',
    ],
    'Cellular(4G/LTE/5G)': ['MQTT', 'OPC UA', 'HTTP/REST'],
    Other: [], // "Other" transmission tech -> protocols not predefined
  };

  // Build the list of protocol options based on selected transmissionTechnologies
  const protocolOptionsSet = new Set<string>();
  transmissionTechnologies.forEach((tech) => {
    const protocols = protocolMap[tech] || [];
    protocols.forEach((proto) => protocolOptionsSet.add(proto));
  });
  // Convert to array and include 'None' as a selectable option
  const protocolOptions = ['None', ...Array.from(protocolOptionsSet)];

  // Continue enabled if at least one protocol is selected or an "Other" protocol is provided
  const canContinue =
    communicationProtocols.length > 0 ||
    communicationProtocolsOther.trim() !== '';

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 5/10: Communication Protocols
      </h2>

      {/* Communication Protocols Question */}
      <div className="question-block">
        <label className="question-label">
          Which communication protocols are used on top of the transmission
          technologies?
        </label>
        {/* Checkbox options for communication protocols */}
        <div className="question-checkbox-group">
          {protocolOptions.map((option) => (
            <div key={option} className="question-checkbox-row">
              <input
                type="checkbox"
                id={option}
                checked={communicationProtocols.includes(option)}
                onChange={() => handleCommunicationProtocolsChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* "Other" protocol text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={communicationProtocolsOther}
            onChange={(e) => setCommunicationProtocolsOther(e.target.value)}
            placeholder="Other..."
            className="w-full border px-2 py-1"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="button-row">
        <button className="button-sm" onClick={onBack}>
          Back
        </button>
        <button className="button-sm" onClick={onNext} disabled={!canContinue}>
          Continue
        </button>
      </div>

      {/* Info Text */}
      <div className="info-text-block">{step6Text.communicationInfo}</div>
    </div>
  );
};

export default Step6Protocols;
