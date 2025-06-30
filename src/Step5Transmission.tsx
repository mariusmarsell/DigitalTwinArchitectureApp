import React from 'react';
import { transmissionTechnologiesOptions } from './constants';
import { step5Text } from './textBlocks';

// Step5Transmission - Select data transmission technologies used for the Digital Twin.
type Step5TransmissionProps = {
  transmissionTechnologies: string[];
  transmissionTechnologiesOther: string;
  handleTransmissionTechnologiesChange: (option: string) => void;
  setTransmissionTechnologiesOther: React.Dispatch<
    React.SetStateAction<string>
  >;
  onBack: () => void;
  onNext: () => void;
};

const Step5Transmission: React.FC<Step5TransmissionProps> = ({
  transmissionTechnologies,
  transmissionTechnologiesOther,
  handleTransmissionTechnologiesChange,
  setTransmissionTechnologiesOther,
  onBack,
  onNext,
}) => {
  // Enable continue if at least one technology is checked or an "Other" value is provided
  const canContinue =
    transmissionTechnologies.length > 0 ||
    transmissionTechnologiesOther.trim() !== '';

  return (
    <div>
      <div className="question-block">
        <label className="question-label">
          Which data transmission technologies are used in the Digital Twin?
        </label>
        <div className="question-checkbox-group">
          {transmissionTechnologiesOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={option}
                checked={transmissionTechnologies.includes(option)}
                onChange={() => handleTransmissionTechnologiesChange(option)}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* "Other" transmission tech text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={transmissionTechnologiesOther}
            onChange={(e) => setTransmissionTechnologiesOther(e.target.value)}
            placeholder="Enter other transmission technology..."
            className="w-full border px-2 py-1"
          />
        </div>
      </div>

      <div className="button-row">
        <button className="button-sm" onClick={onBack}>
          Back
        </button>
        <button className="button-sm" onClick={onNext} disabled={!canContinue}>
          Continue
        </button>
      </div>

      {/* Info Text */}
      <div className="info-text-block">{step5Text.transmissionInfo}</div>
    </div>
  );
};

export default Step5Transmission;
