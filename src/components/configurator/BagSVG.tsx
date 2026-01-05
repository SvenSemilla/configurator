import { BagModel, ZoneSelection } from "./types";

interface BagSVGProps {
  model: BagModel;
  selections: ZoneSelection[];
  activeZone: string | null;
  onZoneClick: (zoneId: string) => void;
}

const BagSVG = ({ model, selections, activeZone, onZoneClick }: BagSVGProps) => {
  const getZoneColor = (zoneId: string) => {
    const selection = selections.find(s => s.zoneId === zoneId);
    if (selection?.fabricImage) {
      return `url(#pattern-${zoneId})`;
    }
    const zone = model.zones.find(z => z.id === zoneId);
    return zone?.defaultColor || "#2d2d2d";
  };

  return (
    <svg
      viewBox={model.viewBox}
      className="w-full h-full max-h-[400px]"
      style={{ filter: "drop-shadow(4px 4px 0px hsl(20 85% 52%))" }}
    >
      <defs>
        {selections.map(selection => {
          if (selection.fabricImage) {
            return (
              <pattern
                key={selection.zoneId}
                id={`pattern-${selection.zoneId}`}
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={selection.fabricImage}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            );
          }
          return null;
        })}
      </defs>
      
      {model.zones.map(zone => (
        <path
          key={zone.id}
          d={zone.pathData}
          fill={getZoneColor(zone.id)}
          stroke={activeZone === zone.id ? "hsl(20 85% 52%)" : "hsl(42 30% 92%)"}
          strokeWidth={activeZone === zone.id ? 4 : 2}
          className="cursor-pointer transition-all duration-200 hover:opacity-80"
          onClick={() => onZoneClick(zone.id)}
        />
      ))}
      
      {/* Hover Overlay */}
      {model.zones.map(zone => (
        <path
          key={`hover-${zone.id}`}
          d={zone.pathData}
          fill="transparent"
          className="cursor-pointer"
          onClick={() => onZoneClick(zone.id)}
        >
          <title>{zone.name}</title>
        </path>
      ))}
    </svg>
  );
};

export default BagSVG;
