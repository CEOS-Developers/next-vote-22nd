'use client';

import VoteHeader from "@/components/voteHeader"
import DemoVoteBody from "@/components/demoVoteBody";

export default function demoVote() {
    return (
        <main className="relative w-full h-screen  w-[375px] flex flex-col bg-[#FFD954]">
            <section className="flex flex-1 flex-col items-center">
                <VoteHeader title={"데모데이 투표"} blackDot={1} backBtn={true}/>
                <DemoVoteBody />
            </section>
        </main>
    );
}
