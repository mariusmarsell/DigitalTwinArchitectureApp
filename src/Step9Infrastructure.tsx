import React from 'react';
import { infrastructureOptions } from './constants';
import { step9Text } from './textBlocks';

// Step9Infrastructure - Select which IT infrastructure is used to run the Digital Twin models.
type Step9InfrastructureProps = {
  infrastructure: string[];
  infrastructureOther: string;
  handleInfrastructureChange: (option: string) => void;
  setInfrastructureOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step9Infrastructure: React.FC<Step9InfrastructureProps> = ({
  infrastructure,
  infrastructureOther,
  handleInfrastructureChange,
  setInfrastructureOther,
  onBack,
  onNext
}) => {
  // Continue if at least one infrastructure is selected or Other provided
  const canContinue = infrastructure.length > 0 || infrastructureOther.trim() !== '';

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 8: IT infrastructure
      </h2>

      {/* IT Infrastructure Question */}
      <div className="question-block">
        <label className="question-label">What IT infrastructure is used to run the Digital Twin models?</label>
        {/* Checkbox options for it infrastructure */}
        <div className="question-checkbox-group">
          {infrastructureOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={option}
                checked={infrastructure.includes(option)}
                onChange={() => handleInfrastructureChange(option)}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* Other infrastructure text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={infrastructureOther}
            onChange={(e) => setInfrastructureOther(e.target.value)}
            placeholder="Enter other infrastructure option..."
            className="w-full border px-2 py-1"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="button-row">
        <button className="button-sm" onClick={onBack}>Back</button>
        <button className="button-sm" onClick={onNext} disabled={!canContinue}>
          Continue
        </button>
      </div>

      {/* Info Text */}
      <div className="info-text-block">{step9Text.infrastructureInfo}</div>
    </div>
  );
};

export default Step9Infrastructure;
