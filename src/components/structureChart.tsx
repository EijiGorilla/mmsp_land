import { useEffect, useRef, useState, memo } from 'react';
import { lotLayer, structureLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateStrucNumber,
  generateStructureData,
  thousands_separators,
  statusStructureChartQuery,
} from '../Query';

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
const StructureChart = memo(({ contractp, landtype, landsection, typelist }: any) => {
  // 1. Structure
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [structureData, setStructureData] = useState([
    {
      category: String,
      value: Number,
    },
  ]);

  const chartID = 'structure-chart';
  const [structureNumber, setStructureNumber] = useState([]);

  // 2.Mode of Acquisition
  const barSeriesRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef_moa = useRef<unknown | any | undefined>({});
  const chartID_moa = 'structure-moa';

  // Query
  // Query
  const qCP = "Package = '" + contractp + "'";
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;

  if (!contractp) {
    structureLayer.definitionExpression = '1=1';
  } else if (contractp && !landtype && !landsection) {
    structureLayer.definitionExpression = qCP;
  } else if (contractp && landtype && !landsection) {
    structureLayer.definitionExpression = qCpLandType;
  } else {
    structureLayer.definitionExpression = qCpLandTypeSection;
  }

  useEffect(() => {
    generateStructureData().then((result: any) => {
      setStructureData(result);
    });

    // Structure Number
    generateStrucNumber().then((response: any) => {
      setStructureNumber(response);
    });
  }, [contractp, landtype, landsection]);

  useEffect(() => {
    class MyTheme extends am5.Theme {
      patterns: am5.LinePattern[] | undefined | any;
      currentPattern: number | any | undefined;
      setupDefaultRules() {
        var theme = this;

        const gap = 4;
        const rotation = 135;
        const strokeWidth = 1.1;
        const fillOpacity = 0;
        const width = 10;
        const height = 10;

        this.patterns = [
          am5.LinePattern.new(this._root, {
            color: am5.color('#70AD47'),
            gap: gap,
            rotation: rotation,
            strokeWidth: strokeWidth,
            fillOpacity: fillOpacity,
            width: width,
            height: height,
          }),

          am5.LinePattern.new(this._root, {
            color: am5.color('#0070FF'),
            gap: gap,
            rotation: rotation,
            strokeWidth: strokeWidth,
            fillOpacity: fillOpacity,
            width: width,
            height: height,
          }),

          am5.LinePattern.new(this._root, {
            color: am5.color('#FFFF00'),
            gap: gap,
            rotation: rotation,
            strokeWidth: strokeWidth,
            fillOpacity: fillOpacity,
            width: width,
            height: height,
          }),

          am5.LinePattern.new(this._root, {
            color: am5.color('#FFAA00'),
            gap: gap,
            rotation: rotation,
            strokeWidth: strokeWidth,
            fillOpacity: fillOpacity,
            width: width,
            height: height,
          }),
          am5.LinePattern.new(this._root, {
            color: am5.color('#FF0000'),
            gap: gap,
            rotation: rotation,
            strokeWidth: strokeWidth,
            fillOpacity: fillOpacity,
            width: width,
            height: height,
          }),

          am5.LinePattern.new(this._root, {
            color: am5.color('#00734C'),
            gap: gap,
            rotation: rotation,
            strokeWidth: strokeWidth,
            fillOpacity: fillOpacity,
            width: width,
            height: height,
          }),
        ];

        this.currentPattern = 0;
        this.rule('Slice').setAll({
          fillOpacity: 0,
        });

        this.rule('Slice').setup = function (target) {
          target.set('fillPattern', theme.patterns[theme.currentPattern]);
          theme.currentPattern++;
          if (theme.currentPattern === theme.patterns?.length) {
            theme.currentPattern = 0;
          }
        };
      }
    }

    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Responsive.new(root),
      MyTheme.new(root),
    ]);

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
      fillOpacity: 0,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.7,
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
      const find = statusStructureChartQuery.find((emp: any) => emp.category === categorySelect);
      const statusSelect = find?.value;

      var highlightSelect: any;
      var query = structureLayer.createQuery();

      view.when(function () {
        view.whenLayerView(structureLayer).then((layerView): any => {
          //chartLayerView = layerView;

          structureLayer.queryFeatures(query).then((results: any) => {
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

            structureLayer.queryExtent(queryExt).then(function (result) {
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
            where: 'Status = ' + statusSelect,
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(structureData);

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
  }, [chartID, structureData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(structureData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  return (
    <>
      <div className="lotNumberImage">
        <div>
          <div className="totalStructuresLabel">TOTAL STRUCTURES </div>
          <br />
          <br />
          <b className="totalLotsNumber">
            {thousands_separators(structureNumber[3])}{' '}
            <div className="totalLotsNumber2">({thousands_separators(structureNumber[2])})</div>{' '}
          </b>
        </div>
        <img
          src="https://EijiGorilla.github.io/Symbols/House_Logo.svg"
          alt="Structure Logo"
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
          marginBottom: '-4.5vh',
        }}
      ></div>
      <div className="structureNumberImage">
        <div>
          <div className="totalStructuresLabel">DEMOLISHED</div>
          <br />
          <br />
          {/* If zero, display as zero else */}
          {structureNumber[1] === 0 ? (
            <b className="DemolishedNumber">{structureNumber[0]}% (0)</b>
          ) : (
            <b className="DemolishedNumber">
              {structureNumber[0]}% ({thousands_separators(structureNumber[1])})
            </b>
          )}
        </div>
        <img
          src="https://EijiGorilla.github.io/Symbols/Structure_Demolished.svg"
          alt="Structure Logo"
          height={'18%'}
          width={'18%'}
          style={{ padding: '10px', margin: 'auto' }}
        />
      </div>
    </>
  );
}); // End of lotChartgs

export default StructureChart;
