const enhancer = require('./enhancer.js');
// test away!

  describe('repair', () => {
    it('durability is 100', function () {

        let item = {
            name:'user',
            durability: 1,
            enhancement: 0
        }

        const result  = enhancer.repair(item)
        expect(result.durability).toBe(100)
    })
})

describe('fail', () => {
    it('durability fail from 18 to 13', function () {
        let item = {
            name:'user2',
            durability: 18,
            enhancement: 1
        }
        const result = enhancer.fail(item)
        expect(result.durability).toBe(13)
    })

    it('durability fail from 20 to 10', function () {
        let item = {
            name: 'user',
            durability: 20,
            enhancement: 15
        }
        const result = enhancer.fail(item)
        expect(result.durability).toBe(10)
    })

    it('durability fail from 20 to 10, enhancement fail from 17 to 16', function () {
        let item = {
            name: 'user',
            durability: 20,
            enhancement: 17
        }
        const result = enhancer.fail(item)
        expect(result.durability).toBe(10)
        expect(result.enhancement).toBe(16)
    })
})

describe('success', () => {
    it('enhancement is 11', function () {
        let item = {
            name: 'user',
            durability: 60,
            enhancement: 10
        }
        const result = enhancer.success(item)
        expect(result.enhancement).toBe(11)
    })
    it('enhancement is 20', function () {
        let item = {
            name: 'user',
            durability: 60,
            enhancement: 20
        }
        const result = enhancer.success(item)
        expect(result.enhancement).toBe(20)
    })
})
