import { param } from 'jquery';
import Category from './api.index';

const fetch_categories = 'category';
const create_category = 'category';
const edit_category = 'category';
const update_category = 'category';
export default {
  //fetch the category
  fetchCategories() {
    return Category.get(`${fetch_categories}`);
  },

  //create the category
  createCategory(payload) {
    return Category.post(`${create_category}`, payload);
  },

  //edit the category
  editCategory(id) {
    return Category.get(`${edit_category}/${id}`);
  },

  //update the category
  updateCategory(id, payload) {
    return Category.put(`${update_category}/${id}`, payload);
  },
};
