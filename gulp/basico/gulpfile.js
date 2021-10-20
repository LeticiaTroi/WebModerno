const gulp = require('gulp')
const { series, parallel }  = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB')) // copiou arquivos da pastaA para a pastaB(e criou ela)
    //.pipe(imagemPelaMetade())
    //.pipe(ImagemEmPretoEBranco())
    //.pipe(transformacaoA())
    //.pipe(transformacaoB())
    //.pipe(transformacaoC())
    return cb()
}

function copiar(cb) {
    console.log('Tarefa de Copiar"')
    return cb()
}  
const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}

module.exports.default = series(  // misturando tarefas sequenciais com parelelas
    parallel(antes1, antes2),
    copiar,
    fim,
    )