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

export default function MyselfCN() {
  return (
    <main className={inter.className}>
      <Head>
        <title>关于我 | 没有什么是不可能的</title>
        <meta name="description" content="了解关于我是谁，我的技能，经验和兴趣爱好。" />
      </Head>
      <Meteors />
      <ScrollArea className={`w-full h-full`}>
        <div className={`flex flex-col p-6 space-y-4 max-w-[620px] mx-auto`}>
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="text-sm hover:underline">
              &larr; 返回首页
            </Link>
            <Link href="/myself" className="text-sm hover:underline px-2 py-1 rounded-md border">
              English
            </Link>
          </div>
          
          <Card className={`relative w-full h-fit p-6`}>
            <CardTitle>关于我</CardTitle>
            <CardContent className="px-0 pt-4">
              <div className="mt-4 border p-2 rounded-md flex items-center w-fit backdrop-blur-sm mb-6">
                <Quote className="w-3 h-3 mr-1.5 text-foreground" />
                <Typing
                  content="没有什么是不可能的"
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
                    alt="头像"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">张铭瀚</h2>
                  <WordPullUp
                    className="text-base font-normal mt-1"
                    words="15岁 / LightXi Inc. 联合创始人"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    我是一名来自中国的热情全栈开发者和开源爱好者。
                    我对网络开发、云基础设施和人工智能技术有浓厚的兴趣，
                    喜欢构建创新的解决方案来解决现实世界的问题。
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">教育背景</h3>
                <p className="text-sm">
                  目前正在学习计算机科学，专注于分布式系统和人工智能领域。
                </p>
                
                <h3 className="text-lg font-medium">技能</h3>
                <div className="flex flex-wrap">
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">JavaScript/TypeScript</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">React/Next.js</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Go</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Python</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Kubernetes</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">Docker</span>
                  <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40">全栈开发</span>
                </div>
                
                <h3 className="text-lg font-medium">兴趣爱好</h3>
                <p className="text-sm">
                  当我不在编程时，我喜欢探索新技术，贡献开源项目，
                  以及学习分布式系统架构。我也对人工智能开发及其在解决复杂问题方面的应用很感兴趣。
                </p>
                
                <h3 className="text-lg font-medium">联系方式</h3>
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
          <p>© {new Date().getFullYear()} 张铭瀚. 保留所有权利.</p>
        </footer>
      </ScrollArea>
    </main>
  );
} 