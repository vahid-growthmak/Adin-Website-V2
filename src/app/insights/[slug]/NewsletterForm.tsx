'use client'

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-6"
    >
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="flex-1 bg-white/10 border-b border-white/40 py-4 text-white outline-none focus:border-white transition-colors placeholder:text-white/40"
      />
      <button
        type="submit"
        className="px-12 py-4 bg-white text-adin-green font-bold uppercase tracking-widest text-[11px] hover:bg-adin-black hover:text-white transition-all"
      >
        Subscribe
      </button>
    </form>
  )
}
