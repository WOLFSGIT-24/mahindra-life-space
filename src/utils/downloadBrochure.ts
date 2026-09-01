export interface BrochureFileInfo {
  url: string;
  filename: string;
  projectName: string;
}

export const BROCHURE_FILES = {
  aquavista: {
    url: "/AquaVista at Mahindra World City - Brochure.pdf",
    filename: "AquaVista_at_Mahindra_World_City_Brochure.pdf",
    projectName: "Codename AquaVista",
  },
  lakewoods: {
    url: "/Lakewoods Brochure - Phase II.pdf",
    filename: "Lakewoods_Brochure_Phase_II.pdf",
    projectName: "Mahindra Lakewoods",
  },
};

/**
 * Triggers PDF download based on user project selection.
 * - If user selected 'Both Projects' (or all), both PDF brochures will be downloaded.
 * - If user selected 'AquaVista', only the AquaVista PDF brochure will be downloaded.
 * - If user selected 'Lakewoods', only the Lakewoods PDF brochure will be downloaded.
 */
export function downloadBrochures(projectSelection?: string | null): BrochureFileInfo[] {
  const selection = (projectSelection || "").toLowerCase();

  const isAqua = selection.includes("aqua");
  const isLake = selection.includes("lake");
  const isBoth = selection.includes("both") || (!isAqua && !isLake);

  const toDownload: BrochureFileInfo[] = [];

  if (isBoth) {
    toDownload.push(BROCHURE_FILES.aquavista, BROCHURE_FILES.lakewoods);
  } else if (isAqua) {
    toDownload.push(BROCHURE_FILES.aquavista);
  } else if (isLake) {
    toDownload.push(BROCHURE_FILES.lakewoods);
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
