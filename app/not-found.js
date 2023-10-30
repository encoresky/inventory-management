import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center bg-primary h-screen">
      <h2 className="text-2xl text-white font-sans font-semibold ">
        404 - PAGE NOT FOUND
      </h2>
      <p className="text-xl text-white font-sans font-semibold">
        Could not find requested resource
      </p>
      <Link href="/" className="btn-primary hover:text-white">
        Return Home
      </Link>
    </div>
  );
}
