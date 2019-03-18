function myBind(fn, context){
    return function () { return fn.apply(context);}
}
myBind(function doSmth() {return this.sample}, {sample: 1});