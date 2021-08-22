# -*- coding: utf-8 -*-+1
"""
Used to create the banner backgrounds for the website
"""

from PIL import Image

def roundFade(img, width, height):
    hw = width / 2
    hh = height / 2
    
    #for each pixel
    for X in range(width):
        for Y in range(height):
            #finds value for brightness based on distance
            val = 255 
            val *= 1 - (X - hw) * (X - hw) / (hw * hw) * 0.65
            val *= 1 - (Y - hh) * (Y - hh) / (hh * hh) * 0.8
            val = int(val)
            img.paste((val, val, val), (X, Y, X+1, Y+1))
    return

def verticalFade(img, width, height):
    hh = height / 2
    
    #for each pixel
    for X in range(width):
        for Y in range(height):
            #finds value for brightness based on distance
            val = 255 
            val *= 1 - (Y - hh) * (Y - hh) / (hh * hh) * 0.8
            val = int(val)
            img.paste((val, val, val), (X, Y, X+1, Y+1))
    return

# Adds a border to the top, bottom, and left sides
# Used for the button backgrounds on my website
def addBorderTBL(img, width, height, border_color, thickness): 
    bordered = Image.new('RGB', (width + thickness, height + thickness * 2), border_color)
    bordered.paste(img, (thickness, thickness))
    return bordered
    


if __name__ == '__main__':
    bgX = 8000
    bgY = 60
    starting_color = (224, 224, 224)
    
    background = Image.new('RGB', (bgX, bgY), starting_color)
    fade_layer = Image.new('RGB', (bgX, bgY), (0, 0, 0))
    verticalFade(fade_layer, bgX, bgY)
    
    faded_background = Image.blend(background, fade_layer, 0.1)
    faded_background = addBorderTBL(faded_background, bgX, bgY, (136, 136, 136), 3)
    faded_background.show()
        
    faded_background.save('ButtonFade.png')
    
    
