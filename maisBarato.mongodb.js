const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].find({})
.sort({ preco: 1 })  
.limit(1);  