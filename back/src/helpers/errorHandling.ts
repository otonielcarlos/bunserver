async function usePromise(promiseFunction, params: string = null) {
  try {
    if(params){
      const data = await promiseFunction(params)
      return [data, null]
    } else {
      const data = await promiseFunction()
      return [data, null]
    }
  } catch (error) {
    return [null, error]
  }
}

export default usePromise