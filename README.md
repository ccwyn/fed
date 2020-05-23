## 简答题

#### 1、请说出下列最终的执行结果，并解释为什么

```
var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  };
}

a[6]()

// 答----------------------
输出：10
分析：for 循环中 通过var 声明的循环变量 i 在 循环结束 后成为全局变量 值为 10  ，所以在循环结束后执行 a[6]() 打印的 i 是 10

```

#### 2、请说出下列最终的执行结果，并解释为什么

```
var tmp = 123 
if(true) {
  console.log(tmp)
  let tmp
}

// 答----------------------
输出：Uncaught ReferenceError: Cannot access 'tmp' before initialization
分析：
  let 声明有两个特性 一、不存在变量提升。声明的变量一定要在声明后使用，二 暂时性死区。 如果块级作用域中存在用let声明的变量 ，此变量就不在受外部影响。
  本题 在块级作用域中 consol.log(tmp) 在let 声明前执行，所以报错

```

#### 3、结合ES6新语法，用最简单的方式找出数组中的最小值

```
var arr = [12,34,32,89,4]

// 答----------------------
Math.min(...arr)

```
#### 4、请详细说明 var let const 三种声明变量的方式之间的具体差别

* let、const 声明的变量只在命令所在的代码块内有效，并且不能声明的全局变量，var可以声明全局变量
* let、const 声明的变量不允许重复声明，var不会如此
* let、const 声明的变量不存在变量提升。声明的变量一定要在声明后使用，var不会如此
* let、const 声明的变量存在暂时性死区。 如果块级作用域中存在用let、const声明的变量 ，此变量就不在受外部影响，var不会如此
* const 声明变量必须立即初始化，并且声明后值就不能改变, let 、var 不会如此

#### 5、请说出下列代码最终的执行结果，并解释为什么

```
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

// 答----------------------
输出：20
分析：箭头函数不绑定this 箭头函数中的this 指向 是 外层函数的this值

```

#### 6、简述 Symbol 类型的用途

* 解决属性名冲突
* 设置私有属性(实例无法访问到symbol属性)
* 使用Symbol来替代常量

#### 7、什么是浅拷贝、深拷贝

* 浅拷贝和深拷贝都是针对引用数据类型的拷贝方式
* 浅拷贝复制的是某个对象的引用，并没有复制对象本身，新旧对象还是指向相同的对象内存空间。
* 深拷贝复制的是对象本身，新旧对象指向独立的内存空间，修改互不影响

#### 8、谈谈你是如何理解js异步编程的，Event Loop 是做什么的 什么是宏任务 ，什么是微任务

 - js 是单线程语言，当前任务执行完成后 后面的任务再接着执行，但是这样会导致如果因为某段代码长时间运行，后面的其他任务就无法执行，
 所以为了解决这个问题，js 语言将任务的执行模式分成 同步模式，和异步模式，异步模式中每个任务会有一个回调函数，前一个任务完成后，
 执行回调函数，而其他任务不需要等待前一个任务执行完成就执行。这种异步模式的编程方法就叫做异步编程，常用的异步编程方法有 通过回调函数、promise、发布订阅。
 - Event Loop 是js 事件执行机制，用来处理同步异步任务的执行顺序和时机
 - 宏任务：整体代码script，setTimeout，setInterval
 - 微任务：Promise，process.nextTick。


 #### 9、将下面异步代码使用Promise改进

 ```
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


// 改进-----------------------------
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
 
 ```

 #### 10、简述 TypeScript 与javascript之间的关系 
  
- TypeScript是Javascript的超集，增加了类型系统，对es6做了扩展和新增。
- ts无法在浏览器直接运行，最终要编译为javascript代码


 #### 11、请谈谈你所认为的TypeScript 优缺点

 * 优点
   - 错误更早暴露
   - 代码更智能，编码更准备
   - 重构更牢靠
   - 减少不必要的类型判断

 * 缺点
  - 新增了好多概念 有一定的学习成本
  - 短期可能会增加一些开发成本，要多写一些类型的定义








