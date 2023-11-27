import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default {
  install(app) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      // import all base components
      eager: true
    })

    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        ) // get component name from path
        )
        
        //console.log(componentName)
        app.component(`Base${componentName}`, module.default) // register component
    })
  }
}
