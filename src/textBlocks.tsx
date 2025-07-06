export const step1Text = {
  twinLevelInfo: (
    <>
      A Digital Twin is a digital representation of a product instance (real device, object, machine, service or intangible good) 
      or an instance of a product-service system (a system consisting of product and associated service) {' '}
      <a
        href="https://wigep.de/wp-content/uploads/2022/05/Final_WiGeP_Positionspapier_Digital_Twin_englisch.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        WiGeP
      </a>. The composition of a Digital Twin is shown in the figure below from {' '}
      <a
        href="https://doi.org/10.1007/978-3-642-35950-7_16870-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        R. Stark and T. Dameru
      </a>.
      A Part Twin is a digital representation of a single physical component without embedded IT systems.
      A Product Twin represents an entire physical product composed of multiple parts. 
      A System Twin models the behavior and relationships of interconnected products, such as factories, 
      vehicle fleets, or energy networks. 
      A Process Twin is the final and highest level of digital twins. It brings together system twins into 
      larger and more complex sets of processes or workflows, often encompassing the entire plant.
      For more information, see:{' '}
      <a
        href="https://precog.co/blog/types-of-digital-twins/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        Precog Blog
      </a>{' '}
      and{' '}
      <a
        href="https://digital-twin-atlas.com/knowledge-hub/article/4"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        Digital Twin Atlas
      </a>
      .
    </>
  ),
  lifeCycleInfo: (
    <>
      Digital Twins can be applied across different phases of it’s physical counterpart's 
      life cycle, including design, building, operation, maintenance or
      optimizeation. Identifying the relevant life cycle stage helps determine
      the data sources, modeling requirements, and value propositions of the
      twin. Selecting more than one stage is possible and often beneficial for
      end-to-end integration. For more information visit:{' '}
      <a
        href="https://doi.org/10.1109/ACCESS.2021.3115055"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        S. R. Newrzella et al
      </a>
      .
    </>
  ),
};

export const getStep2Text = (twinLevel: string) => {
  const isPartTwin = twinLevel === 'Part Twin';

  return {
    twinFunctionsInfo: (
      <>
        Digital Twins can serve a wide range of functions depending on their
        intended use. Common functions include monitoring, detection/diagnosis, prediction,
        {!isPartTwin && ' control,'} life-cycle management, decision making, optimization or simulation.
        Understanding the main functions of a Digital
        Twin helps define its architecture, data requirements, and system
        integration. Often, multiple functions are combined to create more
        intelligent and autonomous systems that deliver greater value across the
        product or process life cycle. For more information, see:{' '}
        <a
          href="https://doi.org/10.1109/JRFID.2024.3387996"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'underline' }}
        >
          R. Rayhana et al
        </a>{' '}
        and{' '}
        <a
          href="https://doi.org/10.1186/s42492-023-00137-4"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'underline' }}
        >
          Yao, JF. et al
        </a>
        .
      </>
    ),
  };
};


export const step3Text = {
  controlInfo: (
    <>
      The way a Digital Twin interfaces with and controls its physical
      counterpart varies depending on the type of twin being developed. <br />
      <br />- A <strong>Product Twin</strong> typically uses embedded control
      units such as Drive ECUs, Engine Control Units, Embedded Microcontrollers,
      or Intelligent Electronic Devices (IEDs) to manage specific components.{' '}
      <br />- A <strong>System Twin</strong> coordinates larger systems using
      technologies like Intelligent Electronic Devices (IEDs), Computerized
      Numerical Control (CNC) systems, Remote Terminal Units (RTUs), Programmable Logic 
      Controllers (PLCs), Programmable Automation Controllers (PACs), Supervisory Control 
      and Data Acquisition (SCADA) or Distributed Control Systems (DCS). <br />- A{' '}
      <strong>Process Twin</strong> orchestrates operational workflows with
      solutions such as Intelligent Electronic Devices (IEDs), Computerized
      Numerical Control (CNC) systems, Remote Terminal Units (RTUs), Programmable Logic 
      Controllers (PLCs) or Programmable Automation Controllers (PACs), Supervisory Control 
      and Data Acquisition (SCADA) or Distributed Control Systems (DCS). <br />
      <br />
      For more information about different control methods, visit:{' '}
      <a
        href="https://controlsystemsdesign.com/blog/the-eight-types-of-industrial-control-systems/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        Control System Design
      </a>
      .
    </>
  ),
};

export const step4Text = {
  dataSourceInfo: (
    <>
      Digital Twins rely on accurate and timely data to reflect the behavior of
      their physical counterparts. This data can be collected from a wide range
      of sources like physical sensors, manual measurements, simulations, historical data, 
      environmental data, prior knowledge or enterprise systems. Identifying where the data 
      is coming from is critical, as it determines the twin’s ability to represent reality.
      Whether sourced directly from devices or aggregated through control
      platforms and management systems, the quality and accessibility of data
      strongly influence the performance of the Digital Twin. For more
      information, see:{' '}
      <a
        href="https://doi.org/10.12688/digitaltwin.17467.2"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        M. Zhang et al
      </a>{' '}
      and{' '}
      <a
        href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8792579"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        J. -F. Uhlenkamp, et al
      </a>
      .
    </>
  ),
};

export const step5Text = {
  transmissionInfo: (
    <>
      Depending on the use case and physical environment, different technologies
      may be used to transmit data from devices to digital platforms. Common
      options include short-range solutions like Bluetooth Low Energy (BLE) and
      Zigbee, medium-range methods such as Wi-Fi and Ethernet, or wide-area
      connectivity via Cellular (4G/LTE/5G). Selecting the right technology
      ensures robust and secure communication between the physical and digital
      components of the twin. For more information, see:{' '}
      <a
        href="https://www.digitalradar-muensterland.de/die-richtige-iot-uebertragungstechnologie-auswaehlen/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        Digitalradar Münsterland
      </a>
      .
    </>
  ),
};

export const step6Text = {
  communicationInfo: (
    <>
      The communication protocol defines how data is transmitted, formatted, 
      and interpreted between physical devices and digital systems. 
      The appropriate protocol often depends on the selected transmission technology.

      <br />- BLE typically uses BLE GATT for communication.
      <br />- Zigbee relies on the Zigbee Cluster Library.
      <br />- Wi-Fi supports a wide range of protocols, including MQTT, OPC UA, HTTP/REST, 
      WebSocket, and Modbus TCP.
      <br />- Ethernet is compatible with industrial-grade protocols such as Profinet and EtherCAT, 
      in addition to general-purpose ones like MQTT, OPC UA, HTTP/REST, WebSocket, and Modbus TCP.
      <br />- Cellular (4G/LTE/5G) typically uses protocols like MQTT, OPC UA, and HTTP/REST.
      
      Selecting the appropriate protocol ensures reliable, secure, and performant communication between physical and digital components within the Digital Twin ecosystem.
    </>
  ),
};

export const step7Text = {
  preprocessingInfo: (
    <>
      Before raw data is utilized by a Digital Twin, it often undergoes
      preprocessing to ensure accuracy, relevance, and usability. Preprocessing
      may include steps such as data cleaning, data filtering, data reduction, 
      data transformation or semantic enrichment. Depending on the Digital Twin’s
      complexity and application, this step can range from minimal to highly
      sophisticated. For more information, see:{' '}
      <a
        href="https://doi.org/10.1007/s10115-023-01870-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        J. B. Correia et al
      </a>
      .
    </>
  ),
};

export const step8Text = {
  dataStorageInfo: (
    <>
      To store the collected and preprocessed data there are several technologies 
      like cloud storage, NoSQL or SQL databases, edge storage, blockchain storage 
      or data lakes. Selecting the right storage method is essential to ensure performance, 
      reliability, and compliance. For more information, see:{' '}
      <a
        href="https://doi.org/10.1007/s10115-023-01870-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        J. B. Correia et al
      </a>
      .
    </>
  ),
};

export const step9Text = {
  infrastructureInfo: (
    <>
      The performance and responsiveness of a Digital Twin depend heavily on the
      underlying IT infrastructure used to host and execute its models. Several 
      infrastructures like cloud, edge, fog or hybrid computing can be used. Choosing 
      the right infrastructure is key to ensuring that the Digital Twin operates reliably 
      and efficiently across different scenarios. For more information, see:{' '}
      <a
        href="https://www.sciencedirect.com/topics/computer-science/computing-infrastructure"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        Computing Infrastructure
      </a>
      .
    </>
  ),
};

export const step10Text = {
  modelTypeInfo: (
    <>
      There are four types of models that can be used to simulate, predict, 
      and optimize real-world behavior. Those are geometric, data driven (black box), 
      physics informed (grey box) and phyisics based (white box) models.
      Selecting the right model type depends on your objectives, available data,
      and required accuracy. For more information, see:{' '}
      <a
        href="https://www.sciencedirect.com/topics/computer-science/computing-infrastructure"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#007bff', textDecoration: 'underline' }}
      >
        Computing Infrastructure
      </a>
      .
    </>
  ),
};

export const step11Text = {
  twinningEngineInfo: (
    <>
      The twinning engine or simulation platform is the core software
      environment that executes the models and simulations representing your
      digital twin. The choice of platform often depends on the model type. 
      <br />- <strong>Geometric Models</strong> are typically implemented using tools like
      DASSAULT 3DEXPERIENCE or AutoDesk Tandem. 
      <br />- <strong>Data Driven Models</strong> are well supported by platforms like MATLAB/Simulink, 
      Azure Digital Twins, or AWS IoT TwinMaker, GE Predix or Siemens Mindsphere.
      <br />- <strong>Physics Informed Models</strong> can be implemented using platforms like 
      Ansys Twin Builder, MATLAB/Simulink, Azure Digital Twins, AWS IoT Twin Maker, GE Predix, or Siemens Mindsphere.
      <br />- <strong>Physics Based Models</strong> use platforms like Ansys Twin Builder, 
      COMSOL Multiphysics, MATLAB/Simulink, or Modelica.
      Selecting the right engine ensures compatibility with your model types and scalability for your twin’s lifecycle.
    </>
  ),
};
