var loc = "heatmap.vg.json"
vegaEmbed('#heat_map', loc, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);