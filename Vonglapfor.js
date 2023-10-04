let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

let dodai = arr.length
// for(let i = 0;i < dodai;i++){
//     console.log('Phan tu thu %s  = %s',i,arr[i])
// }


//b)
// let a=0
// for (let i=0; i<dodai; i++){
//     a=a+arr[i]
// }
// console.log(a)
//c)
// max =0
// min=100
// for (let i =0 ; i<dodai; i++){
//     if (arr[i]>max){
//         max=arr[i]}
//     if (arr[i]<min){
//         min=arr[i]}
// }
// console.log('so lon nhat',max)
// console.log('so nho nhất',min) 

//d
// let a=0
// for (let i=0 ; i<dodai; i++){
//     a=a+arr[i]
// }
// let trung_binh_cong=a/dodai
// console.log(trung_binh_cong)

//e)

// let arr2=[]
// for (let i=-1 ; i>=-dodai; i--){
//     so_cuoi=dodai+i
//     // console.log(so_cuoi)
//     arr2.push(arr[so_cuoi])
    
// }
// console.log(arr2)



//f)

// const tanSuatXuatHien = {};
// for (let i = 0; i < dodai ; i++){
//     const phanTuthu1 = arr[i]
//     tanSuatXuatHien[phanTuthu1] = (tanSuatXuatHien[phanTuthu1] || 0) + 1;
// }
// console.log('hihi', tanSuatXuatHien)

//g)
// for (let i = dodai - 1; i >= 0 ;i--){
//     arr[i+1] = arr[i]
// }
// arr[0] = 177
// console.log("Do dai mang ban dau",dodai)
// console.log("Do dai mang sau",arr.length)
// console.log(arr)

//h)
// const dodainew  = arr.length
// let checkTangDan = true

// for(let i = 0;i < dodainew; i++){
//     if (arr[i+1] < arr[i]){
//         checkTangDan = false
//         break
//     }
// }

// if (checkTangDan === true){
//     console.log('Mang tang dan')
// }

// else{
//     console.log("Mang ko tang dan")
// }

//i)

// for (let j = 0;j < dodai; j ++){
//     for (let i = 0; i < dodai; i++){
//         if (arr[i]>arr[i+1]){
//             tang = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = tang
//         }
//     }
    
// }
// console.log(arr)

for (let j = 0;j < dodai; j ++){
    for (let i = 0; i < dodai; i++){
        if (arr[i]<arr[i+1]){
            tang = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = tang
        }
    }
    
}
console.log(arr)








