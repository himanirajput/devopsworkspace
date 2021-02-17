class FetchUserDetail{
        
    fetchData(){
        document.getElementById('country')
        .addEventListener('change',()=>{
        const con=require('../data/countrystates.json')
//console.log(con)
const d=document.getElementById('country').value
/*d.length=0
let df=document.createElement('option')
df.text='Choose country'

d.add(df)
d.selectIndex=0;*/
for(i in con.countries)
{/*option=document.createElement('option')
option.text=con.countries[i].country
option.value=con.countries[i].country
//console.log(con.countries[i].country)*/
d.innerHTML=d.innerHTML+'<option value="' + con.countries[i] + '">'+'</option>'

//for(j in con.countries[i].states)
//console.log(con.countries[i].states[j])

}
    })

}
}new FetchUserDetail().fetchData();