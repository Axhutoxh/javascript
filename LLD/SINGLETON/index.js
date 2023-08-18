const singleton = (function(){
    let instance =null
    function createInstance(){
        return {random :Math.floor(Math.random()*100)}
    }
    return{
        getInstance: function(){
            if(!instance){
                instance = createInstance()
            }
            return instance
        }
    }
})()







console.log(singleton.getInstance())
console.log(singleton.getInstance())
console.log(singleton.getInstance())









