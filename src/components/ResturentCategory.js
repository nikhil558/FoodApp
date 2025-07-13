import ItemList from "./itemList";
import { ChevronDown, ChevronUp } from "lucide-react";

const ResturentCategory = ({ resCategory, showItem, handel }) => {
  return (
    <div className="shadow-lg border-0 bg-card/80 backdrop-blur mb-4 p-4">
      <div
        className="cursor-pointer hover:bg-accent/50 transition-colors rounded-t-lg"
        onClick={() => handel()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">
            {resCategory.card.card.title}
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({resCategory.card.card.itemCards.length})
            </span>
          </h2>
          {showItem ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>

      {showItem && (
        <div className="p-0 border-t border-border/50">
          {resCategory.card.card.itemCards.map((each) => (
            <ItemList resCard={each} key={each.card.info.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResturentCategory;
