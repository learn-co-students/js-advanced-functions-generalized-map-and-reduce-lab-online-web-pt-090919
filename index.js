function map(src, cb) {
  let n = []
  
  for (let i = 0; i < src.length; i++) {
    let element = src[i]
    n.push(cb(element))    
  }
  return n;
}

function reduce(src, cb, starting){
    let n = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      n = cb(src[i], n)
    }
  
    return n;
  }