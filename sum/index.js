'use strict';
function add(numbers) {
  let result = 0;   //初期値
  for (let num of numbers) {  //numbersをnum変数に入れる
    result = result + num;
  }

  return result;
}

module.exports = {   //オブジェクトにする
  add: add  //  プロパティ：関数
};