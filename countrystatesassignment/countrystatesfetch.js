class CountryStateService{

    
    getCountryStates=()=>{
       return fetch(`http://localhost:8086/countrystates.json`)
        .then(response=>response.json())

    }
}

let countryStateService = new CountryStateService();
let countryStates =[]
countryStateService.getCountryStates().then(data=>countryStates = data)

document.getElementById('countr').addEventListener('click',()=>{
    
        var op=document.getElementById('countr')
        var l=op.options.length
        if(l<2)
        for( i=0;i<countryStates.countries.length;i++){
     
            let option = new Option(countryStates.countries[i].country,countryStates.countries[i].country)
          
           document.getElementById('countr').appendChild(option)
        }
    })
     document.getElementById('countr').addEventListener('change',()=>{
    //document.getElementById('stats').addEventListener('change',()=>{
    //countryStates.forEach(countryStates=>{
        let contry=document.getElementById('countr').value
        let opt=document.getElementById('stats')

        let len=opt.options.length
        for(i=len-1;i>0;i--)
        opt.options[i]=null

       for( i=0;i<countryStates.countries.length;i++){
   
            if(countryStates.countries[i].country==contry){
           
           
                for( j=0;j< countryStates.countries[i].states.length;j++){
        
                    let opti = new Option(countryStates.countries[i].states[j],countryStates.countries[i].states[j])
      
                    document.getElementById('stats').appendChild(opti)
                }
    
             }
        }
   
})
//})
    
































































































/*class CountryStateService{
    constructor(){
        this.countryStates=[]
        //this.getCountryStates().bind(this);

    }
    getCountryStates=()=>{
        fetch(`http://localhost:8889/countrystates.json`)
        .then(response=>response.json()).then(data=>this.countryStates=data)
    }

}
let countryStateService=new CountryStateService();
countryStateService.getCountryStates();
console.log(this.countryStates)*/


/*
//const fetch =require('node-fetch')
class CountryStateService{

    
    getCountryStates=()=>{
       return fetch(`http://localhost:8086/countrystates.json`)
        .then(response=>response.json())

    }
}

let countryStateService = new CountryStateService();
let countryStates =[]
countryStateService.getCountryStates().then(data=>countryStates = data)

document.getElementById('countr').addEventListener('click',()=>{
    
        var opt=document.getElementById('countr')
        var l=opt.options.length
        if(l<2)
        for( i=0;i<countryStates.countries.length;i++){
     
            let option = new Option(countryStates.countries[i].country,countryStates.countries[i].country)
          
           document.getElementById('countr').appendChild(option)
        }

     //   document.getElementById('countr').addEventListener('change',()=>{
       
    /*    
    for( i=0;i<countryStates.countries.length;i++){
     
        let option = new Option(countryStates.countries[i].country,countryStates.countries[i].country)
      
       document.getElementById('countr').appendChild(option)
    }*/

//let contry=document.getElementById('countr').value

//document.getElementById('stats').addEventListener('change',()=>{
    //countryStates.forEach(countryStates=>{
       /* let contry=document.getElementById('countr').value
        document.getElementById('c').value=contry
        var opt=document.getElementById('stats')
        var l=opt.options.length
        for(i=l-1;i>0;i--)
        opt.options[i]=null
    for( i=0;i<countryStates.countries.length;i++){
   
       if(countryStates.countries[i].country==contry){
           
           
            for( j=0;j< countryStates.countries[i].states.length;j++){
        
        let opti = new Option(countryStates.countries[i].states[j],countryStates.countries[i].states[j])
      
       document.getElementById('stats').appendChild(opti)
    }
    
    }
}
   
})
//})
    */

