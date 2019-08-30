describe('emoji functions', () => {
  describe('get emojis', () => {
    it('should return a smile emoji', () => {
      expect(emoji.get('smile')).toBe('😄');
    });
    it('should return a sad emoji', () => {
      expect(emoji.get('sad')).toBe('😢');
    });
  });
  it('should return a random emoji', () => {
    expect(emoji.get()).anything();
  });

  describe('combine emojis', () => {
    it('should return an expressionless emoji', () => {
      expect(emoji.combine('smile', 'sad')).toBe('😑');
    });
  });
});
