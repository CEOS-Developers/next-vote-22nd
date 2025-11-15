'use client';
import VoteMainHeader from "@/components/voteMainHeader";
import VoteBody from "@/components/voteBody";

export default function Vote() {
    return (
        <main className="h-[315px] w-[169px] flex flex-col bg-[#FFD954] rounded-[19px]">
            <section className="flex flex-1 flex-col items-center">
                <VoteMainHeader />
                <VoteBody />
            </section>
        </main>
    );
}
