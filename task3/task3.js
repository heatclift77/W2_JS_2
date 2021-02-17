//  no 3
function seleksiNilai (nilaiAwal, nilaiAkhir, arr){
    if (nilaiAwal < nilaiAkhir){
        let hasil = arr.filter(cekAngka);
        function cekAngka (value){
            if(value > nilaiAwal && value < nilaiAkhir){
                return value
            }
        }
        console.log(hasil.sort(function(a, b){ return a - b})); 
    }else{
        console.log('nilai awal harus lebih kecil');
    }
}

seleksiNilai(10, 20, [10,15,30,6,11,8])