const News = require("../model/News");

module.exports = {
  async index(req, res) {
    try {
      const news = await News.findAll();
      return res.json(news);
    } catch (error) {
      res.send(console.log(error));
    }
  },

  async store(req, res) {
    try {
      const { title, desc } = req.body;
      const news = await News.create({ title, desc });
      return res.json(news);
    } catch (error) {
      res.send(console.log(error));
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await News.destroy({
        where: { id },
      });
      res.json({ deleted: "Success" });
    } catch (error) {
      res.send(console.log(error));
    }
  },

  async edit(req, res) {
    try {
      const { title, desc } = req.body;
      const { id } = req.params;
      await News.update({ title, desc }, { where: { id } });
      return res.json({edit: 'Success'});
    } catch (error) {
      res.send(console.log(error));
    }
  },
};
