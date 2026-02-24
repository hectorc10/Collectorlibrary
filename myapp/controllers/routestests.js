let getTest = async (request, response)=>{
response.json({message: "Este es un test de un endponint",
               hora: "18:00 del 18 de febrero "
}
);

}
const postTest = async ()=>{
}
module.exports = {
    getTest,
    postTest
}

