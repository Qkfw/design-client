<template>
  <div id="getup-record">
    <h1 class="main-title">个人记录</h1>
    <div class="top-wrapper">
      <div class="left-wrapper">
        <RecordButton
          @click="handleBtnClick"
          :disable="btnDisable"
          btn-color="#1890ff"
        ></RecordButton>
      </div>
      <div class="right-wrapper">
        <RecordList
          @change="handleSelectedChange"
          :records="userGetupRecords"
        ></RecordList>
      </div>
    </div>
    <h1 class="main-title">折线图表</h1>
    <div class="botttom-wrapper">
      <div class="chart-wrapper" v-loading="chartLoading">
        <Chart :char-data="charData"></Chart>
      </div>
    </div>
  </div>
</template>

<script>
import RecordButton from './component/RecordButton'
import RecordList from './component/RecordList'
import Chart from './component/Chart'
import { getUserRecords, addRecord, getLineChartData } from '@/api/record'
export default {
  name: 'GetupRecord',
  components: {
    RecordButton,
    RecordList,
    Chart
  },
  data() {
    return {
      btnDisable: true,
      userGetupRecords: [],
      charData: {},
      days: 7,
      chartLoading: false
    }
  },
  computed: {
    userId() {
      return this.$store.getters.allUserInfo.id
    },
    roomId() {
      return this.$store.getters.allUserInfo.roomId
    }
  },
  watch: {
    userGetupRecords(newVal) {
      if (newVal[0].time) {
        this.btnDisable = true
      } else {
        this.btnDisable = false
      }
    }
  },
  methods: {
    handleBtnClick() {
      if (!this.btnDisable) {
        // 点击打卡
        const currentHour = parseInt(this.$moment().format('HH'))
        if (currentHour < 5) {
          this.$message('时间还太早，暂不开放打卡')
        } else {
          addRecord({ type: 'getup' }).then(() => {
            this.btnDisable = true
            this.fetchUserRecords(this.days).then(records => {
              this.userGetupRecords = records
            })
          })
        }
      }
    },
    async fetchUserRecords(days) {
      const res = await getUserRecords({
        type: 'getup',
        userId: this.userId,
        days
      })
      return res.data.records
    },
    handleSelectedChange(value) {
      this.days = value
      this.fetchUserRecords(value).then(records => {
        this.userGetupRecords = records
      })
    }
  },
  mounted() {
    // 获取用户个人早起信息
    this.fetchUserRecords(this.days).then(records => {
      this.userGetupRecords = records
    })
    // 获取折线图数据
    this.chartLoading = true
    getLineChartData({ type: 'getup', roomId: this.roomId })
      .then(res => {
        const { charData } = res.data
        this.charData = charData
      })
      .finally(() => {
        this.chartLoading = false
      })
  }
}
</script>

<style lang="scss" scoped>
#getup-record {
  padding: 50px 60px 0px;
  .top-wrapper {
    display: flex;
    margin: 40px 0;
    .left-wrapper {
      background-color: #030000;
      border-radius: 5px;
      padding: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right-wrapper {
      background-color: #030000;
      margin-left: 20px;
      border-radius: 5px;
      width: 100%;
      padding: 20px;
    }
  }
  .botttom-wrapper {
    margin: 40px 0;
    color: #ffffff;
    background-color: #030000;
    border-radius: 5px;
    padding: 20px;
  }
}
</style>
