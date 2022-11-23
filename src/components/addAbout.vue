<template>
  <div>
    <h1 class="top container">to do list</h1>

    <div class="box container">
      <div class="box-top">
        <input v-model="textContent" @keyup.enter="addTask" type="text" placeholder="Task mới ....">
        <button @click="addTask" class="add">
          Add task
        </button>
      </div>

      <div class="task container">
        <div v-for="(todo, index) in todos" :key="todo.id" class="main">
          <input type="checkbox" :checked="todo.checked" v-model="todo.checked">
          <input type="text" class="check" v-bind:class="{ 'done-task' :todo.completed }" v-model="todo.name">
          <span @click="deleteTask(index)" class="delete" style="cursor: pointer;">x</span>
        </div>
      </div>
    </div>

    <div class="fitter container">
      <div class="tick">
        <input id="cb1" type="checkbox" @click="checkAll(true)">Check all
        <input id="cb1" type="checkbox" @click="checkAll(false)">Uncheck all
      </div>

      <div class="hop">
        <button class="hov" @click="delAll()">DELETE</button>
        <button class="hov" @click="doneAll()">DONE </button>
      </div>
    </div>

  </div>

</template>

<script>
// import func from 'vue-editor-bridge';

export default {
  name: 'Todos',
  data: function () {

    return {
      todos: [
        {
          'id': 1,
          'name': 'bắt đầu thôi ',
          'checked': false,
          'completed': false
        }
      ],
      textContent: "",
      code: 2
    }
  },

  methods: {
    addTask: function () {
      if (this.textContent.trim().length === 0) {
        return;
      }
      console.log('vao')
      this.code++;
      this.todos.push(
        {
          'id': this.code,
          'name': this.textContent,
          'checked': false,
          'completed': false
        }
      ),
        //xóa nd đã add
        this.textContent = ''
    },

    deleteTask: function (index) {
      if (confirm("bạn có chắc chắn xóa ko ?")) {
        this.todos.splice(index, 1);
      }
      alertBox = this.todos.id
    },

    checkAll: function (flag) {
      this.todos.forEach(todo => {
        todo.checked = flag;
      });
    },

    doneAll: function () {
      if (confirm("bạn có chắc đã hoàn thành chưa ?")) {
        this.todos.filter(function (item) {
          if (item.checked) {
            item.completed = true;
          }
        });
        //xóa tick
        this.checkAll(false)
      }
    },

    delAll: function () {
      if (confirm("Bạn có chắc chắn xóa ?")) {
        this.todos = this.todos.filter(function (item) {
          return !item.checked;
        });
      }
    }
  }
}
</script>
 
<style scoped>
.top {
  text-align: center;
  text-transform: uppercase;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px 0;
}

.box {
  width: 80%;
  box-shadow: 0px 12px 23px 0px #c1c1c1;
  border: 1px solid #e2e2e2;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.box-top input {
  width: 88%;
  padding: 0 10px;
  color: rgb(16, 15, 15);
  margin: 20px;
  outline: none;
  border: 1px solid #9c9696;
  border-radius: 3px;
  height: 36px;
}

.box-top input:focus {
  box-shadow: 1px 1px 11px 6px cornflowerblue;
  border: 1px solid #1dbddd;
}

.add {
  border: 1px solid;
  border-radius: 5px;
  font-size: 12px;
  background: #212529;
  font-weight: 700;
  color: white;
  padding: 5px;
  height: 38px;
  width: 70px;
}

.add:hover {
  background: rgba(250, 250, 250, 0.25);
  color: #212529;
  font-weight: 700;
}

.delete {
  display: none;
  float: right;
}

.main:hover .delete {
  display: block;
  color: white;
  width: 70px;
  text-align: center;
  background: #ba1515;
  border-radius: 5px;
  padding-bottom: 4px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
}

.completed {
  color: rgb(130 125 125);
  text-decoration: line-through;
}

.main {
  text-transform: capitalize;
  font-size: 19px;
  margin: 10px 0;
  cursor: pointer;
}

.check {
  cursor: pointer;
  margin-right: 10px;
  border: none;
  width: 70%;
  margin-left: 10px;
  text-transform: capitalize;
  font-weight: 600;
}

.done-task {
  text-decoration: line-through;
  color: orange;
}

.fitter {
  display: flex;
  justify-content: space-between;
  width: 80%;
  background: #a8f3a8;
  height: 40px;
  padding-top: 10px;
}

#cb1 {
  accent-color: green;
}

.hop button {
  margin: 0 5px;
  border: none;
  font-weight: 400;
}

.hov:nth-child(2) {
  color: white;
  background: green
}

.hov:hover {
  background: #212529;
  color: white;
}

@media only screen and (min-width: 501px) and (max-width: 1024px) {
  .box-top input {
    width: 75%;
  }
}

@media only screen and (max-width: 500px) {
  .box-top input {
    width: 55%;
  }

  .check {
    width: 65%;
  }

  .fitter {
    flex-direction: column;
    height: 80px;
    padding-bottom: 10px;
  }

  #cb1 {
    margin-left: 35px;
  }

  .hop {
    text-align: center;
  }

  .hop>button {
    margin: 0 10px;
  }

  #alertBox {
    background: #1dbddd;
    color: red;
  }
  .main:hover .delete{
    width: 40px;
  }
  .tick{
    font-size: 14px
  }
}
</style>

