import fileDirName from "../utils.js";

const {__dirname} = fileDirName(import.meta);


export class FileManager { 
    constructor(path) {
        this.path = __dirname + path;
    }
}