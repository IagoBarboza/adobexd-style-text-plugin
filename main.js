const { Text, Color } = require('scenegraph')

const createStyledText = (selection) => {
  const node = new Text()
  node.text = 'This is some red text'
  node.fill = new Color('Red')
  node.fontSize = 24

  selection.insertionParent.addChild(node)
  node.moveInParentCoordinates(20, 50)
}

module.exports = {
  commands: {
    createStyledText
  }
}