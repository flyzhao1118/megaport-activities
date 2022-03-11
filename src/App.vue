<template>
  <div id="main">
    <div class="head-zone flex-box">
      <button type="button" class="add-zone" @click="toggleModal">Add</button>
      <div class="filter-zone">
        <label for="filter-input">filter:</label>
        <input id="filter-input" type="text" v-model="filterStr" />
      </div>
    </div>
    <div class="table-zone">
      <table class="baked-table">
        <thead>
          <tr>
            <th>
              <div class="flex-box">
                <div>id</div>
                <div class="sort-sign-zone">
                  <div class="sort-sign sort-sign-up pointer" :class="{active: sortType===1&&sortIndex==='id'}" @click="tableSort(1, 'id')"></div>
                  <div class="sort-sign sort-sign-down pointer" :class="{active: sortType===-1&&sortIndex==='id'}" @click="tableSort(-1, 'id')"></div>
                </div>
              </div>
            </th>
            <th>
              <div class="flex-box">
                <div>type</div>
                <div class="sort-sign-zone">
                  <div class="sort-sign sort-sign-up pointer" :class="{active: sortType===1&&sortIndex==='type'}" @click="tableSort(1, 'type')"></div>
                  <div class="sort-sign sort-sign-down pointer" :class="{active: sortType===-1&&sortIndex==='type'}" @click="tableSort(-1, 'type')"></div>
                </div>
              </div>
            </th>
            <th>
              <div class="flex-box">
                <div>name</div>
                <div class="sort-sign-zone">
                  <div class="sort-sign sort-sign-up pointer" :class="{active: sortType===1&&sortIndex==='name'}" @click="tableSort(1, 'name')"></div>
                  <div class="sort-sign sort-sign-down pointer" :class="{active: sortType===-1&&sortIndex==='name'}" @click="tableSort(-1, 'name')"></div>
                </div>
              </div>
            </th>
            <th>topping</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in currentTableData" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.type}}</td>
            <td>{{item.name}}</td>
            <td>{{item.topping}}</td>
          </tr>
        </tbody>
      </table>
      <div class="no-data" v-show="currentTableData.length===0">No Data!</div>
    </div>
    <div class="modal flex-box" v-show="modalFlag">
      <div class="modal-dialog">
        <form class="form-zone">
          <div class="form-item">
              <label for="baked-id" class="required">id:<span class="required">*</span></label>
              <input id="baked-id" type="text" v-model="formData.id" />
          </div>
          <div class="form-item">
              <label for="baked-type" class="required">type:<span class="required">*</span></label>
              <input id="baked-type" type="text" v-model="formData.type" />
          </div>
          <div class="form-item">
              <label for="baked-name" class="required">name:<span class="required">*</span></label>
              <input id="baked-name" type="text" v-model="formData.name" />
          </div>
          <div class="form-item">
              <label for="baked-topping" class="required">topping:<span class="required">*</span></label>
              <input id="baked-topping" type="text" v-model="formData.topping" />
          </div>
        </form>
        <div class="button-zone flex-box">
          <button type="button" @click="addData">Add</button>
          <button type="button" @click="toggleModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs, computed} from 'vue';

export default {
  name: 'App',
  setup() {
    //data for table function
    const tableDataSet = reactive({
      originTableData: [
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Regular Glazed"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Regular Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Regular Powdered Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Regular Chocolate with Sprinkles"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Regular Chocolate"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Regular Maple"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Chocolate None"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Chocolate Glazed"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Chocolate Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Chocolate Powdered Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Chocolate Chocolate with Sprinkles"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Chocolate Chocolate"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Chocolate Maple"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Blueberry None"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Blueberry Glazed"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Blueberry Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Blueberry Powdered Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Blueberry Chocolate with Sprinkles"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Blueberry Chocolate"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Blueberry Maple"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Devil's Food None"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Devil's Food Glazed"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Devil's Food Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Devil's Food Powdered Sugar"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Devil's Food Chocolate with Sprinkles"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Devil's Food Chocolate"
        },
        {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "topping": "Devil's Food Maple"
        },
        {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "topping": "Regular None"
        },
        {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "topping": "Regular Glazed"
        },
        {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "topping": "Regular Sugar"
        },
        {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "topping": "Regular Chocolate"
        },
        {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "topping": "Regular Maple"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Regular None"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Regular Glazed"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Regular Chocolate"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Regular Maple"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Chocolate None"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Chocolate Glazed"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Chocolate Chocolate"
        },
        {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "topping": "Chocolate Maple"
        },
        {
        "id": "0004",
        "type": "bar",
        "name": "Bar",
        "topping": "Regular Chocolate"
        },
        {
        "id": "0004",
        "type": "bar",
        "name": "Bar",
        "topping": "Regular Maple"
        },
        {
        "id": "0005",
        "type": "twist",
        "name": "Twist",
        "topping": "Regular Glazed"
        },
        {
        "id": "0005",
        "type": "twist",
        "name": "Twist",
        "topping": "Regular Sugar"
        },
        {
        "id": "0006",
        "type": "filled",
        "name": "Filled",
        "topping": "Regular Glazed"
        },
        {
        "id": "0006",
        "type": "filled",
        "name": "Filled",
        "topping": "Regular Powdered Sugar"
        },
        {
        "id": "0006",
        "type": "filled",
        "name": "Filled",
        "topping": "Regular Chocolate"
        },
        {
        "id": "0006",
        "type": "filled",
        "name": "Filled",
        "topping": "Regular Maple"
        },
      ],
      filterStr: null,
      sortType: 1,
      sortIndex: 'id'
    });

    const currentTableData = computed(() => {
      let array;
      if (tableDataSet.filterStr) {
        array = tableDataSet.originTableData.filter(x => x.id.includes(tableDataSet.filterStr) || x.type.includes(tableDataSet.filterStr) || x.name.includes(tableDataSet.filterStr) || x.topping.includes(tableDataSet.filterStr))
      }
      else array = tableDataSet.originTableData;
      return array.sort((a, b) => tableDataSet.sortType * a[tableDataSet.sortIndex].localeCompare(b[tableDataSet.sortIndex]))
    })

    const tableSort = (sortType, sortIndex) => {
      tableDataSet.sortType = sortType;
      tableDataSet.sortIndex = sortIndex;
    }

    //add data function
    const addFormDataSet = reactive({
      modalFlag: false,
      formData: {
        id: '',
        type: '',
        name: '',
        topping: ''
      }
    });

    const toggleModal = () => {
      addFormDataSet.modalFlag = !addFormDataSet.modalFlag;
      if (!addFormDataSet.modalFlag) {
        addFormDataSet.formData = {
          id: '',
          type: '',
          name: '',
          topping: ''
        }
      }
    }

    const addData = () => {
      for (let i in addFormDataSet.formData) {
        if (addFormDataSet.formData.hasOwnProperty(i)) {
          if (!addFormDataSet.formData[i].trim()) {
            alert(`${i} is required!`);
            return
          }
        }
      }
      tableDataSet.originTableData.push(addFormDataSet.formData);
      toggleModal();
    }

    return {
      ...toRefs(tableDataSet),
      ...toRefs(addFormDataSet),
      currentTableData,
      tableSort,
      toggleModal,
      addData
    }
  }
}
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/preset.css";

#main {
  padding: 50px;
}

#main .head-zone {
  margin: 20px 0;
}

#main .head-zone .filter-zone {
  margin-left: 50px;
}

#main .table-zone .baked-table {
  width: 80%;
  border-collapse: collapse;
}

#main .table-zone .baked-table thead th {
  color: #555;
  border: 1px solid #d4d4d4;
  font-size: 13px;
  text-align: left;
  line-height: 2rem;
  padding: 7px 5px;
}

#main .table-zone .baked-table tbody tr {
  background-color: #fff;
}

#main .table-zone .baked-table tbody tr:nth-child(odd) {
  background-color: #f6f4f0;
}

#main .table-zone .baked-table tbody td {
  line-height: 2rem;
  min-width: 24px;
  border: 1px solid #d4d4d4;
  padding: 7px 5px;
}

#main .table-zone .baked-table .sort-sign-zone {
  width: 20px;
  height: 20px;
  position: relative;
}

#main .table-zone .baked-table .sort-sign-zone .sort-sign {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 5px solid transparent;
}

#main .table-zone .baked-table .sort-sign-zone .sort-sign-up {
  border-bottom-color: #ccc;
  transform: translate(-50%, calc(-50% - 7px));
}

#main .table-zone .baked-table .sort-sign-zone .sort-sign-up.active {
  border-bottom-color: #111;
}

#main .table-zone .baked-table .sort-sign-zone .sort-sign-down {
  border-top-color: #ccc;
  transform: translate(-50%, calc(-50% + 7px));
}

#main .table-zone .baked-table .sort-sign-zone .sort-sign-down.active {
  border-top-color: #111;
}

#main .table-zone .no-data {
  width: 80%;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

#main .form-zone {
  padding: 50px 50px 20px;
}

#main .form-zone .form-item {
  margin-bottom: 20px;
}

#main .form-zone label {
  width: 60px;
}

#main .form-zone label .required {
  color: rgb(228, 85, 60);
}

</style>
