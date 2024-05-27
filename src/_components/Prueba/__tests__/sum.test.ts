describe('sum', () => {
  it('should sum', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})

const sum = (n1: number, n2: number) => {
  return n1 + n2
}
