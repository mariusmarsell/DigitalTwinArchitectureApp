import React, { useState } from 'react';
import Step1TwinLevel from './Step1TwinLevel';
import Step2Functions from './Step2Functions';
import Step3Control from './Step3Control';
import Step4DataCollection from './Step4DataCollection';
import Step5Transmission from './Step5Transmission';
import Step6Protocols from './Step6Protocols';
import Step7Preprocessing from './Step7Preprocessing';
import Step8DataStorage from './Step8DataStorage';
import Step9Infrastructure from './Step9Infrastructure';
import Step10ModelType from './Step10ModelType';
import Step11TwinningEngine from './Step11TwinningEngine';
import Step12StaticDiagram from './Step12StaticDiagram';

export default function DigitalTwinConfigurator() {
  // State variables to hold answers for each step
  const [twinLevel, setTwinLevel] = useState<string>('');
  const [lifeCycleStages, setLifeCycleStages] = useState<string[]>([]);
  const [lifeCycleOther, setLifeCycleOther] = useState<string>('');

  const [mainFunctions, setMainFunctions] = useState<string[]>([]);
  const [mainFunctionsOther, setMainFunctionsOther] = useState<string>('');

  const [controlMethods, setControlMethods] = useState<string[]>([]);
  const [controlMethodsOther, setControlMethodsOther] = useState<string>('');

  const [dataCollection, setDataCollection] = useState<string[]>([]);
  const [dataCollectionOther, setDataCollectionOther] = useState<string>('');
  const [enterpriseSystemsDetail, setEnterpriseSystemsDetail] =
    useState<string>('');

  const [transmissionTechnologies, setTransmissionTechnologies] = useState<
    string[]
  >([]);
  const [transmissionTechnologiesOther, setTransmissionTechnologiesOther] =
    useState<string>('');

  const [communicationProtocols, setCommunicationProtocols] = useState<
    string[]
  >([]);
  const [communicationProtocolsOther, setCommunicationProtocolsOther] =
    useState<string>('');

  const [dataPreprocessing, setDataPreprocessing] = useState<string[]>([]);
  const [dataPreprocessingOther, setDataPreprocessingOther] =
    useState<string>('');

  const [dataStorage, setDataStorage] = useState<string[]>([]);
  const [dataStorageOther, setDataStorageOther] = useState<string>('');

  const [infrastructure, setInfrastructure] = useState<string[]>([]);
  const [infrastructureOther, setInfrastructureOther] = useState<string>('');

  const [modelType, setModelType] = useState<string[]>([]);
  const [modelTypeOther, setModelTypeOther] = useState<string>('');

  const [twinningEngine, setTwinningEngine] = useState<string[]>([]);
  const [twinningEngineOther, setTwinningEngineOther] = useState<string>('');

  // Step management state
  const [step, setStep] = useState<number>(1);
  const [previousStep, setPreviousStep] = useState<number | null>(null);

  // Generic handler to toggle selection in a checkbox list (for multi-select fields)
  const toggleSelection = (
    option: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Specific handlers for each multi-select, using the generic toggleSelection
  const handleLifeCycleChange = (option: string) =>
    toggleSelection(option, setLifeCycleStages);
  const handleFunctionChange = (option: string) =>
    toggleSelection(option, setMainFunctions);
  const handleControlChange = (option: string) =>
    toggleSelection(option, setControlMethods);
  const handleDataCollectionChange = (option: string) =>
    toggleSelection(option, setDataCollection);
  const handleTransmissionTechnologiesChange = (option: string) =>
    toggleSelection(option, setTransmissionTechnologies);
  const handleCommunicationProtocolsChange = (option: string) =>
    toggleSelection(option, setCommunicationProtocols);
  const handleDataPreprocessingChange = (option: string) =>
    toggleSelection(option, setDataPreprocessing);
  const handleDataStorageChange = (option: string) =>
    toggleSelection(option, setDataStorage);
  const handleInfrastructureChange = (option: string) =>
    toggleSelection(option, setInfrastructure);
  const handleModelTypeChange = (option: string) =>
    toggleSelection(option, setModelType);
  const handleTwinningEngineChange = (option: string) =>
    toggleSelection(option, setTwinningEngine);

  // Function to reset the entire form (start over)
  const resetForm = () => {
    // Clear all answers back to initial state
    setTwinLevel('');
    setLifeCycleStages([]);
    setLifeCycleOther('');
    setMainFunctions([]);
    setMainFunctionsOther('');
    setControlMethods([]);
    setControlMethodsOther('');
    setDataCollection([]);
    setDataCollectionOther('');
    setEnterpriseSystemsDetail('');
    setTransmissionTechnologies([]);
    setTransmissionTechnologiesOther('');
    setCommunicationProtocols([]);
    setCommunicationProtocolsOther('');
    setDataPreprocessing([]);
    setDataPreprocessingOther('');
    setDataStorage([]);
    setDataStorageOther('');
    setInfrastructure([]);
    setInfrastructureOther('');
    setModelType([]);
    setModelTypeOther('');
    setTwinningEngine([]);
    setTwinningEngineOther('');
    // Reset step navigation
    setStep(1);
    setPreviousStep(null);
  };

  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-xl font-bold">Digital Twin Configuration</h1>

      {/* Step 1: Twin Level Selection */}
      {step === 1 && (
        <Step1TwinLevel
          twinLevel={twinLevel}
          setTwinLevel={setTwinLevel}
          lifeCycleStages={lifeCycleStages}
          lifeCycleOther={lifeCycleOther}
          handleLifeCycleChange={handleLifeCycleChange}
          setLifeCycleOther={setLifeCycleOther}
          onNext={() => setStep(2)}
        />
      )}

      {/* Step 2: Main Functions Selection */}
      {step === 2 && (
        <Step2Functions
          twinLevel={twinLevel}
          mainFunctions={mainFunctions}
          mainFunctionsOther={mainFunctionsOther}
          handleFunctionChange={handleFunctionChange}
          setMainFunctionsOther={setMainFunctionsOther}
          onBack={() => setStep(1)}
          onNext={() => {
            // Determine next step based on selections in Step 2:
            if (twinLevel === 'Part Twin') {
              // Part Twin cannot have a Control step, skip to step 4
              setPreviousStep(2);
              setStep(4);
            } else if (mainFunctions.includes('Control')) {
              // If "Control" function is selected, proceed to Control step (step 3)
              setStep(3);
            } else {
              // Otherwise, skip the Control step as it's not needed
              setPreviousStep(2);
              setStep(4);
            }
          }}
        />
      )}

      {/* Step 3: Control Methods (only if a Control function is needed) */}
      {step === 3 && (
        <Step3Control
          twinLevel={twinLevel}
          controlMethods={controlMethods}
          controlMethodsOther={controlMethodsOther}
          handleControlChange={handleControlChange}
          setControlMethodsOther={setControlMethodsOther}
          onBack={() => setStep(2)}
          onNext={() => {
            // After Control step, always go to Data Collection (step 4)
            setPreviousStep(3);
            setStep(4);
          }}
        />
      )}

      {/* Step 4: Data Collection Sources */}
      {step === 4 && (
        <Step4DataCollection
          dataCollection={dataCollection}
          dataCollectionOther={dataCollectionOther}
          enterpriseSystemsDetail={enterpriseSystemsDetail}
          handleDataCollectionChange={handleDataCollectionChange}
          setDataCollectionOther={setDataCollectionOther}
          setEnterpriseSystemsDetail={setEnterpriseSystemsDetail}
          previousStep={previousStep}
          onBack={() => {
            // Use previousStep to decide where to go back (step 2 or 3)
            if (previousStep === 2) {
              setStep(2);
            } else if (previousStep === 3) {
              setStep(3);
            } else {
              setStep(1);
            }
          }}
          onNext={() => setStep(5)}
        />
      )}

      {/* Step 5: Data Transmission Technologies */}
      {step === 5 && (
        <Step5Transmission
          transmissionTechnologies={transmissionTechnologies}
          transmissionTechnologiesOther={transmissionTechnologiesOther}
          handleTransmissionTechnologiesChange={
            handleTransmissionTechnologiesChange
          }
          setTransmissionTechnologiesOther={setTransmissionTechnologiesOther}
          onBack={() => setStep(4)}
          onNext={() => setStep(6)}
        />
      )}

      {/* Step 6: Communication Protocols */}
      {step === 6 && (
        <Step6Protocols
          transmissionTechnologies={transmissionTechnologies}
          communicationProtocols={communicationProtocols}
          communicationProtocolsOther={communicationProtocolsOther}
          handleCommunicationProtocolsChange={
            handleCommunicationProtocolsChange
          }
          setCommunicationProtocolsOther={setCommunicationProtocolsOther}
          onBack={() => setStep(5)}
          onNext={() => setStep(7)}
        />
      )}

      {/* Step 7: Data Preprocessing */}
      {step === 7 && (
        <Step7Preprocessing
          dataPreprocessing={dataPreprocessing}
          dataPreprocessingOther={dataPreprocessingOther}
          handleDataPreprocessingChange={handleDataPreprocessingChange}
          setDataPreprocessingOther={setDataPreprocessingOther}
          onBack={() => setStep(6)}
          onNext={() => setStep(8)}
        />
      )}

      {/* Step 8: Data Storage */}
      {step === 8 && (
        <Step8DataStorage
          dataStorage={dataStorage}
          dataStorageOther={dataStorageOther}
          handleDataStorageChange={handleDataStorageChange}
          setDataStorageOther={setDataStorageOther}
          onBack={() => setStep(7)}
          onNext={() => setStep(9)}
        />
      )}

      {/* Step 9: IT Infrastructure */}
      {step === 9 && (
        <Step9Infrastructure
          infrastructure={infrastructure}
          infrastructureOther={infrastructureOther}
          handleInfrastructureChange={handleInfrastructureChange}
          setInfrastructureOther={setInfrastructureOther}
          onBack={() => setStep(8)}
          onNext={() => setStep(10)}
        />
      )}

      {/* Step 10: Model Types */}
      {step === 10 && (
        <Step10ModelType
          modelType={modelType}
          modelTypeOther={modelTypeOther}
          handleModelTypeChange={handleModelTypeChange}
          setModelTypeOther={setModelTypeOther}
          onBack={() => setStep(9)}
          onNext={() => setStep(11)}
        />
      )}

      {/* Step 11: Twinning Engine/Environment */}
      {step === 11 && (
        <Step11TwinningEngine
          modelType={modelType}
          twinningEngine={twinningEngine}
          twinningEngineOther={twinningEngineOther}
          handleTwinningEngineChange={handleTwinningEngineChange}
          setTwinningEngineOther={setTwinningEngineOther}
          onBack={() => setStep(10)}
          onNext={() => setStep(12)}
        />
      )}

      {/* Step 12: Summary/Completion (optional final step) */}
      {step === 12 && (
        <Step12StaticDiagram
          config={{
            twinLevel,
            lifeCycleStages,
            lifeCycleOther,
            mainFunctions,
            mainFunctionsOther,
            controlMethods,
            controlMethodsOther,
            dataCollection,
            dataCollectionOther,
            enterpriseSystemsDetail,
            transmissionTechnologies,
            transmissionTechnologiesOther,
            communicationProtocols,
            communicationProtocolsOther,
            dataPreprocessing,
            dataPreprocessingOther,
            dataStorage,
            dataStorageOther,
            infrastructure,
            infrastructureOther,
            modelType,
            modelTypeOther,
            twinningEngine,
            twinningEngineOther,
          }}
          onReset={resetForm}
        />
      )}
    </div>
  );
}
