import { useRef, useState, useEffect, memo } from 'react';
import { isfLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateIsfData,
  generateIsfNumber,
  statusIsfChartQuery,
  thousands_separators,
} from '../Query';

//https://codesandbox.io/s/amcharts5-react-demo-forked-gid7b0?from-embed=&file=/src/App.js:271-276
// https://github.com/reactchartjs/react-chartjs-2/blob/master/src/chart.tsx
//https://www.reddit.com/r/reactjs/comments/gr5vhh/react_hooks_and_amcharts4/?rdt=56344
//https://medium.com/swlh/how-to-use-amcharts-4-with-react-hooks-999a62c185a5
//https://codesandbox.io/s/amcharts5-react-demo-forked-hrth2d
// Zoom

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */

/// Draw chart
const IsfChart = memo(({ contractp, landtype, landsection }: any) => {
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [isfData, SetIsfData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);
  const [isfNumber, setIsfNumber] = useState();

  const chartID = 'isf-pie';

  // Query
  const qCP = "Package = '" + contractp + "'";
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;

  if (!contractp) {
    isfLayer.definitionExpression = '1=1';
  } else if (contractp && !landtype && !landsection) {
    isfLayer.definitionExpression = qCP;
  } else if (contractp && landtype && !landsection) {
    isfLayer.definitionExpression = qCpLandType;
  } else {
    isfLayer.definitionExpression = qCpLandTypeSection;
  }

  useEffect(() => {
    generateIsfData().then((result: any) => {
      SetIsfData(result);
    });

    // ISF
    generateIsfNumber().then((response: any) => {
      setIsfNumber(response);
    });
  }, [contractp, landtype, landsection]);

  useEffect(() => {
    // Dispose previously created root element

    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        //centerY: am5.percent(-2), //-10
        y: am5.percent(-25), // space between pie chart and total lots
        layout: root.horizontalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(20),
        marginBottom: -10,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 1,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelect: string = selected.category;

      var highlightSelect: any;

      var query = isfLayer.createQuery();

      view.when(function () {
        view.whenLayerView(isfLayer).then((layerView): any => {
          //chartLayerView = layerView;

          isfLayer.queryFeatures(query).then(function (results) {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            isfLayer.queryExtent(queryExt).then(function (result) {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: "RELOCATION = '" + categorySelect + "'",
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(isfData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = root.container.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: am5.percent(48),
        layout: root.verticalLayout,
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 190; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    const valueLabelsWidth = 50;

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 1.1,
      paddingBottom: 2,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, isfData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(isfData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  return (
    <>
      <div className="isfNumberImage">
        <div>
          <div className="totalIsfLabel">TOTAL ISF </div>
          <br />
          <br />
          <b className="isfTotalNumber">{thousands_separators(isfNumber)} </b>
        </div>
        <img
          src="https://EijiGorilla.github.io/Symbols/NLO_Logo.svg"
          alt="NLO Logo"
          height={'19%'}
          width={'19%'}
          style={{ padding: '10px', margin: 'auto' }}
        />
      </div>
      <div
        id={chartID}
        style={{
          height: '45vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '-1.5vh',
        }}
      ></div>
    </>
  );
}); // End of lotChartgs

export default IsfChart;
