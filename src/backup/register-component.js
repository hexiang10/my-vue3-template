// element-plus: https://element-plus.org/zh-CN/component/overview.html

const components = []

export default function (app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
