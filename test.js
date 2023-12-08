// 1. JavaScript: 字串反轉

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”

// 2. JavaScript: 陣列過濾

function filterNumbersGreaterThanFive(numbers) {
  return (ans = numbers.filter((item) => item > 5));
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

// 3. JavaScript: 重構

// 原因 : 改用樣板語法以及三元運算判斷減少程式碼，並補上沒有firstName時中間不會加空格
function formatName(firstName, lastName) {
  let formattedName = `${firstName ? firstName : ""}${
    firstName && lastName ? " " : ""
  }${lastName ? lastName : ""}`;
  return formattedName;
}

// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

// 目前使用的框架為Vue, 故在網路上學習React使用方式
// 可使用if或三元判斷式並使用JSX顯示內容
function ConditionalRendering({ isLoggedIn }) {
  return <div>{isLoggedIn ? "good" : "bad"}</div>;
}
ReactDOM.render(
  <ConditionalRendering isLoggedIn={isLoggedIn} />,
  document.getElementById("root")
);

// 5. React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

const { useState } = React;

const Counter = () => {
  // count, setCount 為自定義變數
  const [count, setCount] = useState(0);
  const addCounter = () => {
    setCount(count + 1);
  };
  const reduceCounter = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={addCounter}>+1</button>
      <button onClick={reduceCounter}>-1</button>
    </div>
  );
};
ReactDOM.render(<Counter />, document.getElementById("root"));
