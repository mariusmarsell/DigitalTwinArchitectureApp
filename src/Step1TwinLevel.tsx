import React from 'react';
import { lifeCycleOptions } from './constants';
import { step1Text } from './textBlocks';
import twinLevelDiagram from './DigitalTwinImage.png';

// Step1TwinLevel - Handles selecting the Digital Twin level and applicable life cycle stages.
type Step1TwinLevelProps = {
  twinLevel: string;
  setTwinLevel: React.Dispatch<React.SetStateAction<string>>;
  lifeCycleStages: string[];
  lifeCycleOther: string;
  handleLifeCycleChange: (option: string) => void;
  setLifeCycleOther: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
};

const Step1TwinLevel: React.FC<Step1TwinLevelProps> = ({
  twinLevel,
  setTwinLevel,
  lifeCycleStages,
  lifeCycleOther,
  handleLifeCycleChange,
  setLifeCycleOther,
  onNext,
}) => {
  // "Continue" is enabled only if a twin level is selected AND at least one lifecycle stage (or Other text) is provided
  const canContinue =
    twinLevel !== '' &&
    (lifeCycleStages.length > 0 || lifeCycleOther.trim() !== '');

  return (
    <div>
      {/* Twin Level Question */}
      <div className="question-block">
        <label className="question-label">
          Which Twin Level is being developed?
        </label>
        <select
          value={twinLevel}
          onChange={(e) => setTwinLevel(e.target.value)}
          className="question-select"
        >
          <option value="">-- Select Twin Level --</option>
          <option value="Part Twin">Part Twin</option>
          <option value="Product Twin">Product Twin</option>
          <option value="System Twin">System Twin</option>
          <option value="Process Twin">Process Twin</option>
        </select>
      </div>

      {/* Life Cycle Integration Question */}
      <div className="question-block">
        <label className="question-label">
          In which part of the life cycle is the Digital Twin being used?
        </label>
        <div className="question-checkbox-group">
          {/* Checkbox options for life cycle stages */}
          {lifeCycleOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={option}
                checked={lifeCycleStages.includes(option)}
                onChange={() => handleLifeCycleChange(option)}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* "Other" text input for life cycle stage not listed */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={lifeCycleOther}
            onChange={(e) => setLifeCycleOther(e.target.value)}
            placeholder="Enter other stage..."
            className="w-full border px-2 py-1"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="button-row">
        {/* No "Back" button on the first step */}
        <button className="button-sm" onClick={onNext} disabled={!canContinue}>
          Continue
        </button>
      </div>

      {/* Info Text */}
      <div className="info-text-block">{step1Text.twinLevelInfo}</div>
      <div className="info-text-block">{step1Text.lifeCycleInfo}</div>

      {/* Image */}
      <div className="twin-diagram-block">
        <div>Composition of a Ditial Twin</div>
        <img src={twinLevelDiagram} alt="Twin Level Diagram" />
      </div>
    </div>
  );
};

export default Step1TwinLevel;
