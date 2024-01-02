import bookModel from "../common/book-model.js";

export const bookregister = async(req,res)=>{
   try{
      const newBook = await bookModel.create(req.body)
      res.status(201).json(newBook)
   }catch(err){
      res.status(500).json({err:'Internal server error'})
   }         
}

export const getAllbooks = async(req,res)=>{
   try{
      const allBooks = await bookModel.find()
      res.status(201).json(allBooks)
   }catch(err){
      res.status(500).json({err:'Internal server error'})
   }
  
}

export const getBookwithId = async (req,res)=>{
   try{
   const Book = await bookModel.findById(req.params.id)
   res.status(201).json(Book)
   }catch(error){
   res.status(500).json({error:'Internal server Error'})
   }
}

export const bookUpdatebyId = async(req,res)=>{
   try{
      const Book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.status(201).json(Book)
   }catch(err){
      res.status(500).json({err:'Internal serval error'})
   }
}

export const bookDeletebyId = async (req,res) =>{
   try{
      const Book = await bookModel.findByIdAndDelete(req.params.id)
      res.status(201).json(Book)
   }catch(err){
      res.status(500).json({err:'Internal server error'})
   }
}

