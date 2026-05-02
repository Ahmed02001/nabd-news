"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-primary px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-[120px] font-extrabold text-gray-300 dark:text-gray-800 leading-none">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4 text-primary">
          الصفحة غير موجودة
        </h2>

        <p className="text-secondary mb-8 leading-relaxed">
          يبدو أنك تحاول الوصول إلى صفحة غير موجودة أو تم حذفها. يمكنك العودة
          إلى الصفحة الرئيسية أو تصفح أحدث الأخبار.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              sx={{
                bgcolor: "#E63946",
                px: 3,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#E63966",
                },
              }}
            >
              الصفحة الرئيسية
            </Button>
          </Link>

          <Link href="/categories">
            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              sx={{
                borderColor: "#E63946",
                color: "#E63946",
                px: 3,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "#E63946",
                  background: "rgba(37,99,235,0.05)",
                },
              }}
            >
              تصفح الأخبار
            </Button>
          </Link>
        </div>

        <div className="mt-10 text-sm text-gray-400">
          أو استخدم البحث للوصول إلى ما تريد 🔍
        </div>

        <div className="mt-4 flex items-center bg-white dark:bg-gray-800 rounded-xl shadow px-3 py-2">
          <input
            type="text"
            placeholder="ابحث عن خبر..."
            className=" flex-1 outline-none bg-transparent text-sm text-gray-700 dark:text-white"
          />
          <SearchIcon className="text-gray-400" />
        </div>
      </div>
    </main>
  );
}
