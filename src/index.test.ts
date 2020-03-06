import { useMyHook } from "./";
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useMyHook", () => {
  it("updates every second", () => {
    const { result } = renderHook(() => useMyHook());

    // expect(result.current).toBe(0);
    console.log(result.current);

    // Fast-forward 1sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check after total 1 sec
    // expect(result.current).toBe(1);
    console.log(result.current);

    // Fast-forward 1 more sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check after total 2 sec
    // expect(result.current).toBe(2);
    console.log(result.current);
  });
});
