import { ArcherContainer, ArcherElement } from 'react-archer';
import DigitalTwinBox from './Step12BoxLayout';

type DigitalTwinConfig = {
  dataCollection: string[];
  dataCollectionOther: string;
  dataStorage: string[];
  dataStorageOther: string;
  enterpriseSystemsDetail: string;
  dataPreprocessing: string[];
  dataPreprocessingOther: string;
  mainFunctions: string[];
  mainFunctionsOther: string;
  twinningEngine: string[];
  twinningEngineOther: string;
  modelType: string[];
  modelTypeOther: string;
  transmissionTechnologies: string[];
  transmissionTechnologiesOther: string;
  communicationProtocols: string[];
  communicationProtocolsOther: string;
  infrastructure: string[];
  infrastructureOther: string;
  controlMethods: string[];
  controlMethodsOther: string;
  twinLevel: string;
  lifeCycleStages: string[];
  lifeCycleOther: string;
};

export default function DigitalTwinStaticDiagram({
  config,
  onReset,
}: {
  config: DigitalTwinConfig;
  onReset: () => void;
}) {
  const mergeWithOther = (arr: string[], other: string) => [
    ...arr,
    ...(other?.trim() ? [other.trim()] : []),
  ];
  function getTwinTitle(twinLevel: string): string {
    if (twinLevel === 'Product Twin') return 'Product';
    if (twinLevel === 'System Twin') return 'System';
    if (twinLevel === 'Process Twin') return 'Process';

    return 'Unknown';
  }
  const dataCollection = mergeWithOther(
    config.dataCollection,
    config.dataCollectionOther
  );
  const dataStorage = mergeWithOther(
    config.dataStorage,
    config.dataStorageOther
  );
  const transmission = mergeWithOther(
    config.transmissionTechnologies,
    config.transmissionTechnologiesOther
  );
  const preprocessing = mergeWithOther(
    config.dataPreprocessing,
    config.dataPreprocessingOther
  );
  const control = mergeWithOther(
    config.controlMethods,
    config.controlMethodsOther
  );
  const infra = mergeWithOther(
    config.infrastructure,
    config.infrastructureOther
  );
  const protocols = mergeWithOther(
    config.communicationProtocols,
    config.communicationProtocolsOther
  );
  const functions = mergeWithOther(
    config.mainFunctions,
    config.mainFunctionsOther
  );
  const engines = mergeWithOther(
    config.twinningEngine,
    config.twinningEngineOther
  );
  const models = mergeWithOther(config.modelType, config.modelTypeOther);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {/* Step information */}
      <h2 className="text-lg font-semibold mb-4">
        Final Result
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ArcherContainer strokeColor="black" strokeWidth={1.5} noCurves>
          <div
            style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                marginTop: '100px',
              }}
            >
              {/* Left side: Data Sources */}
              <ArcherElement
                id="source-box"
                relations={[
                  {
                    targetId: 'data-repo',
                    sourceAnchor: 'right',
                    targetAnchor: 'left',
                  },
                ]}
              >
                <div>
                  <DigitalTwinBox
                    title="Data Sources"
                    primaryItems={dataCollection}
                    subtitle="Transmitted over"
                    secondaryItems={transmission}
                    thirdTitle="Using the following protocols"
                    thirdItems={protocols}
                  />
                </div>
              </ArcherElement>

              {/* Conditionally render control box if non-empty */}
              {control.length > 0 && (
                <ArcherElement
                  id="control-box"
                  relations={[
                    {
                      targetId: 'function-box',
                      sourceAnchor: 'right',
                      targetAnchor: 'left',
                    },
                    {
                      targetId: 'source-box',
                      sourceAnchor: 'top',
                      targetAnchor: 'bottom',
                    },
                  ]}
                >
                  <div>
                    <DigitalTwinBox
                      title={`${getTwinTitle(config.twinLevel)} controlled by`}
                      primaryItems={control}
                    />
                  </div>
                </ArcherElement>
              )}
            </div>

            {/* Right side: Digital Twin Stack */}
            <div className="outer-box">
              <h2 className="outer-title">Digital Twin</h2>
              <div className="inner-boxes">
                <ArcherElement
                  id="data-repo"
                  relations={[
                    {
                      targetId: 'function-box',
                      sourceAnchor: 'bottom',
                      targetAnchor: 'top',
                    },
                  ]}
                >
                  <div>
                    <DigitalTwinBox
                      title="Data Repository"
                      primaryItems={dataStorage}
                      subtitle="Preprocessed with"
                      secondaryItems={preprocessing}
                    />
                  </div>
                </ArcherElement>

                <ArcherElement id="function-box">
                  <div>
                    <DigitalTwinBox
                      title="Digital Twin Functionality"
                      primaryItems={functions}
                      subtitle="Enabled through"
                      secondaryItems={engines}
                      thirdTitle="Running on"
                      thirdItems={infra}
                    />
                  </div>
                </ArcherElement>

                <ArcherElement
                  id="model-box"
                  relations={[
                    {
                      targetId: 'function-box',
                      sourceAnchor: 'top',
                      targetAnchor: 'bottom',
                    },
                  ]}
                >
                  <div>
                    <DigitalTwinBox
                      title="Model Repository"
                      primaryItems={models}
                    />
                  </div>
                </ArcherElement>
              </div>
            </div>
          </div>
        </ArcherContainer>
      </div>
      <div className="summary-block">{getSummaryText(config)}</div>
      <div className="button-row">
        <button className="button-sm" onClick={onReset}>
          Start Over
        </button>
      </div>
    </div>
  );
}

{
  /* Helper function for dynamic text at the end */
}
function getSummaryText(config: DigitalTwinConfig): React.ReactElement {
  const mergeWithOther = (arr: string[], other: string) => [
    ...arr,
    ...(other?.trim() ? [other.trim()] : []),
  ];

  const getTwinTitle = (level: string) => {
    if (level === 'Product Twin') return 'Product';
    if (level === 'System Twin') return 'System';
    if (level === 'Process Twin') return 'Process';
    return 'Twin';
  };

  const functions = mergeWithOther(
    config.mainFunctions,
    config.mainFunctionsOther
  ).join(', ');
  const lifeCycle = mergeWithOther(
    config.lifeCycleStages,
    config.lifeCycleOther
  ).join(', ');
  const control = mergeWithOther(
    config.controlMethods,
    config.controlMethodsOther
  ).join(', ');
  const dataSources = mergeWithOther(
    config.dataCollection,
    config.dataCollectionOther
  ).join(', ');
  const transmission = mergeWithOther(
    config.transmissionTechnologies,
    config.transmissionTechnologiesOther
  ).join(', ');
  const protocols = mergeWithOther(
    config.communicationProtocols,
    config.communicationProtocolsOther
  ).join(', ');
  const dataStorage = mergeWithOther(
    config.dataStorage,
    config.dataStorageOther
  ).join(', ');
  const preprocessing = mergeWithOther(
    config.dataPreprocessing,
    config.dataPreprocessingOther
  ).join(', ');
  const twinningEngine = mergeWithOther(
    config.twinningEngine,
    config.twinningEngineOther
  ).join(', ');
  const modelTypes = mergeWithOther(
    config.modelType,
    config.modelTypeOther
  ).join(', ');
  const infrastructure = mergeWithOther(
    config.infrastructure,
    config.infrastructureOther
  ).join(', ');

  const twinTitle = getTwinTitle(config.twinLevel);

  return (
    <p>
      You want to create a <strong>{config.twinLevel}</strong> focused on{' '}
      <strong>{functions}</strong>, targeting the following life cycle stage(s)
      of your {twinTitle}: <strong>{lifeCycle}</strong>.
      {control && (
        <>
          {' '}
          It is controlled by <strong>{control}</strong>.
        </>
      )}{' '}
      The digital twin collects data from <strong>{dataSources}</strong>, which
      is transferred using <strong>{transmission}</strong> via the following
      protocol(s): <strong>{protocols}</strong>. This data is stored in{' '}
      <strong>{dataStorage}</strong> and preprocessed using{' '}
      <strong>{preprocessing}</strong>. To enable its functionality, the digital
      twin uses <strong>{twinningEngine}</strong>, running{' '}
      <strong>{modelTypes}</strong> on <strong>{infrastructure}</strong> to
      perform its tasks.
    </p>
  );
}
