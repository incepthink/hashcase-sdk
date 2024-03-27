import * as fs from 'fs'
import * as path from 'path'

const fixTypeDefinitions = dirPath => {
  fs.readdirSync(dirPath).forEach(file => {
    const filePath = path.join(dirPath, file)
    if (file.endsWith('.d.ts')) {
      let content = fs.readFileSync(filePath, 'utf8')
      content = content.replace(/import\("types\/modelTypes"\)\./g, '')
      fs.writeFileSync(filePath, content, 'utf8')
    } else if (fs.statSync(filePath).isDirectory()) {
      fixTypeDefinitions(filePath)
    }
  })
}

fixTypeDefinitions('./dist')
