'use client';

import VoteHeader from "@/components/voteHeader"
import PartVoteBody from "@/components/partVoteBody";

export default function Vote() {
    return (
        <main className="h-screen w-[375px] flex flex-col bg-[#FFD954]">
            <section className="flex flex-1 flex-col items-center">
                <VoteHeader title={"파트장 투표"} blackDot={1} backBtn={true} />
                <PartVoteBody />
            </section>
        </main>
    );
}
