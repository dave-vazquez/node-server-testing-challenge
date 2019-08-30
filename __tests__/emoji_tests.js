describe('emoji functions', () => {
  describe('get emojis', () => {
    it('should return a smile emoji', () => {
      expect(emoji.get('smile')).toBe('😄');
    });
    it('should return a sad emoji', () => {
      expect(emoji.get('smile')).toBe('😢');
    });
  });
  it('should return a random emoji', () => {
    expect(emoji.get()).anything();
  });
});
