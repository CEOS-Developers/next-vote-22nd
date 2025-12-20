import { apiFetch, type ApiResponse } from "@/lib/api/client";

type AuthPayload = {
  memberId: string;
  name: string;
  part: "FRONTEND" | "BACKEND";
  team: string;
  accessToken: string;
  expiresIn: number;
};

export const authService = {
  login: async (loginId: string, password: string) => {
    const res = await apiFetch<ApiResponse<AuthPayload>>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ loginId, password }),
    });
    return res.payload;
  },

  signup: async (data: {
    loginId: string;
    password: string;
    email: string;
    part: "FRONTEND" | "BACKEND";
    name: string;
    team: string;
  }) => {
    const res = await apiFetch<ApiResponse<AuthPayload>>("/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return res.payload;
  },

  logout: async (accessToken: string) => {
    return await apiFetch<ApiResponse<{ memberId: string }>>("/auth/logout", {
      method: "POST",
      accessToken,
    });
  },

  reissue: async () => {
    const res = await apiFetch<ApiResponse<{ accessToken: string; expiresIn: number }>>(
      "/auth/reissue",
      { method: "POST" }
    );
    return res.payload;
  },
};
