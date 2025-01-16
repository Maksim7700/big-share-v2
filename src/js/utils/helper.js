export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text; // Якщо текст коротший, просто повертаємо його
    const trimmedText = text.substring(0, maxLength); // Обрізаємо текст до максимальної довжини
    return trimmedText.substring(0, trimmedText.lastIndexOf(' ')) + '...'; // Видаляємо частину після останнього пробілу і додаємо '...'
  };

  export const scroll = (location, navigation, scroller) => {
        navigation("/", { replace: true });
        setTimeout(() => {
            scroller.scrollTo("anketa", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
        }, 100); // Невелика затримка для завершення перенаправлення
};