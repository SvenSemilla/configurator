import { BagModel } from "./types";

interface ModelSelectorProps {
  models: BagModel[];
  selectedModel: BagModel | null;
  onSelect: (model: BagModel) => void;
}

const ModelSelector = ({ models, selectedModel, onSelect }: ModelSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-display text-foreground">Modell wählen</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {models.map(model => (
          <button
            key={model.id}
            onClick={() => onSelect(model)}
            className={`group relative p-2 transition-all duration-200 ${
              selectedModel?.id === model.id
                ? "bg-primary text-primary-foreground retro-shadow"
                : "bg-card text-card-foreground hover-lift"
            }`}
            style={{ border: "2px solid hsl(var(--foreground))" }}
          >
            <div className="aspect-square overflow-hidden mb-2">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-mono block truncate">
              {model.name.split(" ").slice(0, -1).join(" ")}
            </span>
            <span className="text-xs font-display block truncate">
              {model.name.split(" ").slice(-1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;
