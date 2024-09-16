"use client";
import {useSearchParams} from "next/navigation";
import {useEffect} from "react";

export default function GoogleCallback() {
  const params = useSearchParams();

  useEffect(() => {
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token")
    if (access_token && refresh_token) {
      localStorage.setItem("atmusic-access-token", access_token as string);
      localStorage.setItem("atmusic-refresh-token", refresh_token as string);

      location.href = "/";
    } else {
      location.href = "/auth/login"
    }
  }, [params]);

  return <div>Logging in...</div>;
};

