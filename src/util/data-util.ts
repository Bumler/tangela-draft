import { FormatsData } from "../data/gen4-format-data";

export function printUniqueTiers() : void {
    const tiers = new Set<string>();
  
    // Loop through each entry in FormatsData and add its tier to the Set
    for (const key in FormatsData) {
      const formatData = FormatsData[key];
      tiers.add(formatData.tier);
    }
  
    // Print out the unique tiers
    console.log("Unique Tiers:");
    for (const tier of tiers) {
      console.log(tier);
    }
  }