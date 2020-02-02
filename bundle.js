const fs = require('fs') //file system
const babylon = require('babylon')
const path = require('path')
const traverse = require('babel-traverse').default
const babel = require('babel-core')
const Dep = require('./modules/Dep')
const { hashCode } = require('./utils/util')
// import fs from 'fs'
// import babylon from 'babylon'
// import path from 'path'
// import traverse from 'babel-traverse'
// import babel from 'babel-core'
// import Dep from './modules/Dep'
// import { hashCode } from './utils/util'
function createAsset(filename){
    const content = fs.readFileSync(filename,'utf-8')
    const ast  =babylon.parse(content,{
        sourceType:'module'
    })
    const dependencies = new Dep()
    traverse(ast,{
        ImportDeclaration:({node})=>{
            dependencies.addDep(node.source.value)
        }
    })

    const { code } = babel.transformFromAst(ast,null,{
        presets:['env']
    })
    const fileInfo = {
        id:hashCode(filename),
        filename,
        dependencies:dependencies.dep,
        code
    }
    return fileInfo
}

function createGraph(entry){
    const mainAsset = createAsset(entry) // will return an object which describe the entry file
    const queue = [mainAsset] // push it into a queue
    for(const asset of queue){
        const dirname = path.dirname(asset.filename)

        asset.mapping = {}

        asset.dependencies.forEach(relativePath=>{
            const absolutePath = path.join(dirname,relativePath)
            const child = createAsset(absolutePath)
            asset.mapping[relativePath] = child.id

            queue.push(child)
        })
    }

    return queue
}

function bundle(graph){
    let modules = ''
    graph.forEach(mod=>{
        modules += `${mod.id}:[
            function(require,module,exports){ 
                ${mod.code} 
            },
            ${JSON.stringify(mod.mapping)},
        ],`
    })
    const result = `(function(modules){
        function require(id){
            const [fn,mapping] = modules[id]

            function localRequire(relativePath){
                return require(mapping[relativePath])
            }

            const module = { exports: {} }
            fn(localRequire,module,module.exports)

            return module.exports
        }

        require(${hashCode('./entry.js')})
    })({
        ${modules}
    })`

    return result
}

const graph = createGraph('./entry.js')
const result = bundle(graph)
console.log(result)