function countUpperCase(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }

  if (count === 0) {
    return "The Strings is not contain upper char";
  }
  return count;
}
(function () {
  const output = document.getElementById("output");
  const input = prompt("Nhập chuỗi cần kiểm tra (ví dụ: abcdEF):");

  if (input === null) {
    output.textContent = "Đã hủy nhập liệu.";
    return;
  }

  const result = countUpperCase(input);

  output.textContent =
    "=== CÂU 2 ===\n" +
    'Chuỗi đầu vào: "' + input + '"\n' +
    "Kết quả: " + result;
})();