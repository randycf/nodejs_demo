/**
 * Created by Administrator on 2016/8/24.
 */
// repeat times
var counts = 10000;

// Copy Array Method 1, is the fastest method
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyArr;
start = new Date().getTime();
for (i = 0; i < counts; i++) {
    copyArr = arr.slice();
}
end = new Date().getTime();
console.log('methon 1 const time' + (end - start));

// Copy Array Method 2
start = new Date().getTime();
for (i = 0; i < counts; i++) {
    copyArr = arr.concat();
}
end = new Date().getTime();
console.log('methon 2 const time' + (end - start));

// Copy Array Method 3
start = new Date().getTime();
for (i = 0; i < counts; i++) {
    for (var index in arr) copyArr[index] = arr[index];
//console.log(copyArr);
}
end = new Date().getTime();
console.log('methon 3 const time' + (end - start));
