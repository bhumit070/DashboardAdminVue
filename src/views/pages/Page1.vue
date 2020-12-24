<template>
  <div>
    <button
      class="btn-primary"
      id="addCategory"
      data-toggle="modal"
      data-target="#createCategoryModal"
    >
      Add Category
    </button>
    <table class="table table-responsive">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Color</th>
          <th scope="col">Description</th>
          <th scope="col">Created At</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="category.uuid" v-for="category in categories">
          <th>{{ category.name }}</th>
          <th>{{ category.color }}</th>
          <th>{{ category.description }}</th>
          <th>{{ category.created_at }}</th>
          <th>
            <img
              src="https://img.icons8.com/wired/64/4a90e2/edit.png"
              id="edit"
              @click="editCategory(category.uuid)"
              data-toggle="modal"
              data-target="#editCategoryModal"
            />
          </th>
        </tr>
      </tbody>
    </table>

    <!--Edit Category MODAL -->
    <div
      class="modal fade"
      id="editCategoryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editCategoryModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editCategoryModalLabel">
              Edit category 'ADMIN'
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div>
                <label for="name"> Enter Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  v-model="editName"
                />
              </div>
              <div>
                <label for="color">Enter Color</label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  class="form-control"
                  v-model="editColor"
                />
              </div>
              <div>
                <label> Please Enter Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="form-control"
                  v-model="editDescription"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="
                () => {
                  editName = editColor = editDescription = editId = '';
                }
              "
            >
              Close
            </button>
            <button
              type="button"
              @click="updateCategory"
              class="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Category Modal -->
    <div
      class="modal fade"
      id="createCategoryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createCategoryModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createCategoryModalLabel">
              New Category
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div>
                <label for="name"> Enter Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  v-model="editName"
                />
              </div>
              <div>
                <label for="color">Enter Color</label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  class="form-control"
                  v-model="editColor"
                />
              </div>
              <div>
                <label> Please Enter Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="form-control"
                  v-model="editDescription"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="
                () => {
                  (editName = ''), (editColor = ''), (editDescription = '');
                }
              "
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isSignedIn } from '../../helper';
import { API } from '../../bakend';
const data = isSignedIn();
export default {
  name: 'Page1',
  data() {
    return {
      categories: [],
      editName: '',
      editColor: '',
      editDescription: '',
      editId: '',
    };
  },
  methods: {
    editCategory(id) {
      this.editName = this.editColor = this.editDescription =
        'Loading..............';
      console.log(id);
      console.log();
      return fetch(`${API}/category/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          this.editName = data.data.name;
          this.editColor = data.data.color;
          this.editDescription = data.data.description;
          this.editId = data.data.uuid;
        })
        .catch(error => console.log(error));
    },
    updateCategory() {},
  },
  created() {
    return fetch(`${API}/category`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.access_token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.categories = data.data;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style scoped>
#edit {
  text-align: center;
  border: 2px solid blue;
  cursor: pointer;
  height: 35px;
  width: 35px;
  background: aliceblue;
}
#addCategory {
  float: right;
}
</style>
