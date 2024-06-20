const parser = new DOMParser()

const xmlString =  `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`

const xmlDOM = parser.parseFromString(xmlString, 'text/xml')

const listNode = xmlDOM.querySelector('list')
const studentNode = listNode.querySelectorAll('student')

const data = Array.from(studentNode).map(item => {
  const nameNode = item.querySelector('name')
  const firstNode = item.querySelector('first')
  const secondNode = item.querySelector('second')
  const ageNode = item.querySelector('age')
  const profNode = item.querySelector('prof')
  const nameAttr = nameNode.getAttribute('lang')
  
  return {
      lang: nameAttr,
      first: firstNode.textContent,
      second: secondNode.textContent,
      age: ageNode.textContent,
      prof: profNode.textContent,
  }
})

console.log(data)