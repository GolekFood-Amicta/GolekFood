import React from 'react';
import { createRoot } from "react-dom/client";
import GolekFoodsApp from './components/GolekFoodsApp';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <GolekFoodsApp />
);