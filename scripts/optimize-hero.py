"""Write smaller WebP copies and a favicon from the asset pack."""

from pathlib import Path

from PIL import Image

public = Path(__file__).resolve().parents[1] / "public"


def webp(source, dest, max_width, quality):
    image = Image.open(source)
    if image.width > max_width:
        height = round(image.height * (max_width / image.width))
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    image.save(dest, "WEBP", quality=quality, method=4)


webp(public / "hero/phoenix-hero-desktop.png", public / "hero/phoenix-hero-desktop.webp", 1774, 86)
webp(public / "brand/logo-light-background.png", public / "brand/logo-light-background.webp", 720, 90)
webp(
    public / "brand/logo-dark-background-stacked.png",
    public / "brand/logo-dark-background-stacked.webp",
    900,
    90,
)
webp(public / "brand/phoenix-emblem.png", public / "brand/phoenix-emblem.webp", 800, 90)

emblem = Image.open(public / "brand/phoenix-emblem.png").convert("RGBA")
crop = emblem.crop(emblem.getbbox())
crop.thumbnail((128, 128), Image.Resampling.LANCZOS)
side = max(crop.size)
icon = Image.new("RGBA", (side, side), (0, 0, 0, 0))
icon.paste(crop, ((side - crop.width) // 2, (side - crop.height) // 2), crop)
icon.save(public / "favicon.png")
