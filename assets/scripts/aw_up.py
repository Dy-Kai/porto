import os
import json

# Define the folder where your images are stored
IMAGE_FOLDER = "../img/aw"
OUTPUT_JSON = "../data/aw.json"

def generate_json(folder):
    image_data = []
    
    # Get a list of all files in the folder
    files = os.listdir(folder)
    
    # Filter out only image files (common formats)
    image_files = [f for f in files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp'))]
    
    # Loop through files and create JSON structure
    for index, filename in enumerate(image_files, start=1):
        filename = os.path.splitext(filename)[0]  # Get file name
        file_extension = os.path.splitext(filename)[1]  # Get file extension

        image_data.append({
            "id": index,
            "file_name": filename,
            "url": f"assets/img/aw/{filename + file_extension}",  # URL relative to the root (index.html)
            "file_extension": file_extension
        })
    
    # Save the data to a JSON file
    with open(OUTPUT_JSON, "w", encoding="utf-8") as json_file:
        json.dump(image_data, json_file, indent=4)

    print(f"JSON file '{OUTPUT_JSON}' created successfully!")

# Run the function
if __name__ == "__main__":
    if os.path.exists(IMAGE_FOLDER):
        generate_json(IMAGE_FOLDER)
    else:
        print(f"Error: Folder '{IMAGE_FOLDER}' not found!")
