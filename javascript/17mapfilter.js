> map is use to iterate over the array of element
> it always return the same length of output as input array
> it is use to apply the logics(add,sub,mul,div)

var a = [4,5,6,3,23,21,34,36,56,7,12,47,31,88]

a.map((data) => {return data*2})

[8, 10, 12, 6, 46, 42,68, 72, 112, 14, 24, 94, 62, 176]

var a = [4,5,6,3]
a.map((data) => {return `<p>${data*2}</p>`})
['<p>8</p>', '<p>10</p>', '<p>12</p>', '<p>6</p>']

> Filter is use to filter out the data
> it may or may not return the same length of output as input Array
> filter only return those data for which output/condition us true

var a = [4,5,6,3,23,21,34,36,56,7,12,47,31,88]
a.filter((item) => {return item>20})
[23, 21, 34, 36, 56, 47, 31, 88]

var a = [-1,0,1,2,3]
a.map((data) => {return data*2})
(5) [-2, 0, 2, 4, 6]

a.filter((data) => {return data*2})
(4) [-1, 1, 2, 3]



var a = [4,5,6,3,23,21,34,36,56,7,12,47,31,88]
a.map((item) => {return item>20})
