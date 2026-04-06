import pytesseract
from PIL import Image
import re

img = Image.open("test.png")

text = pytesseract.image_to_string(img)

print("Full Text:")
print(text)

# Extract total amount
match = re.search(r'(TOTAL|Total).*?(\d+\.\d+)', text)

if match:
    amount = match.group(2)
    print("\n Total Amount:", amount)
else:
    print("\n Total not found")