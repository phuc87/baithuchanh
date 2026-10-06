(function () {
    const output = document.getElementById("output");
    let n;
    do {
        const input = prompt("Nhập số lượng phần tử của mảng (n <= 20):");
        if (input === null) {
            output.textContent = "Đã hủy nhập liệu.";
            return;
        }
        n = parseInt(input, 10);
        if (isNaN(n) || n <= 0) {
            alert("Vui lòng nhập số nguyên dương!");
        } else if (n > 20) {
            alert("Số lượng phần tử phải <= 20!");
        }
    } while (isNaN(n) || n <= 0 || n > 20);
    const arr = [];
    for (let i = 0; i < n; i++) {
        let value;
        do {
            const input = prompt("Nhập phần tử thứ " + (i + 1) + ":");
            if (input === null) {
                output.textContent = "Đã hủy nhập liệu.";
                return;
            }
            value = parseInt(input, 10);
            if (isNaN(value)) {
                alert("Vui lòng nhập số nguyên!");
            }
        } while (isNaN(value));
        arr.push(value);
    }

    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    const result = sumEven - sumOdd;
    output.textContent =
        "=== CÂU 1 ===\n" +
        "Mảng: [" + arr.join(", ") + "]\n" +
        "Tổng các số chẵn: " + sumEven + "\n" +
        "Tổng các số lẻ: " + sumOdd + "\n" +
        "Kết quả = (Tổng chẵn - Tổng lẻ) = " + result;
})();