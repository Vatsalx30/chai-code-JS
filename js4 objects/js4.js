let book = {
    name : `harry potter`,
    author : `unknown`,
    year : 2025,
    summery : function (){
        console.log(this.name, this.author, this.year);
    }
};

book.summery();