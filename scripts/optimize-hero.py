"""Write smaller WebP copies and a favicon from the asset pack."""

from pathlib import Path

from PIL import Image

assets = Path(__file__).resolve().parents[1] / "mythfits-assets"


def webp(source, dest, max_width, quality):
    image = Image.open(source)
    if image.width > max_width:
        height = round(image.height * (max_width / image.width))
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    image.save(dest, "WEBP", quality=quality, method=4)


webp(assets / "hero/phoenix-hero-desktop.png", assets / "hero/phoenix-hero-desktop.webp", 1774, 86)
webp(assets / "brand/logo-light-background.png", assets / "brand/logo-light-background.webp", 720, 90)
webp(
    assets / "brand/logo-dark-background-stacked.png",
    assets / "brand/logo-dark-background-stacked.webp",
    900,
    90,
)
webp(assets / "brand/phoenix-emblem.png", assets / "brand/phoenix-emblem.webp", 800, 90)

emblem = Image.open(assets / "brand/phoenix-emblem.png").convert("RGBA")
crop = emblem.crop(emblem.getbbox())
crop.thumbnail((128, 128), Image.Resampling.LANCZOS)
side = max(crop.size)
icon = Image.new("RGBA", (side, side), (0, 0, 0, 0))
icon.paste(crop, ((side - crop.width) // 2, (side - crop.height) // 2), crop)
icon.save(assets / "favicon.png")

touch = emblem.crop(emblem.getbbox())
touch.thumbnail((148, 148), Image.Resampling.LANCZOS)
apple = Image.new("RGB", (180, 180), (255, 250, 245))
apple.paste(touch, ((180 - touch.width) // 2, (180 - touch.height) // 2), touch)
apple.save(assets / "apple-touch-icon.png")

hero = Image.open(assets / "hero/phoenix-hero-desktop.png").convert("RGB")
scaled = hero.resize((round(hero.width * 630 / hero.height), 630), Image.Resampling.LANCZOS)
share = scaled.crop((scaled.width - 1200, 0, scaled.width, 630))
logo = Image.open(assets / "brand/logo-light-background.png").convert("RGBA")
logo = logo.crop(logo.getbbox())
logo.thumbnail((460, 200), Image.Resampling.LANCZOS)
share.paste(logo, (64, 64), logo)
share.save(assets / "hero/og-image.jpg", "JPEG", quality=85, optimize=True, progressive=True)
