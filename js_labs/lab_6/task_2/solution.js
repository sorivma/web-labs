function camelCaseConverter(string) {
  const words = string.split(' ')

  let result = words[0].toLowerCase()

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }

  return result
}

function pascalCaseConverter(string) {
  const words = string.split(' ')

  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')
}

function solve() {
  text = document.getElementById('text').value
  namingConvention = document.getElementById('naming-convention').value
  resultDiv = document.getElementById('result')

  converters = {
    "Camel Case" : camelCaseConverter,
    'Pascal Case' : pascalCaseConverter
  }

  converter = converters[namingConvention]
  if (converter) {
    resultDiv.innerHTML = converter(text)
  } else {
    resultDiv.innerHTML = "Error!"
  }
}