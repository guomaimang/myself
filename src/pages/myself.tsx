import { Inter } from "next/font/google";
import Image from "next/image";
import { ArrowRight, Github, Mail, Quote, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Head from "next/head";
import { Typing } from "@/components/typing";
import WordPullUp from "@/components/magicui/word-pull-up";
import Meteors from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";

const inter = Inter({ subsets: ["latin"] });

export default function Myself() {
  return (
    <main className={inter.className}>
      <Head>
        <title>About Myself | Nothing is impossible.</title>
        <meta name="description" content="Learn more about who I am, my skills, experiences, and interests." />
      </Head>
      <Meteors />
      <ScrollArea className={`w-full h-full`}>
        <div className={`flex flex-col p-6 space-y-4 max-w-[620px] mx-auto`}>
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="text-sm hover:underline">
              &larr; Back to Home
            </Link>
            <Link href="/myself-cn" className="text-sm hover:underline px-2 py-1 rounded-md border">
              中文版
            </Link>
          </div>
          
          <Card className={`relative w-full h-fit p-6`}>
            <CardTitle>About Me</CardTitle>
            <CardContent className="px-0 pt-4">
              <div className="mt-4 border p-2 rounded-md flex items-center w-fit backdrop-blur-sm mb-6">
                <Quote className="w-3 h-3 mr-1.5 text-foreground" />
                <Typing
                  content="Nothing is impossible."
                  className="text-sm text-foreground"
                  typingSpeed={150}
                  keyboardSeed={2}
                  keyboardStay={2}
                />
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-20 h-20 mr-6">
                  <Image
                    width={80}
                    height={80}
                    src="/avatar.webp"
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Minghan Zhang</h2>
                  <WordPullUp
                    className="text-base font-normal mt-1"
                    words="15 y.o. / Co-Founder @LightXi Inc."
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    I am a passionate full-stack developer and open source enthusiast based in China.
                    With a keen interest in web development, cloud infrastructure, and AI technologies,
                    I enjoy building innovative solutions to real-world problems.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Education</h3>
                <p className="text-sm">
                  Currently studying Computer Science, with a focus on distributed systems and artificial intelligence.
                </p>
                
                <h3 className="text-lg font-medium">Skills</h3>
                <div className="flex flex-wrap">
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">JavaScript/TypeScript</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">React/Next.js</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Go</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Python</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Kubernetes</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Docker</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Full Stack Development</span>
                </div>
                
                <h3 className="text-lg font-medium">Interests</h3>
                <p className="text-sm">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open source projects,
                  and learning about distributed systems architecture. I'm also interested in AI development
                  and its applications in solving complex problems.
                </p>
                
                <h3 className="text-lg font-medium">Contact</h3>
                <div className="flex space-x-4">
                  <Link href="https://github.com/zmh-program" target="_blank">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="https://twitter.com/ProgramZmh" target="_blank">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="mailto:zmh@lightxi.com" target="_blank">
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <footer className="py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Minghan Zhang. All rights reserved.</p>
        </footer>
      </ScrollArea>
    </main>
  );
} 