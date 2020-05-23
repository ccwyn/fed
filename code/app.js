// 1、

// var a = []
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i)
//   };
// }

// a[6]()


// var tmp = 123 
// if(true) {
//   console.log(tmp)
//   let tmp
// }


// var a = {}
// var obj = {
//   a: 20,
//   fn() {
//     setTimeout(() => {
//       console.log(this.a)
//     })
//   }
// }
// obj.fn()

setTimeout(function () {
  var a = 'hello';
  setTimeout(function () {
    var b = 'lagou';
    setTimeout(function () {
      var c = 'I love u';
      console.log(a + b + c)
    }, 10)
  }, 10)
}, 10)


function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var a = 'hello';
      resolve(a)
    }, 10)
  })
}

function b() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var b = 'lagou';
      resolve(b)
    }, 10)
  })
}

function c() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var c = 'i love u';
      resolve(c)
    }, 10)
  })
}
Promise.all([a(), b(), c()]).then(res => [
  console.log(res.join(' '))
])