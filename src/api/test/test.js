import http from '@/service'
import useFeedback from '@/hooks/useFeedback'
const { msgWarn } = useFeedback()

export default {
  async getTestData_01() {
    try {
      const res = await http.get({
        url: 'https://picsum.photos/v2/lis',
      })
      // todo: 这里可以对返回结果做处理
      return res
    } catch (err) {
      // 请求失败可以走mock数据获取，或者提示错误
      msgWarn('模拟请求失败，使用mock数据')
      return await http.get({
        url: '/test/helloword',
      })
    }
  },

  getTestData_02() {
    return http.get({
      url: 'https://picsum.photos/v2/list?page=1&limit=20',
    })
  },
}
