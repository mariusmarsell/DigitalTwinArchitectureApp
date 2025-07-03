import React from 'react';
import { functionOptions } from './constants';
import { step2Text } from './textBlocks';

// Step2Functions - Allows user to select the main functions realized by the Digital Twin.
type Step2FunctionsProps = {
  twinLevel: string;
  mainFunctions: string[];
  mainFunctionsOther: string;
  handleFunctionChange: (option: string) => void;
  setMainFunctionsOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step2Functions: React.FC<Step2FunctionsProps> = ({
  twinLevel,
  mainFunctions,
  mainFunctionsOther,
  handleFunctionChange,
  setMainFunctionsOther,
  onBack,
  onNext,
}) => {
  // Filter out "Control" if this is a Parts Twin, since Parts Twin cannot perform control actions.
  const filteredFunctionOptions =
    twinLevel === 'Part Twin'
      ? functionOptions.filter((func) => func !== 'Control')
      : functionOptions;

  // Enable continue if at least one function is selected or an "Other" function is provided
  const canContinue =
    mainFunctions.length > 0 || mainFunctionsOther.trim() !== '';

  return (
    <div>
      <div className="question-block">
        <label className="question-label">
          Which functions are realized by the DT?
        </label>
        <div className="question-checkbox-group">
          {filteredFunctionOptions.map((option) => (
            <div key={option} className="question-checkbox-row">
              <input
                type="checkbox"
                id={option}
                checked={mainFunctions.includes(option)}
                onChange={() => handleFunctionChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* Optional "Other" input for additional function */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={mainFunctionsOther}
            onChange={(e) => setMainFunctionsOther(e.target.value)}
            placeholder="Enter other function..."
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
      <div className="info-text-block">{step2Text.twinFunctionsInfo}</div>
    </div>
  );
};

export default Step2Functions;
