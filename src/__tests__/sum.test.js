import { sum } from "../components/sum";

test("sum is calculeted", ()=>{
    //Assertion
    expect(sum(2,3)).toBe(5);
})