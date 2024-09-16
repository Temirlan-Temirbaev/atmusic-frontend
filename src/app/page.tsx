"use client"
import {useContext} from "react";
import {AuthContext} from "@/entities/user";

export default function Home() {
  const {user} = useContext(AuthContext)
  return (
    <main className="font-bold text-[72px]">
      Listen to music with your   Love huiuihuihuihuhiu
      {JSON.stringify(user)}
    </main>
  );
}
