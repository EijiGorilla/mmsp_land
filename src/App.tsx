import { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import { map, view, basemaps, layerList } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
} from '@esri/calcite-components-react';
import { zoomToLayer } from './Query';
//import LotProgressChart from './components/LotProgressChart';
//import ExpropriationList from './components/ExpropriationList';
// import loadable from '@loadable/component';
import { lotLayer } from './layers';
import LotChart from './components/LotChart';
import { DropDownData } from './customClass';
import StructureChart from './components/structureChart';

function App() {
  //**** Set states */
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // For dropdown filter
  const [initCpTypeSection, setInitCpTypeSection] = useState<null | undefined | any>();

  const [contractPackage, setContractPackage] = useState<null | any>(null);
  const [landType, setLandType] = useState<null | any>(null);
  const [landSection, setLandSection] = useState<null | any>(null);

  const [landTypeList, setLandTypeList] = useState([]);
  const [landSectionList, setLandSectionList] = useState([]);
  const [landTypeSelected, setLandTypeSelected] = useState({ name: '' });

  // loadable for code splitting
  //const NloChart = loadable(() => import('./components/NloChart'));
  // const StructureChart = loadable(() => import('./components/StructureChart'));

  //**** Create dropdonw list */
  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [lotLayer],
      fieldNames: ['Package', 'Type', 'Station1'],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitCpTypeSection(response);
    });
  }, []);

  // Add zoomToLayer in App component, not LotChart component
  useEffect(() => {
    zoomToLayer(lotLayer);
  }, [contractPackage, landType, landSection]);

  const handleConstractPackageChange = (obj: any) => {
    setContractPackage(obj);
    setLandTypeList(obj.field2);
    setLandType(null);
    setLandTypeSelected(obj);
    setLandSection(null);
  };

  const handleLandTypeChange = (obj: any) => {
    setLandTypeSelected(obj);
    setLandType(obj);
    setLandSectionList(obj.field3);
    setLandSection(null);
  };

  const handleLandSectionChange = (obj: any) => {
    setLandSection(obj);
  };

  // End of dropdown list

  //https://stackoverflow.com/questions/70832641/react-onclick-event-working-on-twice-clicks-when-clicking-again
  // if you add activeWidget and nextWidget as dependencies for the following useEffect,
  // calcitePanel is forced to close when dropdownlist item is changed.
  // The solution is simply adding no dependencies.
  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  // https://developers.arcgis.com/calcite-design-system/resources/frameworks/
  // --calcite-ui-background: #353535 f
  // https://developers.arcgis.com/calcite-design-system/foundations/colors/
  // https://codesandbox.io/examples/package/@esri/calcite-components-react
  return (
    <div>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '27vw' }}>
          <div id="chartPanel" style={{ height: '100%' }}>
            <CalciteTabNav slot="tab-nav" id="thetabs">
              <CalciteTabTitle class="Land">Land</CalciteTabTitle>
              <CalciteTabTitle class="Structure">Structure</CalciteTabTitle>
              <CalciteTabTitle class="NLO">NLO</CalciteTabTitle>
              <CalciteTabTitle class="ExproList">ExproList</CalciteTabTitle>
            </CalciteTabNav>
            {/* CalciteTab: Lot */}
            <CalciteTab>
              <LotChart
                contractp={contractPackage === null ? '' : contractPackage.field1}
                landtype={landTypeSelected.name}
                landsection={landSection === null ? '' : landSection.name}
                typelist={landSectionList}
              />
            </CalciteTab>
            {/* CalciteTab: Structure */}
            <CalciteTab>
              <StructureChart
                contractp={contractPackage === null ? '' : contractPackage.field1}
                landtype={landTypeSelected.name}
                landsection={landSection === null ? '' : landSection.name}
                typelist={landSectionList}
              />
            </CalciteTab>

            {/* CalciteTab: Non-Land Owner */}
            <CalciteTab>
              {/* <IsfChart
                contractp={contractPackage === null ? '' : contractPackage.field1}
                landtype={landTypeSelected.name}
                landsection={landSection === null ? '' : landSection}
                typelist={landSectionList}
              /> */}
            </CalciteTab>

            {/* CalciteTab: List of Lots under Expropriation */}
            <CalciteTab>
              {/* <ExpropriationList
                contractp={contractPackage === null ? '' : contractPackage.field1}
                landtype={landTypeSelected.name}
                landsection={landSection === null ? '' : landSection}
                typelist={landSectionList}
              /> */}
            </CalciteTab>
          </div>
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{ display: 'flex', width: '100%', padding: '0 1rem' }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'2.9%'}
            width={'2.9%'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">MMSP LAND</b>
          <div className="date">As of November 15, 2023</div>

          <div className="dropdownFilter">
            <div className="dropdownFilterLayout">
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select CP"
                value={contractPackage}
                options={initCpTypeSection}
                onChange={handleConstractPackageChange}
                getOptionLabel={(x: any) => x.field1}
                styles={customstyles}
              />
              <br />
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select Land Type"
                value={landType}
                options={landTypeList}
                onChange={handleLandTypeChange}
                getOptionLabel={(x: any) => x.name}
                styles={customstyles}
              />
              <br />
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select Type"
                value={landSection}
                options={landSectionList}
                onChange={handleLandSectionChange}
                getOptionLabel={(x: any) => x.name}
                styles={customstyles}
              />
            </div>
          </div>
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/MMSP.png"
            alt="GCR Logo"
            height={'4.4%'}
            width={'4.4%'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>

        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="charts"
              icon="graph-time-series"
              text="Progress Chart"
              id="charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="land-acquisition"
                ref={layerListDiv}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem value="basemaps" ref={calcitePanelBasemaps}></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter the data</b> by City and Barangy using dropdown lists.
                  </li>
                  <li>
                    <b>Click a tab</b> below the dropdown lists to view progress on land, structure,
                    or NLO in charts.
                  </li>
                  <li>
                    <b>Click series in pie charts</b> to view progress on the corresponding
                    lots/structures/NLO on the map.
                  </li>
                  <li>
                    <b>Lots under expropriation</b> are available in the 'Expro List' tab.
                  </li>
                  <li>
                    Click/unclick widgets icon for viewing Layer list, legend, basemaps, and locate
                    widgets under the main title.
                  </li>
                  <li>
                    <b>Toggle a checkbox</b> above the Land pie chart to view{' '}
                    <b>handed-over areas</b> (m2) of Contract Packages.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div className="mapDiv" ref={mapDiv}></div>

        {/* Lot progress chart is loaded ONLY when charts widget is clicked. */}
        {/* {nextWidget === 'charts' && nextWidget !== activeWidget ? (
          <LotProgressChart
            contractp={contractPackage === null ? '' : contractPackage.field1}
            landtype={landTypeSelected.name}
            landsection={landSection === null ? '' : landSection}
            typelist={landSectionList}
            nextwidget={nextWidget === activeWidget ? null : nextWidget}
          />
        ) : (
          ''
        )} */}
      </CalciteShell>
    </div>
  );
}

export default App;
