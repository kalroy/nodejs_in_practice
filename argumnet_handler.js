var args = {
    '-h': displayHelp,
    '-r': readFile
};

function displayHelp() {
    console.log('Argument help', args);
}

function readFile(fileName) {
    console.log('Reading:', fileName);
    require('fs').createReadStream(fileName).pipe(process.stdout);
}

if(process.argv.length > 0) {
    process.argv.forEach(function(arg, index){
        if(index > 1) {
            args[arg].apply(this, process.argv.splice(index + 1,1));
        }
    });
}