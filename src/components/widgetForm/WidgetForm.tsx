export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
      Hellow word
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>
      <p>Hello World</p>
      <footer>
        <span className="text-xs text-neutral-400 ">
          Feito com ♥
          <a
            className="underline underline-offset-2 p-1"
            href="https://www.instagram.com/ivanmatt8/"
          >
            IvanMattDev
          </a>
        </span>
      </footer>
    </div>
  )
}
