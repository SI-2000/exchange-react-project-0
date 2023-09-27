function extractUsername(email) {
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
      throw new Error('ایمیل وارد شده معتبر نیست.');
    }
    return email.substring(0, atIndex);
  }