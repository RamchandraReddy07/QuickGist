import { Badge, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
  return (
    <section>
        <div className="">
            <div className="flex">
                <div className="relative p-[1px] overflow-hidden  
                rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group"> 
                <Badge className="relative p-[1px] overflow-hidden  bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
                <Sparkles className="relative p-[1px] overflow-hidden  
                rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group" />
                </Badge>
                <p >Powered by AI</p>
                </div> 
            </div>
            <h1>Transform your PDFs into concise summaries with AI</h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">Upload your PDF and get a summary in seconds</h2>
            <Button>QuickGist</Button>
        </div>
    </section>
  );
}
