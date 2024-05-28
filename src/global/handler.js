export function handler(app) {
  app.config.warnHandler = (msg, vm, trace) => {
    try {
      // 使用正则表达式优化性能并提高匹配的灵活性
      const ignoreWarnings = [
        /Failed to resolve component: lord-icon/,
        /Third-party cookie will be blocked/,
      ]

      // 检查是否需要忽略当前警告
      const shouldIgnore = ignoreWarnings.some((pattern) => pattern.test(msg))

      // 如果警告不应被忽略，则输出到控制台
      if (!shouldIgnore) {
        console.error(msg, vm, trace)
      }
    } catch (error) {
      // 异常处理：记录错误信息，但不再进一步处理
      // 实际应用中，这里可以改为将错误发送到远程日志系统
      console.error('Error handling warning:', error)
    }
  }
}
