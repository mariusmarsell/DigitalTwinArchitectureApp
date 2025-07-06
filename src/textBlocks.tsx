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

export const step2Text = {
  twinFunctionsInfo: (
    <>
      Digital Twins can serve a wide range of functions depending on their
      intended use. Common functions include monitoring, detection/diagnosis, prediction,
      control, life-cycle management, decision making, optimization or simulation. 
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

export const step3Text = {
  controlInfo: (
    <>
      The way a Digital Twin interfaces with and controls its physical
      counterpart varies depending on the type of twin being developed. <br />
      <br />- A <strong>Product Twin</strong> typically uses embedded control
      units such as Drive ECUs, Engine Control Units, Embedded Microcontrollers,
      or Intelligent Electronic Devices (IEDs) to manage specific components.{' '}
      <br />- A <strong>System Twin</strong> coordinates larger systems using
      technologies like Programmable Logic Controllers (PLCs), Computerized
      Numerical Control (CNC) systems, Remote Terminal Units (RTUs),
      Programmable Automation Controllers (PACs), and IEDs. <br />- A{' '}
      <strong>Process Twin</strong> orchestrates operational workflows with
      solutions such as Remote Terminal Units (RTUs), PLCs, PACs, Manufacturing
      Execution Systems (MES), Supervisory Control and Data Acquisition (SCADA),
      Distributed Control Systems (DCS), and IEDs. <br />
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
      of sources like physical sensors, simulations, historical data, enterprise
      systems or manual measurements. Identifying where the data is coming from
      is critical, as it determines the twin’s ability to represent reality.
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
      After selecting the appropriate data transmission technologies, it’s
      equally important to define the communication protocols layered on top.
      These protocols govern how data is formatted, transmitted, and interpreted
      between devices and systems within the Digital Twin. Protocols like BLE
      GATT and Zigbee Cluster Library are tied to specific transmission
      technologies, while MQTT, OPC UA, and HTTP/REST are widely used over
      Wi-Fi, Ethernet, or cellular connections. For deterministic or
      industrial-grade communication, options such as Modbus TCP, Profinet, or
      EtherCAT—primarily running over Ethernet—are often deployed. Choosing the
      right protocol ensures interoperability, performance, and scalability of
      the Digital Twin ecosystem.
    </>
  ),
};

export const step7Text = {
  preprocessingInfo: (
    <>
      Before raw data is utilized by a Digital Twin, it often undergoes
      preprocessing to ensure accuracy, relevance, and usability. Preprocessing
      may include steps such as data cleaning to remove errors or
      inconsistencies, filtering to isolate important signals, or reduction to
      minimize volume while retaining key features. In more advanced scenarios,
      data may be transformed into new formats or semantically enriched to add
      contextual meaning—making it more useful for simulation, analysis, or
      decision-making within the twin. Depending on the Digital Twin’s
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
      Once data is collected and preprocessed, it needs to be securely stored
      and efficiently managed to support the Digital Twin’s functionality.
      Depending on the application’s needs, this may involve using cloud storage
      for scalability and remote access, or SQL and NoSQL databases for
      structured or flexible data formats. In latency-sensitive scenarios, edge
      storage allows data to be kept closer to the source for faster processing.
      Emerging technologies like blockchain storage offer immutable and
      transparent records, while data lakes provide a centralized repository for
      storing large volumes of raw or semi-structured data. Selecting the right
      storage method is essential to ensure performance, reliability, and
      compliance. For more information, see:{' '}
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
      underlying IT infrastructure used to host and execute its models. Cloud
      computing offers scalable and centralized resources, ideal for high-volume
      data processing and global accessibility. Edge computing brings
      computation closer to the physical devices, reducing latency and enabling
      real-time decision-making. Fog computing provides an intermediate layer
      between edge and cloud, balancing speed with resource availability. Hybrid
      computing integrates multiple infrastructure types, allowing organizations
      to optimize for flexibility, cost, and performance depending on their
      specific needs. Choosing the right infrastructure is key to ensuring that
      the Digital Twin operates reliably and efficiently across different
      scenarios. For more information, see:{' '}
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
      The type of model used in a Digital Twin determines how accurately it can
      simulate, predict, and optimize real-world behavior. A Geometric Model
      represents the physical shape and layout of components, typically used in
      visualization and CAD environments. Physics-Based Models (White Box) rely
      on known equations and domain knowledge to simulate system behavior based
      on physical laws. Data-Driven Models (Black Box) use machine learning and
      statistical techniques trained on historical data to predict outcomes
      without explicitly modeling underlying physics. Hybrid or Physics-Informed
      Models (Gray Box) combine both approaches, embedding physical constraints
      into data-driven models to improve interpretability and performance.
      Finally, a System Model focuses on interactions between components and
      subsystems, useful for high-level simulation of complex environments.
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
      digital twin. The choice of platform often depends on the model type. For
      example, Geometric Models are typically implemented using tools like
      DASSAULT 3DEXPERIENCE or AutoDesk Tandem, which focus on spatial
      representation and design integration. Data-Driven Models are well
      supported by platforms like MATLAB/Simulink, Azure Digital Twins, or AWS
      IoT TwinMaker, which enable advanced analytics and machine learning
      capabilities. Physics-Based Models and Physics-Informed Models may require
      more sophisticated simulation environments such as Ansys Twin Builder,
      COMSOL Multiphysics, or Modelica, offering high fidelity and
      domain-specific physics. Selecting the right engine ensures compatibility
      with your model types and scalability for your twin’s lifecycle.
    </>
  ),
};
