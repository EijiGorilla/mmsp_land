/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { lotLayer } from '../layers';
import Query from '@arcgis/core/rest/support/Query';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteList,
  CalciteListItem,
  CalciteChip,
  CalciteAvatar,
} from '@esri/calcite-components-react';
import { view } from '../Scene';
