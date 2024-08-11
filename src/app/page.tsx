import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <figure className="md:flex bg-yellow-50 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/asghia pic.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “My name is Asghia Saeed,I am in 1st year,My father name is Saeed Ahmed.”
      </p>
    </blockquote>
    <figcaption className="fonT-medium">
      <div className="text-red-500 dark:text-sky-400">
        ASGHIA SAEED
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, MANTECH
      </div>
    </figcaption>
  </div>
</figure>
    </main>
  );
}
