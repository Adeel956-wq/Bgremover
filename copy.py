import os
import shutil

source_drive = "D:\\"
destination_drive = "E:\\"

def copy_all(source, destination):
    for root, dirs, files in os.walk(source):
        # Build destination path
        relative_path = os.path.relpath(root, source)
        dest_path = os.path.join(destination, relative_path)

        # Make sure the folder exists
        os.makedirs(dest_path, exist_ok=True)

        for file in files:
            src_file = os.path.join(root, file)
            dest_file = os.path.join(dest_path, file)
            try:
                shutil.copy2(src_file, dest_file)
                print(f"Copied: {src_file} → {dest_file}")
            except Exception as e:
                print(f"Failed to copy {src_file}: {e}")

print("Starting copy process...")
copy_all(source_drive, destination_drive)
print("✅ Copy completed!")
