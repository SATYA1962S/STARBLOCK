const SHA256    =    require("crypto-js/sha256");
const hex2ascii = require("hex2ascii");
class Block{
        constructor(data){
          this.hash = null;                                           
          this.height = null;
          this.body =Buffer.from(JSON.stringify(data)).toString('hex') ;
          this.time = 0;
          this.previousBlockHash = null;  
        }
        