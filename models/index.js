// // import models
// const Product = require('./Product');
// const Category = require('./Category');
// const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');
// //const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');

// // Products belongsTo Category


// // Categories have many Products
// Product.belongsTo(Category, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Tag,
//     foreignKey: 'category_id',
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'product_category'
// });

// Category.belongsToMany(Product, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Tag,
//     foreignKey: 'category_id',
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'category_product'
// });
// Product.belongsToMany(Tag, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: ProductTag,
//     foreignKey: 'product_id',
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'products_tag'
// });
// Tag.belongsToMany(Product, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: ProductTag,
//     foreignKey: 'tag_id',
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'tags_product'
// });
// module.exports = {
//   Product,
//   Category,
//   Tag,
//   ProductTag,
// };

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  foreignKey: 'product_id',

});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  foreignKey: 'tag_id',

});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};