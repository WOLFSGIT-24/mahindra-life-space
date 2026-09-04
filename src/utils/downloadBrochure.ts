export interface BrochureFileInfo {
  url: string;
  filename: string;
  projectName: string;
}

export const BROCHURE_FILES = {
  aquavista: {
    url: "/AquaVista at Mahindra World City - Brochure.pdf",
    filename: "AquaVista_at_Mahindra_World_City_Brochure.pdf",
    projectName: "3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft)",
  },
  lakewoods: {
    url: "/Lakewoods Brochure - Phase II.pdf",
    filename: "Lakewoods_Brochure_Phase_II.pdf",
    projectName: "2 BHK Deck Residences (1,079 Sft)",
  },
};

/**
 * Triggers PDF download based on user project selection.
 * - If user selected 'Both Projects' (or all), both PDF brochures will be downloaded.
 * - If user selected '3, 3.5 & 4 BHK' / 'AquaVista', only that PDF brochure will be downloaded.
 * - If user selected '2 BHK' / 'Lakewoods', only that PDF brochure will be downloaded.
 */
export function downloadBrochures(projectSelection?: string | null): BrochureFileInfo[] {
  const selection = (projectSelection || "").toLowerCase();

  const isDuplex = selection.includes("aqua") || selection.includes("3") || selection.includes("4") || selection.includes("duplex") || selection.includes("1053") || selection.includes("1610");
  const is2BHK = selection.includes("lake") || selection.includes("2 bhk") || selection.includes("1079") || selection.includes("deck");
  const isBoth = selection.includes("both") || selection.includes("all") || (isDuplex && is2BHK) || (!isDuplex && !is2BHK);

  const toDownload: BrochureFileInfo[] = [];

  if (isBoth) {
    toDownload.push(BROCHURE_FILES.aquavista, BROCHURE_FILES.lakewoods);
  } else if (is2BHK) {
    toDownload.push(BROCHURE_FILES.lakewoods);
  } else if (isDuplex) {
    toDownload.push(BROCHURE_FILES.aquavista);
  }

  toDownload.forEach((file, index) => {
    setTimeout(() => {
      try {
        const link = document.createElement("a");
        link.href = encodeURI(file.url);
        link.download = file.filename;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.error(`Failed to download ${file.filename}:`, err);
        window.open(encodeURI(file.url), "_blank");
      }
    }, index * 450); // Stagger by 450ms for multi-file downloads
  });

  return toDownload;
}
