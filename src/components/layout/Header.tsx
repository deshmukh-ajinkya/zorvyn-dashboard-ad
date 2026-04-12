"use client";

import ThemeToggle from "../ui/ThemeToggle";
import { ProfileMenu } from "./Profile";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="h-16 relative z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 md:px-6">

        {/* LEFT (Mobile only) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            ☰
          </button>

          <div className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="Logo" width={20} height={20} />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              ExpenseTracker
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <ProfileMenu />
        </div>
      </header>

      {/* DRAWER (BELOW HEADER) */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed top-16 left-0 h-[calc(100%-4rem)] w-64 z-50
              bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl p-5"
            >
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="h-10 flex items-center px-3 bg-[#23a997] text-white rounded-lg text-sm font-medium"
                >
                  Dashboard
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}