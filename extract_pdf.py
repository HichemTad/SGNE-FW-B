import pdfplumber
import sys

pdf_path = "D:/Téléchargement/eclasse14510_68a324f881503.pdf"

with open("C:/Users/Hichem/Desktop/Site FWB/pdf_rs_output.txt", "w", encoding="utf-8") as out:
    try:
        with pdfplumber.open(pdf_path) as pdf:
            out.write(f"TOTAL PAGES: {len(pdf.pages)}\n")
            for i, page in enumerate(pdf.pages):
                out.write(f"\n=== PAGE {i+1} ===\n")
                text = page.extract_text()
                if text:
                    out.write(text + "\n")
    except Exception as e:
        out.write(f"ERROR: {e}\n")
        import traceback
        traceback.print_exc(file=out)
