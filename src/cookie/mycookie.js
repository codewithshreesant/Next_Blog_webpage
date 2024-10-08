import cookie from 'cookie';

export function setTokenCookie(res, token) {
  const serializedCookie = cookie.serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: 'strict',
    path: '/',
  });
  res.setHeader('Set-Cookie', serializedCookie);
}