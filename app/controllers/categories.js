'use strict';

const Categorymodel = require('../models/category');

const Category = {

    addCategory: {

        handler: async function (request, h)
        {
            try
            {
                const data = request.payload;
                const newCategory = new Categorymodel({
                    name: data.name,
                });
                await newCategory.save();
                return h.redirect("/home");
            } catch (err) {
                return h.view("main", { errors: [{ message: err.message }]
                });
            }
        }
    },

}

module.exports = Category;