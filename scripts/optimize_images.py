import os
from PIL import Image

def optimize_directory(dir_path):
    for root, _, files in os.walk(dir_path):
        for f in files:
            if f.endswith(('.png', '.jpg', '.jpeg')) and not f.endswith('.webp'):
                full_path = os.path.join(root, f)
                base_name = os.path.splitext(full_path)[0]
                webp_path = base_name + '.webp'
                
                try:
                    with Image.open(full_path) as img:
                        # Convert RGBA to RGB if needed for saving
                        orig_w, orig_h = img.size
                        
                        # Save optimized webp version
                        # Resize if excessively large
                        target_w = min(orig_w, 1400)
                        if target_w < orig_w:
                            target_h = int(orig_h * (target_w / orig_w))
                            img_resized = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
                        else:
                            img_resized = img
                            
                        if img_resized.mode in ('RGBA', 'LA'):
                            # Keep transparency in WebP
                            img_resized.save(webp_path, 'WEBP', quality=82, method=6)
                        else:
                            img_rgb = img_resized.convert('RGB')
                            img_rgb.save(webp_path, 'WEBP', quality=82, method=6)
                            
                        orig_size = os.path.getsize(full_path)
                        webp_size = os.path.getsize(webp_path)
                        print(f"Optimized: {f} -> {os.path.basename(webp_path)} ({orig_size//1024}KB -> {webp_size//1024}KB)")
                except Exception as e:
                    print(f"Error processing {full_path}: {e}")

if __name__ == '__main__':
    public_dir = os.path.abspath('./public')
    optimize_directory(public_dir)
