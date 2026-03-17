const { Books } = require("../../models");
let getBooks = async (request, response) => {
    try {

        let books = await Books.findAll();

        if (books.length <= 0) {

            response.status(204).json({
                status: 204,
                message: "No se encontraron libros"
            });

        } else {

            response.status(200).json({
                status: 200,
                data: books
            });

        }

    } catch (error) {

        response.status(500).json({
            status: 500,
            message: error.message
        });

    }
}
const { Books } = require("../../models");

let getBookByISBN = async (req, res) => {
  try {
    const { isbn } = req.params;

    let book = await Books.findOne({
      where: { isbn }
    });

    if (!book) {
      return res.status(404).json({
        status: 404,
        message: "Libro no encontrado"
      });
    }

    return res.status(200).json({
      status: 200,
      data: book
    });

  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};
module.exports = {
    getBooks,
  
};