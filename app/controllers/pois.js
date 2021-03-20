"use strict";
const POI = require("../models/poi");
const User = require("../models/user");

const POIS = {
  home: {
    handler: function(request, h) {
      return h.view("home", { title: "Add a place of interest" });
    }
  },
  report: {
    handler: async function(request, h) {
      const pois = await POI.find().populate("adder").lean();
      return h.view("report", {
        title: "Places Added",
        pois: pois
      });
    }
  },
  add: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;
        const newPoi = new POI({
          name: data.name,
          county: data.county,
          long: data.long,
          lat: data.lat,
          cat: data.cat,
          adder: user._id
        });
        await newPoi.save();
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    }
  }
};

module.exports = POIS;
