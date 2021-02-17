const myFunc=function(){
    return new Promise((resolve,failure)=>{
        setTimeout(function(){
            resolve( new Date());
        },1000)
    })
    
    }
    const promise=myFunc();
    promise.then(data=>console.log(data)).catch(reason=>console.log(reason))
    console.log('I am executed');
