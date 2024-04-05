export const removeUndefined = (obj: { [x: string]: any }) => {
  const newObj: any = {}

  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      if (obj[key] === null || key === 'place') {
        newObj[key] = convertObjectToArray(obj[key])
      } else {
        newObj[key] = obj[key].map((item: any) => removeUndefined(item))
      }
    } else if (obj[key] === Object(obj[key])) {
      newObj[key] = removeUndefined(obj[key])
    } else if (obj[key] !== undefined && obj[key] !== null) {
      newObj[key] = obj[key]
    }
  })
  return newObj
}

export const convertObjectToArray = (inputObject: any) => {
  const arrayWithoutNumericKey = Object.values(inputObject)
  return arrayWithoutNumericKey
}
