const { Blog } = require('../models');

const blogData = [
  {
    title: 'Test Blog 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 1,
  },
  {
    title: 'Test Blog 2',
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
    user_id: 2,
  },
  {
    title: 'Test Blog 3',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    user_id: 3,
  },
  {
    title: 'Test Blog 4',
    description: 'Curabitur ultricies ex quis lacus pellentesque scelerisque. Quisque porttitor odio nec massa suscipit hendrerit. Sed in aliquam risus. Nunc eu bibendum augue, quis cursus nisl. Ut pellentesque risus sed egestas convallis. Etiam dapibus felis non nisl gravida, quis ornare magna euismod. Cras at mi dui. Vivamus quam justo, faucibus ut ligula eget, suscipit commodo magna. Sed sit amet turpis ligula. Aliquam dapibus ut est et pellentesque. Nulla finibus congue justo, vitae pharetra justo tincidunt vitae. Pellentesque ut tincidunt est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor dolor erat, ut pellentesque est eleifend at.',
    user_id: 4,
  },
  {
    title: 'Tech Blog 5',
    description: 'Morbi sit amet ligula nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin volutpat ut lectus ac volutpat. Fusce egestas semper dolor, quis tincidunt leo pellentesque sed. Maecenas ullamcorper magna id blandit dapibus. Aliquam maximus sed lacus a sodales. Quisque interdum lorem consequat pretium sollicitudin. Fusce vestibulum sodales nulla id placerat. Morbi tincidunt accumsan velit, nec cursus lacus dignissim eget. Morbi venenatis est elit, non finibus libero porttitor in. Quisque bibendum ultrices semper. Suspendisse potenti. In placerat porta orci sit amet tincidunt. Nunc non tincidunt libero.',
    user_id: 5,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
