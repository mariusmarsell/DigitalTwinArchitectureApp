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
  onBack,
  onReset,
  goToStep,
}: {
  config: DigitalTwinConfig;
  onBack: () => void;
  onReset: () => void;
  goToStep: (step: number) => void;
}) {
  const mergeWithOther = (arr: string[], other: string) => [
    ...arr,
    ...(other?.trim() ? [other.trim()] : []),
  ];
  function getTwinTitle(twinLevel: string): string {
    if (twinLevel === 'Parts Twin') return 'Part';
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
          <div style={{ width: '100%', textAlign: 'left', maxHeight: '60px' }}>
            <h2 className="text-lg font-semibold mb-4">Final Result</h2>
          </div>
    
          <div className="digital-twin-functionality-row">
            <p className="digital-twin-functionality-title">
              Digital Twin Functionality:
            </p>
            <div className="item-list">
              {functions.map((func, i) => (
                <button key={i} className="item-chip" onClick={() => goToStep(2)}>
                  {func}
                </button>
              ))}
            </div>
          </div>
    
          <ArcherContainer strokeColor="black" strokeWidth={1.5} noCurves>
            <div className="diagram-grid">
              {/* Nullte Zeile */}
              {/* Digital Master */}
              <ArcherElement
                id="digital-master-general"
              >
                <DigitalTwinBox
                  title="Digital Master"
                  backgroundColor="#DDEBF7"
                />
              </ArcherElement>
              
              {/* Twinning */}
              <ArcherElement
                id="twinning-box-general"
              >
                <DigitalTwinBox
                  title="Twinning"
                  backgroundColor="#FFF2CC"
                />
              </ArcherElement>
    
              {/* Digital Shadow */}
              <ArcherElement id="digital-shadow-general">
                <DigitalTwinBox
                  title="Digital Shadow"
                  backgroundColor="#E2F0D9"
                />
              </ArcherElement>
    
              {/* Erste Zeile */}
              {/* Digital Master Box */}
              <ArcherElement
                id="digital-master"
                relations={
                  control.length > 0
                    ? [
                        {
                          targetId: 'control-box',
                          sourceAnchor: 'bottom',
                          targetAnchor: 'top',
                        },
                      ]
                    : [] // No arrow if no control
                }
              >
                <DigitalTwinBox
                  title="Model repository"
                  primaryItems={models}
                  onPrimaryItemClick={() => goToStep(10)}
                  backgroundColor="#DDEBF7"
                />
              </ArcherElement>
              
              {/* Twinning Box */}
              <ArcherElement
                id="twinning-box"
                relations={[
                  {
                    targetId: 'digital-shadow',
                    sourceAnchor: 'right',
                    targetAnchor: 'left',
                  },
                  {
                    targetId: 'digital-master',
                    sourceAnchor: 'left',
                    targetAnchor: 'right',
                  },
                ]}
              >
                <DigitalTwinBox
                  title="Connection enabled through"
                  primaryItems={engines}
                  onPrimaryItemClick={() => goToStep(11)}
                  subtitle="Running on"
                  secondaryItems={infra}
                  onSecondaryItemClick={() => goToStep(9)}
                  backgroundColor="#FFF2CC"
                />
              </ArcherElement>
    
              {/* Digital Shadow Box */}
              <ArcherElement id="digital-shadow">
                <DigitalTwinBox
                  title="Data Repository"
                  primaryItems={dataStorage}
                  onPrimaryItemClick={() => goToStep(8)}
                  subtitle="Preprocessed with"
                  secondaryItems={preprocessing}
                  onSecondaryItemClick={() => goToStep(7)}
                  backgroundColor="#E2F0D9"
                />
              </ArcherElement>

              {/* Zweite Zeile */}
              <div />
              <div />
              
              {/* Transmission Box */}
              <ArcherElement
                id="transmission-box"
                relations={[
                  {
                    targetId: 'digital-shadow',
                    sourceAnchor: 'top',
                    targetAnchor: 'bottom',
                  },
                ]}
              >
                <DigitalTwinBox
                  title="Transmitted over"
                  primaryItems={transmission}
                  onPrimaryItemClick={() => goToStep(5)}
                  subtitle="Using the following protocols"
                  secondaryItems={protocols}
                  onSecondaryItemClick={() => goToStep(6)}
                  backgroundColor="#E2F0D9"
                />
              </ArcherElement>
    
              {/* Dritte Zeile */}
              {/* Control Box */}
              {control.length > 0 ? (
                <ArcherElement
                  id="control-box"
                  relations={[
                    {
                      targetId: 'entitiy-box',
                      sourceAnchor: 'right',
                      targetAnchor: 'left',
                    },
                  ]}
                >
                  <DigitalTwinBox
                    title={`${getTwinTitle(config.twinLevel)} controlled by`}
                    primaryItems={control}
                    onPrimaryItemClick={() => goToStep(3)}
                  />
                </ArcherElement>
              ) : (
                <div />
              )}
    
              {/* Entity Box */}
              <ArcherElement
                id="entitiy-box"
                relations={[
                  {
                    targetId: 'sources-box',
                    sourceAnchor: 'right',
                    targetAnchor: 'left',
                  },
                ]}
              >
                <DigitalTwinBox title={getTwinTitle(config.twinLevel)} />
              </ArcherElement>
    
              {/* Data Sources Box */}
              <ArcherElement
                id="sources-box"
                relations={[
                  {
                    targetId: 'transmission-box',
                    sourceAnchor: 'top',
                    targetAnchor: 'bottom',
                  },
                ]}
              >
                <DigitalTwinBox
                  title="Data Sources"
                  primaryItems={dataCollection}
                  onPrimaryItemClick={() => goToStep(4)}
                  backgroundColor="#E2F0D9"
                />
              </ArcherElement>
    
              {/* Vierte Zeile */}
              <div />
              <div />
              {/* External Box */}
              <ArcherElement
                id="external-box"
                relations={[
                  {
                    targetId: 'sources-box',
                    sourceAnchor: 'top',
                    targetAnchor: 'bottom',
                  },
                ]}
              >
                <DigitalTwinBox title="External" />
              </ArcherElement>
            </div>
          </ArcherContainer>  
      
          {/* Summary Block */}
          <div className="summary-block">{getSummaryText(config)}</div>
    
          <div className="button-row">
            <button className="button-sm" onClick={onBack}>
              Back
            </button>
            <button className="button-sm" onClick={onReset}>
              Start Over
            </button>
          </div>
        </div>
      );
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
