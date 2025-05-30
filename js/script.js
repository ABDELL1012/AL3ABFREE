// سكريبت بسيط يمكن تضيف فيه خصائص لاحقاً
console.log("مرحبا بك في al3abfree.net");

// إضافة تأثير بسيط عند الضغط على أزرار "حمل الآن"
document.querySelectorAll('.game-card a').forEach(button => {
  button.addEventListener('click', () => {
    alert("شكراً على اختيارك لتحميل اللعبة! جاري التحميل...");
  });
});
