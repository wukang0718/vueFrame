/**
 * 格式化日期
 * @param date 日期
 * @param type  格式化的样式
 * （yyyy => 年，MM => 月，dd => 天，hh => =时，mm => 分，ss => 秒）
 * @returns {string|*}
 */
export const formatDate = (date, type) => {
    if (!date) {
        return "";
    }
    const time = new Date(date);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return type.replace(/yyyy/g, year)
        .replace(/MM/g, month)
        .replace(/dd/g, day)
        .replace(/hh/g, hours)
        .replace(/mm/g, minutes)
        .replace(/ss/g, seconds);
};
