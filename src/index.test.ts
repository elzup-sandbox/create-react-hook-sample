import { useMyHook } from "./";
import { renderHook, act } from "@testing-library/react-hooks";
import { advanceTo } from "jest-date-mock";

// mock timer using jest
jest.useFakeTimers();

const date = new Date(2020, 2, 22, 22, 22, 22);
describe("useMyHook", () => {
  it("updates every second", () => {
    act(() => {
      advanceTo(new Date(date).setSeconds(22));
      jest.advanceTimersByTime(1000);
    });
    const { result } = renderHook(() => useMyHook());

    expect(+result.current).toBe(1584883342000);

    // Fast-forward 1sec
    act(() => {
      advanceTo(new Date(date).setSeconds(23));
      jest.advanceTimersByTime(1000);
    });

    // Check after total 1 sec
    expect(+result.current).toBe(1584883343000);

    // Fast-forward 1 more sec
    act(() => {
      advanceTo(new Date(date).setSeconds(24));
      jest.advanceTimersByTime(1000);
    });

    // Check after total 2 sec
    expect(+result.current).toBe(1584883344000);
  });
});
