import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test("returns current year", () => {
    expect(getFullYear()).toBe(2024);
});

test("correct footer copy", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notifications", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});