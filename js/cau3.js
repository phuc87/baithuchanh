function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }

    primes.sort(function (a, b) {
        return a - b;
    });
    return primes;
}


(function () {
    const output = document.getElementById("output");
    const input = prompt(
        "Nhập mảng số (cách nhau bởi dấu phẩy),\nví dụ: 1,5,6,23,8,47,10,3"
    );

    if (input === null) {
        output.textContent = "Đã hủy nhập liệu.";
        return;
    }

    const arr = input
        .split(",")
        .map(function (item) {
            return parseInt(item.trim(), 10);
        })
        .filter(function (num) {
            return !isNaN(num);
        });

    const primes = findPrimes(arr);

    output.textContent =
        "=== CÂU 3 ===\n" +
        "Mảng đầu vào: [" + arr.join(", ") + "]\n" +
        "Số nguyên tố (sắp xếp tăng dần): [" + primes.join(", ") + "]";
})();