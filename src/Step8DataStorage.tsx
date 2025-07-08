import React from 'react';
import { dataStorageOptions } from './constants';
import { step8Text } from './textBlocks';

// Step8DataStorage - Select where the Digital Twin's data is stored.
type Step8DataStorageProps = {
  dataStorage: string[];
  dataStorageOther: string;
  handleDataStorageChange: (option: string) => void;
  setDataStorageOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step8DataStorage: React.FC<Step8DataStorageProps> = ({
  dataStorage,
  dataStorageOther,
  handleDataStorageChange,
  setDataStorageOther,
  onBack,
  onNext
}) => {
  // Continue if at least one storage option selected or Other provided
  const canContinue = dataStorage.length > 0 || dataStorageOther.trim() !== '';

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 7: Data storage
      </h2>

      {/* Data Storage Question */}
      <div className="question-block">
        <label className="question-label">Where is the data of the Digital Twin stored?</label>
        {/* Checkbox options for data storage */}
        <div className="question-checkbox-group">
          {dataStorageOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={option}
                checked={dataStorage.includes(option)}
                onChange={() => handleDataStorageChange(option)}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* Other storage option text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={dataStorageOther}
            onChange={(e) => setDataStorageOther(e.target.value)}
            placeholder="Enter other storage option..."
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
      <div className="info-text-block">{step8Text.dataStorageInfo}</div>
    </div>
  );
};

export default Step8DataStorage;
