const Metahuman = require('../models/metahuman.js');

exports.index = (req, res) => {
    Metahuman.find()
        .then(metahumans => {
            res.render("metahumans/index", {
                metahumans: metahumans,
                title: "Metahumans"
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};


exports.show = (req, res) => {
    Metahuman.findById({
            _id: req.params.id
        })
        .then(metahuman => {
            res.render("metahumans/show", {
                title: metahuman.fullName,
                metahuman: metahuman
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/metahumans");
        });
};


exports.new = (req, res) => {
    res.render("metahumans/new", {
        title: "New Metahuman"
    });
};


exports.edit = (req, res) => {
    Metahuman.findById({
            _id: req.params.id
        })
        .then(metahuman => {
            res.render("metahumans/edit", {
                title: metahuman.fullName,
                metahuman: metahuman
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/metahumans");
        });
};


exports.create = async (req, res) => {
    Metahuman.create(req.body.metahuman)
        .then(() => {
            req.flash("success", "Successfully created metahuman!");
            res.redirect("/metahumans");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("metahumans/new");
        });
};


exports.update = (req, res) => {
    Metahuman.updateOne({
            _id: req.body.id
        }, req.body.metahuman, {
            runValidators: true
        })
        .then(() => {
            req.flash("success", "Successfully updated metahuman!");
            res.redirect("/metahumans");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/metahumans");
        });
};


exports.destroy = (req, res) => {
    Metahuman.deleteOne({
            _id: req.body.id
        })
        .then(() => {
            req.flash("success", "Successfully deleted metahuman!");
            res.redirect("/metahumans");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/metahumans");
        });
};