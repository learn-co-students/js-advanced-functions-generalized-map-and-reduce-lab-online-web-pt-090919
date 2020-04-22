// Add your functions here


function map(src, callback) {
  let r = []

  src.forEach(item => {
    r.push(callback(item))
  })
  return r;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (i; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}