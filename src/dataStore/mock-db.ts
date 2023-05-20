import { pokemon } from "../common-interfaces/pokemon";

let draftPool: pokemon[] = [];
export function setMappedDraftPool(pool: pokemon[]) {
    draftPool = pool;
}

export function getMappedDraftPool() {
    return draftPool;
}
