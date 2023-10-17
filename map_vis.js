var loc = "map_vis.vg.json"
vegaEmbed('#map_vis', loc, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);