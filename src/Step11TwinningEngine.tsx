import React from 'react';
import { step11Text } from './textBlocks';

// Step11TwinningEngine - Select the twinning engine or simulation environment used for the Digital Twin.
type Step11TwinningEngineProps = {
  modelType: string[];
  twinningEngine: string[];
  twinningEngineOther: string;
  handleTwinningEngineChange: (option: string) => void;
  setTwinningEngineOther: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
};

const Step11TwinningEngine: React.FC<Step11TwinningEngineProps> = ({
  modelType,
  twinningEngine,
  twinningEngineOther,
  handleTwinningEngineChange,
  setTwinningEngineOther,
  onBack,
  onNext,
}) => {
  // Map model types to potential twinning engines/platforms
  const twinningMap: Record<string, string[]> = {
    'Geometric Models': ['DASSAULT 3DEXPERIENCE', 'AutoDesk Tandem'],
    'Data Driven Models': [
      'MATLAB/Simulink',
      'Azure Digital Twins',
      'AWS IoT Twin Maker',
      'GE Predix',
      'Siemens Mindsphere',
    ],
    'Physics Informed Models': [
      'Ansys Twin Builder',
      'MATLAB/Simulink',
      'Azure Digital Twins',
      'AWS IoT Twin Maker',
      'GE Predix',
      'Siemens Mindsphere',
    ],
    'Physics Based Models': [
      'Ansys Twin Builder',
      'COMSOL Multiphysics',
      'MATLAB/Simulink',
      'Modelica',
    ],
  };

  // Aggregate engine options based on selected model types (avoid duplicates)
  const engineOptionsSet = new Set<string>();
  modelType.forEach((type) => {
    const engines = twinningMap[type] || [];
    engines.forEach((engine) => engineOptionsSet.add(engine));
  });
  const engineOptions = [
    'Own Software/Toolchain',
    ...Array.from(engineOptionsSet),
  ];

  // Continue (Finish) enabled if at least one engine is selected or Other provided
  const canContinue =
    twinningEngine.length > 0 || twinningEngineOther.trim() !== '';

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 10/10: Twinning Engine
      </h2>

      {/* Twinning Engine Question */}
      <div className="question-block">
        <label className="question-label">
          What twinning engine or simulation environment do you use to implement
          and run your Digital Twin?
        </label>
        {/* Checkbox options for twinning engine */}
        <div className="question-checkbox-group">
          {engineOptions.map((option) => (
            <div key={option} className="question-checkbox-row">
              <input
                type="checkbox"
                id={option}
                checked={twinningEngine.includes(option)}
                onChange={() => handleTwinningEngineChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        {/* Other twinning engine text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={twinningEngineOther}
            onChange={(e) => setTwinningEngineOther(e.target.value)}
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
          Finish
        </button>
      </div>

      {/* Info Text */}
      <div className="info-text-block">{step11Text.twinningEngineInfo}</div>
    </div>
  );
};

export default Step11TwinningEngine;
