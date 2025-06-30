export default function DigitalTwinBox({
  title,
  primaryItems,
  subtitle,
  secondaryItems,
  thirdTitle,
  thirdItems,
}: {
  title: string;
  primaryItems: string[];
  subtitle?: string;
  secondaryItems?: string[];
  thirdTitle?: string;
  thirdItems?: string[];
}) {
  return (
    <div className="digital-twin-box">
      <h3 className="section-heading">{title}</h3>

      {/* Primary items */}
      <div className="item-list">
        {primaryItems.length > 0 ? (
          primaryItems.map((item, i) => (
            <div key={i} className="item-chip">
              {item}
            </div>
          ))
        ) : (
          <div className="no-items">No items</div>
        )}
      </div>

      {/* Subtitle in between primary and secondary */}
      {subtitle && secondaryItems && secondaryItems.length > 0 && (
        <p className="section-heading">{subtitle}</p>
      )}

      {/* Secondary items */}
      {secondaryItems && secondaryItems.length > 0 && (
        <div className="item-list">
          {secondaryItems.map((item, i) => (
            <div key={i} className="item-chip">
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Subtitle in between secondary and third */}
      {thirdTitle && thirdItems && thirdItems.length > 0 && (
        <p className="section-heading">{thirdTitle}</p>
      )}

      {/* Third items */}
      {thirdItems && thirdItems.length > 0 && (
        <div className="item-list">
          {thirdItems.map((item, i) => (
            <div key={i} className="item-chip">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}