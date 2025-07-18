import React from 'react';

const DigitalTwinBox = React.forwardRef<
  HTMLDivElement,
  {
    header?: string;
    title: string;
    primaryItems?: string[];
    onPrimaryItemClick?: (item: string) => void;
    subtitle?: string;
    secondaryItems?: string[];
    onSecondaryItemClick?: (item: string) => void;
    thirdTitle?: string;
    thirdItems?: string[];
    onThirdItemClick?: (item: string) => void;
    backgroundColor?: string;
  }
>(
  (
    {
      header,
      title,
      primaryItems,
      onPrimaryItemClick,
      subtitle,
      secondaryItems,
      onSecondaryItemClick,
      thirdTitle,
      thirdItems,
      onThirdItemClick,
      backgroundColor,
    },
    ref
  ) => {
    return (
      <div className="digital-twin-box" ref={ref} style={{ backgroundColor }}>
        {header && <h2 className="box-header">{header}</h2>}
        <h3 className="section-heading">{title}</h3>

        {primaryItems && primaryItems?.length > 0 && (
          <div className="item-list">
            {primaryItems.map((item, i) => (
              <button
                key={i}
                className="item-chip"
                onClick={() => onPrimaryItemClick?.(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {subtitle && secondaryItems && secondaryItems?.length > 0 && (
          <p className="section-heading">{subtitle}</p>
        )}

        {secondaryItems && secondaryItems?.length > 0 && (
          <div className="item-list">
            {secondaryItems.map((item, i) => (
              <button
                key={i}
                className="item-chip"
                onClick={() => onSecondaryItemClick?.(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {thirdTitle && thirdItems && thirdItems?.length > 0 && (
          <p className="section-heading">{thirdTitle}</p>
        )}

        {thirdItems && thirdItems?.length > 0 && (
          <div className="item-list">
            {thirdItems.map((item, i) => (
              <button
                key={i}
                className="item-chip"
                onClick={() => onThirdItemClick?.(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default DigitalTwinBox;
