// no 2 
const name = [
    'Abigali','Alexandra','Alison',
    'Amanda', 'Angela', 'Bella', 'Carol',
    'Caroline', 'Carolyn', 'Deirdre', 'Diana',
    'Ellizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
];

function searchingName(key, num, callback){
    callback(key, num)
}
searchingName("da", 10, function (key, num){
    if(num < 20){
        if(key.length < 15){
            let count = 1;
            let newItems = [];
            name.forEach(search);
            function search(value, index){
                if(value.toLowerCase().match(key) !== null){
                    if(count <= num){
                        newItems.push(value)
                        count++
                    }
                }
            }
            if(newItems.length == 0){
                console.log("tidak ditemukan");
            }else{
                if(newItems.length < num-1){
                    console.log(newItems, ` 
                    dari ${num} permintaan, data yang ditemukan hanya ${newItems.length}`);
                }else
                console.log(newItems);
            }
        }else{
            console.log("kata kunci terlalu panjang");
        }
    }else{
        console.log('permintaan terlalu banyak');
    }

})