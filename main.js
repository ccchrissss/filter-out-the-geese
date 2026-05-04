function gooseFilter(birds) {

  let filteredArr = []

  birds.forEach( e => {
    !geese.includes(e) ? filteredArr.push(e) : ''
  })

  return filteredArr
}