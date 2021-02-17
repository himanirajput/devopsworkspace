const cassandra=require('cassandra-driver');
const authProvider=new cassandra.auth.PlainTextAuthProvider('','');
const contactPoints=['localhost','localhost','localhost']
const client =new cassandra.Client({contactPoints:contactPoints,authProvider:authProvider,keyspace:'devops',localDataCenter:'datacenter1'})

const execute=(query,cb)=>{

    return new Promise((resolve,reject)=>{

        client.execute(query,(err,result)=>{
            if(err){
                reject()

            }else{
                cb(err,result);
                resolve()
            }
        })
    })
}
const query1=`SELECT * from devops.books_by_author` // WHERE publish_year>? ALLOW FILTERING; `

execute(query1,(err,result)=>{
    if(err)
        console.log('execute',err)
        else{
           // for(i in rows)
    console.log(`books by author name is ${result.rows[0].author_name} publish year ${result.rows[0].publish_year}` )
        }
}).then(()=>{console.log('exit');
process.exit()})