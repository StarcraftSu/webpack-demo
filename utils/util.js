const hashCode = function(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };
//1. './entry.js'
//2.   
//   { 
//     id: 1394700561,
//     filename: './message.js',
//     dependencies: [ './name.js' ] 
//   } 
  const createGraph = function(entry,parser){
      const queue = []
      function helper(entry,parser){
        const node = parser(entry) // 1
        queue.push(node)
        while(node.dependencies.length){
            const dep = node.dependencies.shift()
            const subNode = parser(dep)       //2
            queue.push(subNode)
            if(subNode.dependencies){
                subNode.dependencies.forEach(entry=>{
                    helper(entry,parser)
                })
            }
        }
      }
      helper(entry,parser)
      return queue
  }

  module.exports = {
      hashCode,
      createGraph
  }