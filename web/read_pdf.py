#!/usr/bin/env python3
"""
Script to read and extract comprehensive text from PDF files.
This script will extract all text content from the PDF in the INFO folder.
"""

import os
import sys

def read_pdf_with_pypdf2(file_path):
    """Read PDF using PyPDF2 library."""
    try:
        import PyPDF2
        
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text_content = []
            
            print(f"Total pages: {len(pdf_reader.pages)}\n")
            print("=" * 80)
            print("PDF CONTENT EXTRACTION")
            print("=" * 80)
            print()
            
            for page_num, page in enumerate(pdf_reader.pages, 1):
                text = page.extract_text()
                text_content.append(text)
                print(f"\n--- PAGE {page_num} ---\n")
                print(text)
                print("\n" + "-" * 80 + "\n")
            
            return "\n\n".join(text_content)
    except ImportError:
        print("PyPDF2 not installed. Trying alternative method...")
        return None
    except Exception as e:
        print(f"Error with PyPDF2: {e}")
        return None

def read_pdf_with_pdfplumber(file_path):
    """Read PDF using pdfplumber library (better for complex layouts)."""
    try:
        import pdfplumber
        
        text_content = []
        
        with pdfplumber.open(file_path) as pdf:
            print(f"Total pages: {len(pdf.pages)}\n")
            print("=" * 80)
            print("PDF CONTENT EXTRACTION (pdfplumber)")
            print("=" * 80)
            print()
            
            for page_num, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if text:
                    text_content.append(text)
                    print(f"\n--- PAGE {page_num} ---\n")
                    print(text)
                    print("\n" + "-" * 80 + "\n")
                
                # Also try to extract tables if any
                tables = page.extract_tables()
                if tables:
                    print(f"\n--- TABLES ON PAGE {page_num} ---\n")
                    for table_num, table in enumerate(tables, 1):
                        print(f"Table {table_num}:")
                        for row in table:
                            print(row)
                        print()
            
            return "\n\n".join(text_content)
    except ImportError:
        print("pdfplumber not installed. Trying alternative method...")
        return None
    except Exception as e:
        print(f"Error with pdfplumber: {e}")
        return None

def read_pdf_with_pymupdf(file_path):
    """Read PDF using PyMuPDF (fitz) library."""
    try:
        import fitz  # PyMuPDF
        
        text_content = []
        doc = fitz.open(file_path)
        
        print(f"Total pages: {len(doc)}\n")
        print("=" * 80)
        print("PDF CONTENT EXTRACTION (PyMuPDF)")
        print("=" * 80)
        print()
        
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            
            if text:
                text_content.append(text)
                print(f"\n--- PAGE {page_num + 1} ---\n")
                print(text)
                print("\n" + "-" * 80 + "\n")
        
        doc.close()
        return "\n\n".join(text_content)
    except ImportError:
        print("PyMuPDF (fitz) not installed. Trying alternative method...")
        return None
    except Exception as e:
        print(f"Error with PyMuPDF: {e}")
        return None

def main():
    # Get the PDF file path
    script_dir = os.path.dirname(os.path.abspath(__file__))
    pdf_path = os.path.join(script_dir, "INFO", "Untitled document.pdf")
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found at {pdf_path}")
        sys.exit(1)
    
    print(f"Reading PDF: {pdf_path}\n")
    
    # Try different PDF reading libraries in order of preference
    text_content = None
    
    # Try pdfplumber first (best for complex layouts)
    text_content = read_pdf_with_pdfplumber(pdf_path)
    
    # If pdfplumber fails, try PyMuPDF
    if not text_content:
        text_content = read_pdf_with_pymupdf(pdf_path)
    
    # If PyMuPDF fails, try PyPDF2
    if not text_content:
        text_content = read_pdf_with_pypdf2(pdf_path)
    
    if not text_content:
        print("\n" + "=" * 80)
        print("ERROR: Could not read PDF with any available library.")
        print("=" * 80)
        print("\nPlease install one of the following libraries:")
        print("  pip install pdfplumber  (recommended)")
        print("  pip install pymupdf")
        print("  pip install PyPDF2")
        sys.exit(1)
    
    # Save extracted text to a file
    output_file = os.path.join(script_dir, "INFO", "extracted_text.txt")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(text_content)
    
    print("\n" + "=" * 80)
    print(f"Extraction complete! Text saved to: {output_file}")
    print("=" * 80)

if __name__ == "__main__":
    main()

