<template>
  <div>
    <button
      class="btn btn-primary mb-2"
      id="addCategory"
      data-toggle="modal"
      data-target="#createCategoryModal"
    >
      Add Category
    </button>
    <label for=""> {{ categories.length }} </label>
    <table class="table hover" id="categoryTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="category.uuid" v-for="category in categories">
          <td>{{ category.name }}</td>
          <td>{{ category.color }}</td>
          <td>{{ category.description }}</td>
          <td>{{ category.created_at }}</td>
          <td>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwMXB0IiB2aWV3Qm94PSIwIC0xIDQwMS41MjI4OSA0MDEiIHdpZHRoPSI0MDFwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGVmZDEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGFjZWEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtNTUuMjI4IDQ1OC4wMTIzMzUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI0NS41MjMiIHgyPSIyNDUuNTIzIiB4bGluazpocmVmPSIjYSIgeTE9IjQ2MCIgeTI9IjMyIi8+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC01NS4yMjggNDU4LjAxMjMzNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzEwLjA4NCIgeDI9IjMxMC4wODQiIHhsaW5rOmhyZWY9IiNhIiB5MT0iNDYwIiB5Mj0iMzIiLz48cGF0aCBkPSJtMzcwLjU4OTg0NCAyNTAuOTcyNjU2Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjg4Ljc4OTA2M2MtLjAxOTUzMiAxNi41NjI1LTEzLjQzNzUgMjkuOTg0Mzc1LTMwIDMwaC0yODAuNTg5ODQ0Yy0xNi41NjI1LS4wMTU2MjUtMjkuOTgwNDY5LTEzLjQzNzUtMzAtMzB2LTI2MC41ODk4NDRjLjAxOTUzMS0xNi41NTg1OTQgMTMuNDM3NS0yOS45ODA0NjkgMzAtMzBoODguNzg5MDYyYzUuNTIzNDM4IDAgMTAtNC40NzY1NjMgMTAtMTAgMC01LjUxOTUzMS00LjQ3NjU2Mi0xMC0xMC0xMGgtODguNzg5MDYyYy0yNy42MDE1NjIuMDMxMjUtNDkuOTY4NzUgMjIuMzk4NDM3LTUwIDUwdjI2MC41OTM3NWMuMDMxMjUgMjcuNjAxNTYzIDIyLjM5ODQzOCA0OS45Njg3NSA1MCA1MGgyODAuNTg5ODQ0YzI3LjYwMTU2Mi0uMDMxMjUgNDkuOTY4NzUtMjIuMzk4NDM3IDUwLTUwdi04OC43OTI5NjljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTM3Ni42Mjg5MDYgMTMuNDQxNDA2Yy0xNy41NzQyMTgtMTcuNTc0MjE4LTQ2LjA2NjQwNi0xNy41NzQyMTgtNjMuNjQwNjI1IDBsLTE3OC40MDYyNSAxNzguNDA2MjVjLTEuMjIyNjU2IDEuMjIyNjU2LTIuMTA1NDY5IDIuNzM4MjgyLTIuNTY2NDA2IDQuNDAyMzQ0bC0yMy40NjA5MzcgODQuNjk5MjE5Yy0uOTY0ODQ0IDMuNDcyNjU2LjAxNTYyNCA3LjE5MTQwNiAyLjU2MjUgOS43NDIxODcgMi41NTA3ODEgMi41NDY4NzUgNi4yNjk1MzEgMy41MjczNDQgOS43NDIxODcgMi41NjY0MDZsODQuNjk5MjE5LTIzLjQ2NDg0M2MxLjY2NDA2Mi0uNDYwOTM4IDMuMTc5Njg3LTEuMzQzNzUgNC40MDIzNDQtMi41NjY0MDdsMTc4LjQwMjM0My0xNzguNDEwMTU2YzE3LjU0Njg3NS0xNy41ODU5MzcgMTcuNTQ2ODc1LTQ2LjA1NDY4NyAwLTYzLjY0MDYyNXptLTIyMC4yNTc4MTIgMTg0LjkwNjI1IDE0Ni4wMTE3MTgtMTQ2LjAxNTYyNSA0Ny4wODk4NDQgNDcuMDg5ODQ0LTE0Ni4wMTU2MjUgMTQ2LjAxNTYyNXptLTkuNDA2MjUgMTguODc1IDM3LjYyMTA5NCAzNy42MjUtNTIuMDM5MDYzIDE0LjQxNzk2OXptMjI3LjI1NzgxMi0xNDIuNTQ2ODc1LTEwLjYwNTQ2OCAxMC42MDU0NjktNDcuMDkzNzUtNDcuMDkzNzUgMTAuNjA5Mzc0LTEwLjYwNTQ2OWM5Ljc2MTcxOS05Ljc2MTcxOSAyNS41ODk4NDQtOS43NjE3MTkgMzUuMzUxNTYzIDBsMTEuNzM4MjgxIDExLjczNDM3NWM5Ljc0NjA5NCA5Ljc3MzQzOCA5Ljc0NjA5NCAyNS41ODk4NDQgMCAzNS4zNTkzNzV6bTAgMCIgZmlsbD0idXJsKCNjKSIvPjwvc3ZnPg=="
              @click="editCategory(category.uuid)"
              id="editIcon"
              data-toggle="modal"
              data-target="#editCategoryModal"
            />
            <!-- <img
              src="https://img.icons8.com/fluent/48/000000/edit-pie-chart-report.png"
              
            /> -->
          </td>
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
                  id="ename"
                  class="form-control"
                  v-model="editName"
                />
              </div>
              <div>
                <label for="color">Enter Color</label>
                <input
                  type="text"
                  name="color"
                  id="ecolor"
                  class="form-control"
                  v-model="editColor"
                />
              </div>
              <div>
                <label> Please Enter Description</label>
                <input
                  type="text"
                  name="description"
                  id="edescription"
                  class="form-control"
                  v-model="editDescription"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              id="editCategoryModal"
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
            {{ message }}
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
              id="closeCreateModal"
              @click="
                () => {
                  (editName = ''), (editColor = ''), (editDescription = '');
                }
              "
            >
              Close
            </button>
            <button
              type="button"
              @click="createCategory"
              class="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isSignedIn } from '../../helper';
import { API } from '../../bakend';
import CategoryStore from '../../store/category';
var $ = require('jquery');
const dt = require('datatables.net');
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
      filter: '',
      message: '',
    };
  },
  methods: {
    async editCategory(id) {
      try {
        this.editName = this.editColor = this.editDescription =
          'Loading..............';
        const { data } = await CategoryStore.editCategory(id);
        this.editName = data.data.name;
        this.editColor = data.data.color;
        this.editDescription = data.data.description;
        this.editId = data.data.uuid;
      } catch (error) {
        console.log(error);
      }
    },
    async updateCategory() {
      const info = {
        name: this.editName,
        color: this.editColor,
        description: this.editDescription,
      };
      try {
        const { data } = await CategoryStore.updateCategory(this.editId, info);
        await document.querySelector('#editCategoryModal').click();
        await this.fetchCategories();
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories() {
      try {
        const { data } = await CategoryStore.fetchCategories();
        this.categories = data.data;
      } catch (error) {
        return console.log(error);
      }
    },
    async createCategory() {
      const createInfo = {
        name: this.editName,
        color: this.editColor,
        description: this.editDescription,
      };
      try {
        const { data } = await CategoryStore.createCategory(createInfo);
        if (data.status === 0) {
          return (this.message = data.message);
        } else {
          document.querySelector('#closeCreateModal').click();
          (this.editName = ''),
            (this.editColor = ''),
            (this.editDescription = '');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    await this.fetchCategories();
    await $(document).ready(function() {
      $('#categoryTable').DataTable({
        paging: true,
        scrollY: 300,
        searching: true,
        select: true,
      });
    });
    await dt()();
  },
};
</script>

<style scoped>
@import url('https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');

table,
th,
td {
  background-color: #ffff;
  color: grey;
}

th,
td {
  font-family: 'Ubuntu', sans-serif;
}

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
#editIcon {
  cursor: pointer;
  height: 35px;
  width: 35px;
}
</style>
