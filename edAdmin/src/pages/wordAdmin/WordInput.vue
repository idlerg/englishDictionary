<template>
    <div class="wi-wrapper">
        <div class="wi-change-List">
            <div class="wi-item">
                <span>单词:</span>
                <el-input
                    class="word-input"
                    placeholder="请输入内容"
                    v-model="input"
                    clearable>
                </el-input>
            </div>
            <div class="wi-item">
                <span>词性</span>
                <el-row class="demo-autocomplete">
                    <el-col>
                        <el-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        clearable
                        ></el-autocomplete>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="wi-change-List">
            <div class="wi-item">
                <span>词根</span>
                <el-input
                    placeholder="前缀"
                    v-model="input"
                    clearable>
                </el-input>
            </div>
            <div class="wi-item">
                <span>前缀</span>
                <el-input
                    placeholder="前缀"
                    v-model="input"
                    clearable>
                </el-input>
            </div>
            <div class="wi-item">
                <span>后缀</span>
                <el-input
                    placeholder="后缀"
                    v-model="input"
                    clearable>
                </el-input>
            </div>        
        </div>
        <div class="wi-change-List">
            <div class="wi-item">
                <span>词意</span>
                <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
                <div class="">
                    <dl v-for="(item, index) in wordList" :key="index">
                        <dt>{{item.name}}</dt>
                        <dd>{{item.translate}}</dd>
                    </dl>
                </div>
            </div>
            <div class="wi-item">
                <span>短语</span>
                <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
                <div class="">
                    <dl v-for="(item, index) in wordList" :key="index">
                        <dt>{{item.name}}</dt>
                        <dd>{{item.translate}}</dd>
                    </dl>
                </div>
            </div>
            <div class="wi-item">
                <span>例句</span>
                <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
                <div class="">
                    <dl v-for="(item, index) in wordList" :key="index">
                        <dt>{{item.name}}</dt>
                        <dd>{{item.translate}}</dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="wi-change-List">
            <div class="wi-item">
                <span>备注</span>
                <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="textarea"
                    maxlength="500"
                    show-word-limit
                    >
                </el-input>
            </div>
        </div>
        <div class="wi-submit">
            <el-button type="primary">提交</el-button>
        </div>
        <!-- 添加词条 -->
        <el-dialog title="添加词条" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="词条" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="词意" :label-width="formLabelWidth">
                    <el-input v-model="form.translate" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addword">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            restaurants: [],
            state1: '',
            state2: '',
            dialogFormVisible: false,
            textarea: '',
            wordList: [],
            form: {
                name: '',
                translate: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
    //   添加词条
    addword () {
        this.wordList.push({
            name: this.form.name,
            translate:this.form.translate
        })
        console.log(this.wordList)
        console.log(this.form.word,this.form.translate);
        this.dialogFormVisible = false
    }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>
<style scoped>
    .word-input {
        letter-spacing: 2px!important;
        font-size: 20px!important;
    }
    .el-input--suffix .el-input__inner {
        letter-spacing: 2px;
    }
    .el-input__inner  {
        letter-spacing: 2px!important;
        font-size: 20px!important;
    }
    .el-autocomplete {
        display: block;
    }
    .el-textarea__inner {
        min-height: 200px;
    }
    .wi-wrapper {
        width: 100%;
        box-sizing: border-box;
        padding: 40px;
    }
    .wi-change-List {
        display: flex;
    }
    .wi-item {
        width: 26%;
        margin-right: 40px;
        margin-bottom: 40px;
    }
    
    .wi-item span {
        display: block;
        width: 100%;
        margin-bottom: 18px;
    }

</style>