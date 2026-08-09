import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

function expectedCookieValue() {
  return process.env.ADMIN_SESSION_SECRET ?? "";
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  const expected = expectedCookieValue();
  return !!value && !!expected && value === expected;
}

export async function setAdminSessionCookie() {
  const store = await cookies();
  store.set(COOKIE_NAME, expectedCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAdminSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export { COOKIE_NAME };
