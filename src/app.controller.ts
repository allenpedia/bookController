import {Controller , Delete , Get , Post , Put} from "@nestjs/common"

@Controller("book")
export class BookController{
  //add book ..Post
  @Post("/add")
  addBook() : string{
    return "book-added"
  }

  //delete book ..delete
  @Delete("/delete")
  deleteBook() : string{
    return "book-deleted"
  }

  //update book ..put
  @Put("/update")
  updateBook() : string{
    return "book-updated"
  }

  // find all books ..get
  @Get("/find")
  findAllBooks() : string{
    return "book-found"
  }
}