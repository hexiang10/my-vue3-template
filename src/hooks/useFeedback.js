import { ElNotification } from 'element-plus'

export default function () {
  // 操作成功消息提醒内容
  function msgOk(msg) {
    ElMessage({
      showClose: true,
      message: msg || '操作成功！',
      type: 'success',
    })
  }

  // 操作失败消息提醒内容
  function msgError(msg) {
    ElMessage({
      showClose: true,
      message: msg || '网络异常，请稍后重试！',
      type: 'error',
    })
  }
  // 操作警告提醒内容
  function msgWarn(msg) {
    ElMessage({
      showClose: true,
      message: msg || '操作警告，请谨慎操作！',
      type: 'warning',
    })
  }

  // 操作成功消息提醒内容
  function notifyOK(msg, cb) {
    ElNotification({
      title: '成功',
      message: msg || '操作成功！',
      type: 'success',
      duration: 2000,
      onClose: function () {
        cb && cb()
      },
    })
  }

  return { msgOk, msgError, msgWarn, notifyOK }
}
