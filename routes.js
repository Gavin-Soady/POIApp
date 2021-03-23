"use strict";

const Accounts = require("./app/controllers/accounts");
const POI = require("./app/controllers/pois");
const Gallery = require('./app/controllers/gallery');

module.exports = [
  { method: "GET", path: "/", config: Accounts.index },
  { method: "GET", path: "/signup", config: Accounts.showSignup },
  { method: "GET", path: "/login", config: Accounts.showLogin },
  { method: "GET", path: "/logout", config: Accounts.logout },
  { method: "POST", path: "/signup", config: Accounts.signup },
  { method: "POST", path: "/login", config: Accounts.login },
  { method: 'GET', path: '/settings', config: Accounts.showSettings },
  { method: 'POST', path: '/settings', config: Accounts.updateSettings },

  { method: "GET", path: "/home", config: POI.home },
  { method: "POST", path: "/addpoi", config: POI.add },
  { method: "GET", path: "/report", config: POI.report },

  { method: 'GET', path: '/gallery/{_id}', config: Gallery.index },
  { method: 'POST', path: '/uploadfile/{_id}', config: Gallery.uploadFile },
  { method: 'GET', path: '/deleteimage/{public_id}', config: Gallery.deleteImage },
  { method: 'GET', path: '/upload', config: Gallery.upload },

  {method: "GET", path: "/delete-poi/{_id}", config: POI.deletepoi },
  {method: 'GET', path: '/update-poi/{_id}', config: POI.showUpdatePOI},
  {method: 'POST', path: "/update-poi/{_id}", config: POI.updatePOI},



  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },
];
