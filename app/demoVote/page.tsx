'use client';

import VoteHeader from "@/components/voteHeader"
import DemoVoteBody from "@/components/demoVoteBody";

export default function demoVote() {
    return (
        <main className="h-[315px] w-[169px] flex flex-col bg-[#FFD954] rounded-[19px]">
            <section className="flex flex-1 flex-col items-center">
                <VoteHeader title={"데모데이 투표"} blackDot={1} backBtn={true}/>
                <DemoVoteBody />
            </section>
        </main>
    );
}
