// app.ts 会被打包成 /__build__/[name].js

import axios, { AxiosError } from '../../src/index'

// POST
axios({
  method: 'post',
  url: '/simple/post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
})
  .then(res => {
    console.log('res===>', res)
  })
  .catch((e: AxiosError) => {
    console.log(e.message)
    console.log(e.code)
  })
