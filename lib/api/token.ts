
const ZUSTAND_AUTH_KEY = "accessToken";
type PersistedAuth = {
  state?: {
    accessToken?: string | null;
  };
};

export function getAccessToken(): string {
  if (typeof window === "undefined") return "";

  const raw = localStorage.getItem(ZUSTAND_AUTH_KEY);
  if (!raw) return "";

  // zustand persist json으로 저장되게
  try {
    const parsed = JSON.parse(raw) as PersistedAuth;
    return parsed?.state?.accessToken ?? "";
  } catch {
    return raw;
  }
}


