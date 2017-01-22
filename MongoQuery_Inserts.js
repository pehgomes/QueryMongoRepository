busca com operador Logico AND
db.users.find({
        status: 'A',
        age:{
            $gt: 30
        }      
});

buscas com operador Logico OR

db.users.find({
  $or: [
    {status : 'A'},
       {
            age: {$lt : 30}
       }
    ]      
});

buscando dentro de um ARRAY 
db.users.find({});
db.users.find({
    badges:  'black'  
        
});
/*
buscando dentro de um array com mais especificaçoes
*/
db.users.find({});
db.users.find({
    badges:  ['black','blue']  
        
});
/*
Mais parametros de query, dessa vez buscando dentro de um Array('badges') 
e tambem dentro de um objeto('Favorites')
*/
db.users.find({});
db.users.find({
    badges:  ['black','blue'],
    'favorites.artist':'Picasso' 
        
});
/*
Buscando dentro de um Objeto com $exists que recebe true ou false
*/
db.users.find({});
db.users.find({
    'favorites.artist' : {
        $exists: false
    }
        
});
/*
Limitando a quantidade de Fields que se deseja que apareça
*/
db.users.find({});
db.users.find({
    'favorites.artist' : {
        $exists: true
    }
        
},{_id: 0, name: 1})

/*
Buscando com findOne
*/

db.users.find({});
db.users.findOne({
    'favorites.artist' : {
        $exists: true
    }
        
},{_id: 0, name: 1})





