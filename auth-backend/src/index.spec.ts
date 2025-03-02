import {add} from "@/index";

describe('auth-backend', () => {
    describe('add', () => {
        it('should add two numbers', () => {
            expect(add(1, 2)).toEqual(3);
            expect(add(1, 2)).not.toEqual(2);
        })
    })
})
