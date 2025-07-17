import React from 'react';
import { modelTypeOptions } from './constants';
import { step10Text } from './textBlocks';

// Step10ModelType - Select the types of models used for the Digital Twin (geometric, data-driven, physics-based, etc.)
type Step10ModelTypeProps = {
  modelType: string[];
  modelTypeOther: string;
  handleModelTypeChange: (option: string) => void;
  setModelTypeOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step10ModelType: React.FC<Step10ModelTypeProps> = ({
  modelType,
  modelTypeOther,
  handleModelTypeChange,
  setModelTypeOther,
  onBack,
  onNext
}) => {
  // Continue if at least one model type is selected or Other provided
  const canContinue = modelType.length > 0 || modelTypeOther.trim() !== '';

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 9/10: Models
      </h2>

      {/* Models Question */}
      <div className="question-block">
        <label className="question-label">What types of models do you use for twinning?</label>
        {/* Checkbox options for models */}
        <div className="question-checkbox-group">
          {modelTypeOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={option}
                checked={modelType.includes(option)}
                onChange={() => handleModelTypeChange(option)}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* Other model type text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={modelTypeOther}
            onChange={(e) => setModelTypeOther(e.target.value)}
            placeholder="Other..."
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
      <div className="info-text-block">{step10Text.modelTypeInfo}</div>
    </div>
  );
};

export default Step10ModelType;
