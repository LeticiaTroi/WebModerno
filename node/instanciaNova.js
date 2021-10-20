 // Uma factory retorna um niovo objeto
 module.exports = () => {
     return {
         valor: 1,
         inc() {
             this.valor++
         }
     }
 }