# Geovisto Selection Tool
Extension of the [Geovisto core library](https://github.com/geovisto/geovisto) which provides support for selection and highlighting of map layers items.

This repository is a snapshot of Geovisto ``tools/selection`` derived from the development repository: [geovisto/geovisto-map](https://github.com/geovisto/geovisto-map).

## Usage

![sample](https://user-images.githubusercontent.com/1479229/131546245-eb867c38-f80d-4d9c-a7d6-7f19c1d4e69f.png)

```js
import { GeovistoSelectionTool } from 'geovisto-selection';

// create instance of map with given props
const map = Geovisto.createMap({
  // ...
  tools?: Geovisto.createMapToolsManager([
    // instances of Geovisto tools (extensions) which will be directly used in the map
    // ...
    GeovistoSelectionTool.createTool({
        id: "geovisto-tool-selection"
    }),
  ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
  // initial settings of the map can be overriden by the map config - JSON structure providing user settings 
  // ...
  tools?: [
    // config of Geovisto tools (extensions) used in the map
    {
      "type": "geovisto-tool-selection",
      "id": "geovisto-tool-selection",
      "enabled": true,
      "selection": {
        "tool": "geovisto-tool-layer-choropleth", // id of the tool containing the selected item
        "ids": [
          "CZE" // IDs of selected items
        ]
      }
    },
  ]
}));
```

## Installation

```
npm install --save geovisto-selection
```

Peer dependencies:
```
npm install --save geovisto leaflet
```

This package serves as an extension of Geovisto core using the API for Geovisto tools (extensions). Follow Geovisto core on [Github](https://github.com/geovisto/geovisto).

## License

[MIT](https://github.com/geovisto/geovisto-selection/blob/master/LICENSE)