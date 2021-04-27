const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Blog.findAll({
    // model: User,
    attributes: [
      'id',
      'title',
      'description',
      // 'date_created',
      'user_id',
      'created_at'
    ],
  }).then(data => res.json(data))
    .catch(err => {
      res.status(500).json(err);
    })
})

router.post('/', withAuth, async (req, res) => {
  Blog.create({
    title: req.body.title,
    description: req.body.description,
    user_id: req.session.user_id
  })
    .then(data => res.json(data)).catch(err => console.log(err));
});

router.put('/:id', withAuth, (req, res) => {
  Blog.update(req.body, 
    {
    where: {
      id: req.params.id,
      // user_id: req.session.user_id,
    },
  }).then(data => {
    if (!data) {res.status(404).json({ message: 'This post does not exist!' })
      return;
    }
    res.json(data)
  }).catch(err => {
    res.status(500).json(err);

  })
});

router.delete('/:id', withAuth, (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id,
      // user_id: req.session.user_id,
    },
  }).then(data => {
    if (!data) {res.status(404).json({ message: 'This post does not exist!' })
      return;
    }
    res.json(data)
  }).catch(err => {
    res.status(500).json(err);

  })
});

module.exports = router;
