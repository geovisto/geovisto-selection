// Geovisto core
import {
    IMapTool,
    MapChangeEvent
} from "geovisto";

import IMapSelection from "../../types/selection/IMapSelection";
import ISelectionToolEvent from "../../types/event/ISelectionToolEvent";

/**
 * This class provides the map selection change event.
 * 
 * @author Jiri Hynek
 */
class SelectionToolEvent extends MapChangeEvent<IMapSelection | null, IMapTool> implements ISelectionToolEvent {

    /**
     * It initializes event.
     */
    public constructor(selectionTool: IMapTool, selection: IMapSelection | null) {
        super(SelectionToolEvent.TYPE(), selectionTool, selection);
    }

    /**
     * Type of the event.
     */
    public static TYPE(): string {
        return "selection-tool-event";
    }
}
export default SelectionToolEvent;