import React from 'react';
import { dataCollectionOptions } from './constants';
import { getStep4Text } from './textBlocks';

// Step4DataCollection - Select where the data for the Digital Twin is collected from.
type Step4DataCollectionProps = {
  twinLevel: string;
  dataCollection: string[];
  dataCollectionOther: string;
  enterpriseSystemsDetail: string;
  handleDataCollectionChange: (option: string) => void;
  setDataCollectionOther: React.Dispatch<React.SetStateAction<string>>;
  setEnterpriseSystemsDetail: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
  onNext: () => void;
  previousStep: number | null;
};

const Step4DataCollection: React.FC<Step4DataCollectionProps> = ({
  twinLevel,
  dataCollection,
  dataCollectionOther,
  enterpriseSystemsDetail,
  handleDataCollectionChange,
  setDataCollectionOther,
  setEnterpriseSystemsDetail,
  onBack,
  onNext,
}) => {

  // Filter data collection options: exclude "Embedded Systems" unless this is a Product Twin *with* Control functionality.
  const filteredDataCollectionOptions =
    twinLevel == 'Part Twin'
      ? dataCollectionOptions.filter((source) => source !== 'Embedded Systems')
      : dataCollectionOptions;

  // Check if "Enterprise Systems" is one of the selected sources
  const enterpriseSelected = dataCollection.includes('Enterprise Systems');

  // Continue is allowed if:
  // - at least one source is selected or "Other" text provided
  // - if Enterprise Systems is selected, the detail field is not empty
  const canContinue =
    (dataCollection.length > 0 || dataCollectionOther.trim() !== '') &&
    (!enterpriseSelected || enterpriseSystemsDetail.trim() !== '');

  return (
    <div>
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Step 3: Data Collection
      </h2>

      {/* Data collection Question */}
      <div className="question-block">
        <label className="question-label">
          Where is the data for your twin collected from?
        </label>
        {/* Checkbox options for data collection */}
        <div className="question-checkbox-group">
          {filteredDataCollectionOptions.map((option) => (
            <div key={option} className="question-checkbox-row">
              <input
                type="checkbox"
                id={option}
                checked={dataCollection.includes(option)}
                onChange={() => handleDataCollectionChange(option)}
              />
              <label htmlFor={option}>{option}</label>
              {/* If "Enterprise Systems" is selected, show an extra input to specify details */}
              {option === 'Enterprise Systems' &&
                dataCollection.includes('Enterprise Systems') && (
                  <input
                    type="text"
                    value={enterpriseSystemsDetail}
                    onChange={(e) => setEnterpriseSystemsDetail(e.target.value)}
                    placeholder="Specify..."
                    className="mt-2 w-full border px-2 py-1"
                  />
                )}
            </div>
          ))}
        </div>
        {/* "Other" source text input */}
        <div className="question-checkbox-row">
          <label className="block mb-1">Other:</label>
          <input
            type="text"
            value={dataCollectionOther}
            onChange={(e) => setDataCollectionOther(e.target.value)}
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
      <div className="info-text-block">{getStep4Text(twinLevel).dataSourceInfo}</div>
    </div>
  );
};

export default Step4DataCollection;
