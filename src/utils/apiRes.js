class apiRes{
    constructor(statusCode,data,message="susses"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400

    }
}