import { useState } from 'react';

export const useTwinConfigState = () => {
  const [step, setStep] = useState(1);
  const [previousStep, setPreviousStep] = useState<number | null>(null);

  const [twinLevel, setTwinLevel] = useState('');
  const [lifeCycleStages, setLifeCycleStages] = useState<string[]>([]);
  const [lifeCycleOther, setLifeCycleOther] = useState('');

  const [mainFunctions, setMainFunctions] = useState<string[]>([]);
  const [mainFunctionsOther, setMainFunctionsOther] = useState('');

  const [controlMethods, setControlMethods] = useState<string[]>([]);
  const [controlMethodsOther, setControlMethodsOther] = useState('');

  const [dataCollection, setDataCollection] = useState<string[]>([]);
  const [dataCollectionOther, setDataCollectionOther] = useState('');
  const [enterpriseSystemsDetail, setEnterpriseSystemsDetail] = useState('');

  const [transmissionTechnologies, setTransmissionTechnologies] = useState<
    string[]
  >([]);
  const [transmissionTechnologiesOther, setTransmissionTechnologiesOther] =
    useState('');

  const [communicationProtocols, setCommunicationProtocols] = useState<
    string[]
  >([]);
  const [communicationProtocolsOther, setCommunicationProtocolsOther] =
    useState('');

  const [dataPreprocessing, setDataPreprocessing] = useState<string[]>([]);
  const [dataPreprocessingOther, setDataPreprocessingOther] = useState('');

  const [dataStorage, setDataStorage] = useState<string[]>([]);
  const [dataStorageOther, setDataStorageOther] = useState('');

  const [infrastructure, setInfrastructure] = useState<string[]>([]);
  const [infrastructureOther, setInfrastructureOther] = useState('');

  const [modelType, setModelType] = useState<string[]>([]);
  const [modelTypeOther, setModelTypeOther] = useState('');

  const [twinningEngine, setTwinningEngine] = useState<string[]>([]);
  const [twinningEngineOther, setTwinningEngineOther] = useState('');

  return {
    // Step control
    step,
    setStep,
    previousStep,
    setPreviousStep,

    // Core config state
    twinLevel,
    setTwinLevel,
    lifeCycleStages,
    setLifeCycleStages,
    lifeCycleOther,
    setLifeCycleOther,

    mainFunctions,
    setMainFunctions,
    mainFunctionsOther,
    setMainFunctionsOther,

    controlMethods,
    setControlMethods,
    controlMethodsOther,
    setControlMethodsOther,

    dataCollection,
    setDataCollection,
    dataCollectionOther,
    setDataCollectionOther,
    enterpriseSystemsDetail,
    setEnterpriseSystemsDetail,

    transmissionTechnologies,
    setTransmissionTechnologies,
    transmissionTechnologiesOther,
    setTransmissionTechnologiesOther,

    communicationProtocols,
    setCommunicationProtocols,
    communicationProtocolsOther,
    setCommunicationProtocolsOther,

    dataPreprocessing,
    setDataPreprocessing,
    dataPreprocessingOther,
    setDataPreprocessingOther,

    dataStorage,
    setDataStorage,
    dataStorageOther,
    setDataStorageOther,

    infrastructure,
    setInfrastructure,
    infrastructureOther,
    setInfrastructureOther,

    modelType,
    setModelType,
    modelTypeOther,
    setModelTypeOther,

    twinningEngine,
    setTwinningEngine,
    twinningEngineOther,
    setTwinningEngineOther,
  };
};
