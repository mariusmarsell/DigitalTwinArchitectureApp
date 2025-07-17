import React from 'react';
import { controlOptions } from './constants';
import { step3Text } from './textBlocks';

// Step3Control - Select how the product/system is controlled (only shown if a Control function is applicable).
type Step3ControlProps = {
  twinLevel: string;
  controlMethods: string[];
  controlMethodsOther: string;
  handleControlChange: (option: string) => void;
  setControlMethodsOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step3Control: React.FC<Step3ControlProps> = ({
  twinLevel,
  controlMethods,
  controlMethodsOther,
  handleControlChange,
  setControlMethodsOther,
  onBack,
  onNext,
}) => {
  // Filter control options based on twin level.
  let filteredControlOptions = controlOptions;
  if (twinLevel === 'Product Twin') {
    // A product (individual device) twin won't involve certain industrial controllers
    filteredControlOptions = controlOptions.filter(
      (c) => !['CNC', 'RTU', 'PLC', 'PAC', 'MES', 'SCADA', 'DCS'].includes(c)
    );
  } else if (twinLevel === 'System Twin') {
    // A system-level twin might not use low-level device controllers like ECUs, etc.
    filteredControlOptions = controlOptions.filter(
      (c) =>
        ![
          'Drive ECU',
          'Engine Control Unit',
          'Embedded Microcontroller',
        ].includes(c)
    );
  } else if (twinLevel === 'Process Twin') {
    // A process-level twin could involve multiple products, so exclude device-level controllers
    filteredControlOptions = controlOptions.filter(
      (c) =>
        ![
          'Drive ECU',
          'Engine Control Unit',
          'Embedded Microcontroller',
        ].includes(c)
    );
  }

  // Continue if at least one control method is selected or other text is provided
  const canContinue =
    controlMethods.length > 0 || controlMethodsOther.trim() !== '';

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 2.2/10: Control
      </h2>

      {/* Control Question */}
      <div className="question-block">
        <label className="question-label">
          How is your product controlled?
        </label>
        {/* Checkbox options for control */}
        <div className="question-checkbox-group">
          {filteredControlOptions.map((option) => (
            <div key={option} className="question-checkbox-row">
              <input
                type="checkbox"
                id={option}
                checked={controlMethods.includes(option)}
                onChange={() => handleControlChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* Other control method text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={controlMethodsOther}
            onChange={(e) => setControlMethodsOther(e.target.value)}
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
      <div className="info-text-block">{step3Text.controlInfo}</div>
    </div>
  );
};

export default Step3Control;
