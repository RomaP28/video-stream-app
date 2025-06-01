import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";


const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex flex-col items-center gap-y-1 hover:opacity-75 transition">
          <div className="bg-white rounded-xl pp-4 p-1">
            <Image
              src='/streamly.png'
              alt="Streaming"
              height='20'
              width='120'
            />
          </div>
          <div className={cn("flex flex-col items-center", font.className)}>
            <p className="text-sm text-muted-foreground">
              Go live. Stay real.
            </p>
          </div>
      </div>
    </Link>
  )
}