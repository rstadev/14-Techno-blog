const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // Get all projects and JOIN with user data
    Blog.findAll({
          // model: User,
          attributes: [
            'id',
            'title',
            'description',
            // 'date_created',
            // 'user_id',
            // 'created_at'
        ],
    }).then(data => {

      
      // Serialize data so the template can read it
      const blogs = data.map((blog) => blog.get({ plain: true }));
      
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        blogs, 
        logged_in: req.session.logged_in 
      });
    }).catch (err => {
    res.status(500).json(err);
  })
});

router.get('/blog/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/profile', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('profile');
});

module.exports = router;
