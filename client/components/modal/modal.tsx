"use client";

import { Dialog } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Modal = ({ open, text }: { open: boolean; text: string | string[] | undefined }) => {
  const router = useRouter();
  return (
    <>
      {/* モーダルが開いた状態のページへのリンク */}
      <Link href="/todos/add">Open Dialog</Link>

      {/* ダイアログが閉じたときにはモーダルが閉じた状態のページヘ遷移 */}
      <Dialog open={open} onClose={() => router.push("/modal")}>
        <h2>Todo</h2>
        <p>{text}</p>
      </Dialog>
    </>
  );
};
