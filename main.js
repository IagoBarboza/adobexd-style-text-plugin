const { Text, Color } = require('scenegraph')

const createStyledText = (selection) => {
  const node = new Text()

  node.text = 'This is some red text'

  node.fill = new Color('Red')

  node.fontSize = 24

  selection.insertionParent.addChild(node)

  node.moveInParentCoordinates(20, 50)
}

const createRainbowStyledText = (selection) => {
  const node = new Text()

  const textData = [
    { text: 'This ', color: 'red' },
    { text: 'is ', color: 'orange' },
    { text: 'some ', color: 'yellow' },
    { text: 'ra', color: 'green' },
    { text: 'in', color: 'blue' },
    { text: 'bow ', color: 'indigo' },
    { text: 'text', color: 'violet' }
  ]

  node.text = textData.map(i => i.text).join('')

  node.styleRanges = textData.map(i => ({
    length: i.text.length,
    fill: new Color(i.color)
  }))

  node.fontSize = 24

  selection.insertionParent.addChild(node)
  
  node.moveInParentCoordinates(20, 50)
} 

module.exports = {
  commands: {
    createStyledText,
    createRainbowStyledText
  }
}