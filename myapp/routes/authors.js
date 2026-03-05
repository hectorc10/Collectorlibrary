let getAuthors = async (request, response)=>{
    let authors=await Authors.findAll();
    if(authors.length>0){
        response.status(204).json{
            status=200
        } else
            {
            response.status(200).json(){
        }
            message: "No hay autores registrados"
        
       

}
}



