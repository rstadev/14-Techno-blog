// const seedCategories = require('./category-seeds');
const seedBlogs = require('./blog-seeds');
// const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  // console.log('\n----- DATABASE SYNCED -----\n');
  // await seedCategories();
  // console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedBlogs();
  console.log('\n----- BLOGS SEEDED -----\n');

  // await seedTags();
  // console.log('\n----- TAGS SEEDED -----\n');

  // await seedProductTags();
  // console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
