import { type } from "os";

export interface ModdedSpeciesFormatsData {
    tier: Tier;
}

export type Tier = "LC" | "NFE" | "UU" | "NU" | "UUBL" | "OU" | "(OU)" | "NUBL" | "Uber" | "AG";
