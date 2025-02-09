const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const units = ['', '十', '百', '千', '万', '亿'];

export function numberToChinese(num) {
    if (num === 0) return digits[0];
    let result = '';
    const numStr = num.toString();
    const len = numStr.length;
    for (let i = 0; i < len; i++) {
        const digit = parseInt(numStr[i]);
        const unitIndex = len - i - 1;
        if (digit !== 0) {
            result += digits[digit] + units[unitIndex % 4];
        } else if (!result.endsWith(digits[0])) {
            result += digits[0];
        }
        if (unitIndex % 4 === 0 && unitIndex > 0) {
            result = result.replace(/零+$/, '') + units[4 + Math.floor(unitIndex / 4) - 1];
        }
    }
    return result.replace(/零+$/, '');
}
