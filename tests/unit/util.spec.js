import { formatDate } from "../../src/assets/javascripts/util";

describe('util文件', () => {
    test("formatDate方法", () => {
       expect(formatDate(new Date, 'yyyy/MM/dd hh:mm')).toBe("2020/1/6 17:26");
    });
});
