function formatViewers( viewers ) {
  let views = viewers
  if( viewers >= 1000 && viewers <= 9999){
    let string = viewers.toString()
    views = `${string.slice(0, 1)}k`
  } else if( viewers >= 10000 && viewers <= 99999){
    let string = viewers.toString()
    views = `${string.slice(0, 2)}k`
  } else if( viewers >= 100000 && viewers <= 999999){
    let string = viewers.toString()
    views = `${string.slice(0, 3)}k`
  }

  return views
  
}

export default formatViewers
