import { pokemon } from "../common-interfaces/pokemon";

let draftPool: pokemon[] = [];
export function setMappedDraftPool(pool: pokemon[]) {
    draftPool = pool;
}

export function getMappedDraftPool() {
    return draftPool;
}

export function draftMon(name: string, trainerId: string) {
    const index = draftPool.findIndex(p => p.name === name);
    draftPool[index].isDrafted = true;
    draftPool[index].trainerId = trainerId;
}
