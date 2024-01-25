import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full bg-black text-white flex justify-center items-center flex-col">
      <header>
        NEXUS
      </header>

      <section>
        <article>
         <p>
          This website was directly crafted by GODS*, it is a doorway to 
          <span> unfiltered Community</span>
         </p>
          <p>
            enter at your own risk
          </p>
        </article>   
      </section>

      <section>
        <div>
          <button>
            Login
          </button>
          <button>
            Signup
          </button>
        </div>
      </section>
    </main>
  );
}
