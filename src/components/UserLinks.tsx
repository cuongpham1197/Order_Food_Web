"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex">
          <Link href="/orders">Đặt hàng</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Đăng xuất
          </span>
        </div>
      ) : (
        <Link href="/login">Đăng nhập</Link>
      )}
    </div>
  );
};

export default UserLinks;
