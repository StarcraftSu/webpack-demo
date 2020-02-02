
Node {
  type: 'File',
  start: 0,
  end: 75,
  loc:
   SourceLocation {
     start: Position { line: 1, column: 0 },
     end: Position { line: 3, column: 41 } },
  program:
   Node {
     type: 'Program',
     start: 0,
     end: 75,
     loc: SourceLocation { start: [Position], end: [Position] },
     sourceType: 'module',
     body: [ [Node], [Node] ],
     directives: [] },
  comments: [],
  tokens:
   [ Token {
       type: [KeywordTokenType],
       value: 'import',
       start: 0,
       end: 6,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: undefined,
       start: 7,
       end: 8,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: 'name',
       start: 9,
       end: 13,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: undefined,
       start: 14,
       end: 15,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: 'from',
       start: 16,
       end: 20,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: './name.js',
       start: 21,
       end: 32,
       loc: [SourceLocation] },
     Token {
       type: [KeywordTokenType],
       value: 'export',
       start: 34,
       end: 40,
       loc: [SourceLocation] },
     Token {
       type: [KeywordTokenType],
       value: 'default',
       start: 41,
       end: 48,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: undefined,
       start: 49,
       end: 50,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: 'hello my name is ',
       start: 50,
       end: 67,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: undefined,
       start: 67,
       end: 69,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: 'name',
       start: 69,
       end: 73,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: undefined,
       start: 73,
       end: 74,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: '',
       start: 74,
       end: 74,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: undefined,
       start: 74,
       end: 75,
       loc: [SourceLocation] },
     Token {
       type: [TokenType],
       value: undefined,
       start: 75,
       end: 75,
       loc: [SourceLocation] } ] }


       (function(modules) {
        function require(id) {
            const [fn, mapping] = modules[id]
    
            function localRequire(relativePath) {
                return require(mapping[relativePath])
            }
    
            const module = {
                export: {}
            }
            fn(localRequire, module, module.exports)
        }
    
        require(1594410746)
    
        return module.exports
    })({
        1594410746: [
            function(require, module, exports) {
                "use strict";
    
                var _message = require("./message.js");
    
                var _message2 = _interopRequireDefault(_message);
    
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
    
                console.log(_message2.default);
            },
            {
                "./message.js": 1690769264
            },
        ],
        1690769264: [
            function(require, module, exports) {
                "use strict";
    
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
    
                var _name = require("./name.js");
    
                exports.default = "hello my name is " + _name.name;
            },
            {
                "./name.js": 1721905036
            },
        ],
        1721905036: [
            function(require, module, exports) {
                "use strict";
    
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var name = exports.name = 'Starcraft Su';
            },
            {},
        ],
    })