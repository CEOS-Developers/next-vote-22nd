import { useAuth } from '@/auth/authStore';

//공용 fetch 함수
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export type ApiResponse<T> = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  payload: T;
  pageInfo?: unknown;
};

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

type ApiFetchOptions = RequestInit & {
  accessToken?: string | null;
};

export async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<T> {
  if (!baseUrl) throw new Error('NEXT_PUBLIC_API_BASE_URL is not set'); //요청

  const stateToken = useAuth.getState().accessToken;
  const { headers, ...rest } = options;

  const res = await fetch(`${baseUrl}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(stateToken ? { Authorization: `Bearer ${stateToken}` } : {}),
      ...(headers ?? {}),
    },
    credentials: 'include',
  });

  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const errJson = await res.json();
      msg = errJson?.message ?? errJson?.error ?? msg;
    } catch {}
    throw new ApiError(res.status, msg);
  }

  return (await res.json()) as T;
}
