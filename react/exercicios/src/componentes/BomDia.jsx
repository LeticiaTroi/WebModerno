import React from "react";

//usar div para envolver 2 elementos
export default props =>
    <div>
        <h1>Bom dia {props.nome}!</h1> 
        <h2>Até Breve!</h2>
    </div>


//usar React.Fragment para envolver 2 elementos

    //export default props =>
   // <React.Fragment>
   //     <h1>Bom dia {props.nome}!</h1> 
    //    <h2>Até Breve!</h2>
    //</React.Fragment>


// usar um array (usar key)

//export default props =>[
//        <h1 key='h1'>Bom dia {props.nome}!</h1>,  //usar div para envolver 2 elementos
//        <h2 key='h2'>Até Breve!</h2>
//]