// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');

// Products belongsTo Category


// Categories have many Products
Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    foreignKey: 'category_id',
  },
  // Define an alias for when data is retrieved
  as: 'product_category'
});
// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    foreignKey: 'category_product',
  },
  // Define an alias for when data is retrieved
  as: 'category_tag'
});
// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: 'product_id',
  },
  // Define an alias for when data is retrieved
  as: 'products_tag'
});
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: 'tag_id',
  },
  // Define an alias for when data is retrieved
  as: 'tag_product'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
