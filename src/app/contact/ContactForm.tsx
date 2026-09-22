"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/src/lib/site";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";

export default function ContactForm({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
  }

  const inputClasses = isDark
    ? "w-full rounded-2xl border border-white/15 bg-white/5 px-4 md:px-5 py-3.5 md:py-4 text-sm md:text-base text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/40"
    : "w-full rounded-2xl border border-black/15 bg-black/[0.03] px-4 md:px-5 py-3.5 md:py-4 text-sm md:text-base text-black placeholder:text-black/40 outline-none transition-colors focus:border-black/40";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 md:gap-5 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
        <input
          required
          type="text"
          placeholder={t("contact.namePlaceholder")}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClasses}
        />
        <input
          required
          type="email"
          placeholder={t("contact.emailPlaceholder")}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClasses}
        />
      </div>

      <textarea
        required
        rows={6}
        placeholder={t("contact.messagePlaceholder")}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClasses}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className={`inline-flex w-fit items-center gap-2 rounded-full px-6 md:px-8 py-3 text-xs md:text-sm font-semibold transition-transform hover:scale-105 disabled:opacity-50 ${
          isDark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {status === "sending" ? t("contact.sending") : t("contact.send")}
        <Send className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2 text-sm text-emerald-400"
          >
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            {t("contact.sent")}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
