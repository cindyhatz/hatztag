export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="font-serif text-3xl" aria-label="Back to top">
          Cinned<span className="italic text-primary">XO</span>
        </a>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#process" className="hover:text-foreground">Process</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </nav>
        <div className="text-sm text-muted-foreground md:text-right">
          <p>{`© ${new Date().getFullYear()} CinnedXO Public Relations`}</p>
          <p className="mt-1">Created by Cindy Hatzikontos &middot; Est. August 1, 2025</p>
        </div>
      </div>
    </footer>
  )
}
