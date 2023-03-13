//Connect with Database  /
const slugify = require("slugify")
const Blogs = require("../models/blogs")
exports.create = (req, res) => {
    const { title, content, author } = req.body
    const slug = slugify(title)

    //Validation
    switch (true) {
        case !title:
            return res.status(400).json({ error: "Please enter Title" })
            break;
        case !content:
            return res.status(400).json({ error: "Please enter Content" })
            break;

    }
    //Save Data, Create Data
    Blogs.create({ title, content, author, slug }, (err, blog) => {
        if (err) {
            res.status(400).json({error:"Title Already used"})
        }
        res.json(blog)
    })
} 