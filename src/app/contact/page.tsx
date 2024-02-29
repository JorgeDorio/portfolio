export default function Contact() {
  return (
    <main>
      <div className="p-6 max-w-96 m-auto space-y-4">
        <h1 className="text-center text-lg font-bold">Contact Me</h1>
        <ul className="">
          <li className="flex justify-between">
            <strong>E-mail:</strong> <span>contact@dorio.dev</span>
          </li>
          <li className="flex justify-between">
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/jorgedorio/" target="_blank">
              linkedin.com/in/jorgedorio
            </a>
          </li>
          <li className="flex justify-between">
            <strong>Github:</strong>{" "}
            <a href="https://github.com/JorgeDorio" target="_blank">
              github.com/JorgeDorio
            </a>
          </li>
          <li className="flex justify-between">
            <strong>Discord:</strong>{" "}
            <a
              href="https://discordapp.com/channels/@me/353717567354830848/"
              target="_blank"
            >
              dorio6613
            </a>
          </li>
          <li className="flex justify-between">
            <strong>Whatsapp:</strong>{" "}
            <a href="https://wa.me/5569999502758" target="_blank">
              +55 69 9 9950-2758
            </a>
          </li>
          <li className="flex justify-between">
            <strong>Telegram:</strong>{" "}
            <a href="https://t.me/jorge_dorio" target="_blank">
              jorge_dorio
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
