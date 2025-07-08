import React from 'react';
import { dataPreprocessingOptions } from './constants';
import { step7Text } from './textBlocks';

// Step7Preprocessing - Select any preprocessing steps applied to raw data before use in the Digital Twin.
type Step7PreprocessingProps = {
  dataPreprocessing: string[];
  dataPreprocessingOther: string;
  handleDataPreprocessingChange: (option: string) => void;
  setDataPreprocessingOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step7Preprocessing: React.FC<Step7PreprocessingProps> = ({
  dataPreprocessing,
  dataPreprocessingOther,
  handleDataPreprocessingChange,
  setDataPreprocessingOther,
  onBack,
  onNext
}) => {
  // Continue if at least one preprocessing option is selected or "Other" text is given
  const canContinue = dataPreprocessing.length > 0 || dataPreprocessingOther.trim() !== '';

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 6: Data preprocessing
      </h2>

      {/* Data Preprocessing Question */}
      <div className="question-block">
        <label className="question-label">What preprocessing of raw data takes place before it is used in the Digital Twin?</label>
        {/* Checkbox options for data preprocessing */}
        <div className="question-checkbox-group">
          {dataPreprocessingOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={option}
                checked={dataPreprocessing.includes(option)}
                onChange={() => handleDataPreprocessingChange(option)}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* Other preprocessing step text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={dataPreprocessingOther}
            onChange={(e) => setDataPreprocessingOther(e.target.value)}
            placeholder="Enter other preprocessing option..."
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
      <div className="info-text-block">{step7Text.preprocessingInfo}</div>
    </div>
  );
};

export default Step7Preprocessing;
