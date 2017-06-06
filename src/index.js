
import React from 'react';
import ReactDOM from 'react-dom';
import AlbumContainer from "./Components/Container/albumContainer";

global.jQuery = require('jquery');
require("../node_modules/bootstrap/dist/css/bootstrap.min.css")

ReactDOM.render(
  <AlbumContainer />,
  document.getElementById('app')
);

module.hot.accept();