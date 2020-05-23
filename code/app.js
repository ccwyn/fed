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


var a = {}
var obj = {
  a: 20,
  fn() {
    setTimeout(() => {
      console.log(this.a)
    })
  }
}
obj.fn()