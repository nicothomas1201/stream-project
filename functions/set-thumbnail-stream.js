function setThumbnailStream(url) {
  const width = '{width}'
  const height = '{height}'

  let replaceWidth = url.replace(width, '336')
  let finalURL = replaceWidth.replace(height, '188')

  return finalURL
  
}

export default setThumbnailStream
