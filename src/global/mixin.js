import useFeedback from '@/hooks/useFeedback'
const { notifyOK, msgError } = useFeedback()

// 抽取公用的实例 - 操作成功与失败消息提醒内容等
export default {
  data() {
    return {
      mixinData: 'mixin测试数据',
    }
  },
  methods: {
    submitOk(msg, cb) {
      notifyOK(msg, cb)
    },
    submitFail(msg) {
      msgError(msg)
    },
  },
}
