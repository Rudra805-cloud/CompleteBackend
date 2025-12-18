const asyncHandler=(requestHandeler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandeler(req,res,next)).
    catch((err)=>next(err))

}
}
export {asyncHandler}
//second method also try catches
