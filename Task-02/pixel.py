from PIL import Image
import pytesseract

def extract_expression(image_path):
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    return text.strip()

def evaluate_expression(expression):
    try:
        result = eval(expression)
        return result
    except Exception as e:
        return f"Error: {str(e)}"

image_path = '/home/sanat-santhosh-nair/Pictures/Screenshots/Screenshot from 2025-01-09 14-30-58.png'  # Replace with the path to your .png file
expression = extract_expression(image_path)
if expression:
    result = evaluate_expression(expression)
    print(f"The result of '{expression}' is: {result}")
else:
    print("No expression found in the image.")
