import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <Image
        src="/vex.png"
        alt="Vex mascot"
        width={144}
        height={144}
        priority
        className="mb-8 drop-shadow-[0_8px_30px_rgba(94,234,212,0.25)]"
      />
      <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-vex-heading">
        Vex<span className="text-vex-accent">Kit</span>
      </h1>
      <p className="mt-4 text-vex-text text-lg">Coming soon</p>
    </main>
  );
}
