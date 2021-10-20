import { divide } from 'lodash'
import React from 'react'
import ReactDom from 'react-dom'

//import Primeiro from './componentes/Primeiro.jsx'

import BomDia from './componentes/BomDia.jsx'
import Multi, { BoaNoite } from './componentes/Multiplos.jsx'
import Saudacao from './componentes/Saudacao.jsx'
import Pai from './componentes/Pai.jsx'


ReactDom.render(
    <div>
        <BomDia nome = "Letícia" />
        <Multi.BoaTarde nome = "Ana" /> {/*usando destructuring*/}
        <BoaNoite nome ="Bia" />        {/* usando a partir do objeto Multi*/}
    </div>
, document.getElementById('root'))


//ReactDom.render(<h1>React</h1>, document.getElementById('root')):
     // não é um html sendo parâmetro da função, e sim o JSX (uma extensão do JS)
     // é usado para unir as tecnologias (JS e HTML)


ReactDom.render(
    <div>
        <Pai nome="Paulo" sobrenome="silva" />
        <Saudacao tipo= "Bom dia" nome="João" />
    </div>
, document.getElementById('root'))

ReactDom.render(
    <div>
        <Pai nome="Paulo" sobrenome="silva" />
    </div>
, document.getElementById('root'))


// O último ReactDom.render é o que está funcionando na página!!!!
