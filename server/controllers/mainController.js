/* GET Homepage */

exports.homepage = async (req, res) => {
  const locals = {
    title: "Notes Adda",
    description: "Free Notes App.",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/frontPage",
  });
};

/* GET About */

exports.about = async (req, res) => {
  const locals = {
    title: "ABout- Notes Adda",
    description: "Free Notes App.",
  };

  res.render("about", locals);
};
