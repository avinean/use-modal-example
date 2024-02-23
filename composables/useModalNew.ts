import type { Component } from 'vue'

type Props<T> = T extends new () => { $props: infer P, $emit: infer E } ? NonNullable<P> & { [K in keyof NonNullable<E> as `on${Capitalize<string & K>}`]: NonNullable<E>[K] } :
  T extends (props: infer P, ctx: { slots: any, attrs: any, emit: infer E }, ...args: any) => any ? P & { [K in keyof NonNullable<E> as `on${Capitalize<string & K>}`]: NonNullable<E>[K] } :
      {}

export const useModalNew = createGlobalState(() => {
  const configs = ref<{
    component: Component
    props?: Record<string, any>
  }[]>([])

  function open<T extends Component>(component: T, props?: Props<T>) {
    configs.value.push({
      component: markRaw(component),
      props,
    })
  }

  function close() {
    configs.value.pop()
  }

  return {
    configs,
    open,
    close,
  }
})
