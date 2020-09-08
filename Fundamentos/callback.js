setTimeout( ()=>{
    console.log('Hola mundo');
}, 3000);

let getUsuarioById = (id, callback) =>{
    let usuario ={
        nombre:'fernando',
        id:id
    }
    if(id ===20){
        callback(`El usuario con id ${id}, no existe enla base de datos`);
    }else{
        callback(null,usuario);
    }
}
getUsuarioById(10,(err,usuario)=>{
    if(err){
        console.log(err);
    }else{
        console.log(usuario)
    }
    console.log('Usuario  de base de datos', usuario)
})