# -*- coding: utf-8 -*-+1
"""
Used to create the banner backgrounds for the website
"""

from PIL import Image

from Fader import roundFade


bgX = 2000
bgY = 400
background_color = (10, 101, 198)
wire_color = (0, 152, 242)

def addCircle(img, x, y, radius): #makes a circle
    #start with a square
    for X in range(x-radius, x+radius):
        for Y in range(y-radius, y+radius):
            #make sure pixel is in image
            if (X > -1 and Y > -1 and X < bgX and Y < bgY):
                #check if within circle
                if ((x - X) * (x - X) + (y - Y) * (y - Y) < radius * radius): 
                    img.paste(wire_color, (X, Y, X+1, Y+1))
    return

def addLine(img, x1, y1, x2, y2, width): #used to draw single lines
    #adds a lot of circles to form a line
    if ((x2 - x1) * (x2 - x1) > (y2 - y1) * (y2 - y1)): #more horizontal
        for x in range(min(x1, x2), max(x1, x2)):
            current_y = y1 + int((x - x1) / (x2 - x1) * (y2 - y1)) #find corresponding y
            addCircle(img, x, current_y, width // 2)
    else: #more vertical
        for y in range(min(y1, y2), max(y1, y2)):
            current_x = x1 + int((y - y1) / (y2 - y1) * (x2 - x1)) #find corresponding x
            addCircle(img, current_x, y, width // 2)
    return 

def addWire(*data): #used to draw a series of lines
    img = data[0]
    width = data[1]
    points = data[2]
    for start in range(0, len(points)-1):
        addLine(img, points[start][0], points[start][1], points[start+1][0], points[start+1][1], width)
    return

def addRing(img, x, y, radius): #makes a hollow circle (radius should be 1.7 * wire width)
    #start with a square
    for X in range(x - radius, x + radius):
        for Y in range(y - radius, y + radius):
            #make sure pixel is in image
            if (X > -1 and Y > -1 and X < bgX and Y < bgY):
                #check if between two circles
                if ((x - X) * (x - X) + (y - Y) * (y - Y) < radius * radius and \
                    (x - X) * (x - X) + (y - Y) * (y - Y) > 0.25 * radius * radius): 
                    img.paste(wire_color, (X, Y, X+1, Y+1))
                #fill center in with background color for convenience
                elif ((x - X) * (x - X) + (y - Y) * (y - Y) < 0.25 * radius * radius):
                    img.paste(background_color, (X, Y, X+1, Y+1))
    return

if __name__ == '__main__':
    """
    dropdown = Image.new('RGB', (400, 400), (255, 255, 255))
    lines = [[(200, 200), (150, 150), (100, 200), (200, 300), (300, 200), (250, 150), (200, 200)]]
    for line in lines:
        addWire(dropdown, 5, line)
    
    dropdown.show()
    """
    
    background = Image.new('RGB', (bgX, bgY), background_color)
    fade_layer = Image.new('RGB', (bgX, bgY), (0, 0, 0))


    print('adding left wires')
    thin_wires = [[(0, 0), (80, 80), (180, 80), (260, 160), (380, 160), (410, 133)], \
             [(0, 30), (70, 100), (170, 100), (250, 180), (415, 180), (435, 168)], \
             [(0, 130), (170, 130), (240, 200), (415, 200), (435, 212)], \
             [(0, 280), (100, 280), (160, 220), (380, 220), (410, 247)], \
             [(0, 230), (55,230), (100, 185), (130, 185)]]
    for wire in thin_wires:
        addWire(background, 10, wire)
        
    print('adding rings')
    addRing(background, 410, 133, 17)
    addRing(background, 435, 168, 17)
    addRing(background, 435, 212, 17)
    addRing(background, 410, 247, 17)
    addRing(background, 130, 185, 17)
    
    
    print('')
    print('adding left wires for big square')
    thin_wires = [[(200, 400), (280, 320), (520, 320), (600, 240), (640, 240)], \
                  [(245, 400), (295, 350), (534, 350), (600, 284), (640, 284)], \
                  [(500, 0), (550, 50), (550, 146), (600, 196), (640, 196)], \
                  [(580, 0), (580, 132), (600, 152), (640, 152)]]
    for wire in thin_wires:
        addWire(background, 10, wire)
           
    print('adding rings')
    addRing(background, 640, 284, 17)
    addRing(background, 640, 240, 17)
    addRing(background, 640, 196, 17)
    addRing(background, 640, 152, 17)
    
    print('adding big square')
    thin_wires = [[(670, 145), (816, 145), (816, 291), (670, 291), (670, 145)]]
    for wire in thin_wires:
        addWire(background, 10, wire)
    
    print('adding wires between squares')
    thin_wires = [[(846, 152), (886, 152), (918, 120), (1050, 120), (1170, 0)], \
                  [(846, 196), (886, 196), (932, 150), (1132, 150), (1194, 88), (1234, 88)], \
                  [(846, 240), (886, 240), (946, 180), (1146, 180), (1194, 132), (1234, 132)], \
                  [(846, 284), (886, 284), (932, 330), (1000, 330), (1070, 400)]]
    for wire in thin_wires:
        addWire(background, 10, wire)
        
    print('adding rings')
    addRing(background, 846, 152, 17)
    addRing(background, 846, 196, 17)
    addRing(background, 846, 240, 17)
    addRing(background, 846, 284, 17)
    
    addRing(background, 1234, 88, 17)
    addRing(background, 1234, 132, 17)
    
    print('')
    print('adding small square')
    thin_wires = [[(1264, 81), (1322, 81), (1322, 139), (1264, 139), (1264, 81)]]
    for wire in thin_wires:
        addWire(background, 10, wire)
    
    print('adding right wires for small square')
    thin_wires = [[(1352, 88), (1392, 88), (1430, 50), (1480, 50), (1530, 0)], \
                  [(1352, 132), (1392, 132), (1445, 80), (1495, 80), (1575, 0)]]
    for wire in thin_wires:
        addWire(background, 10, wire)
    
    print('adding rings')
    addRing(background, 1352, 88, 17)
    addRing(background, 1352, 132, 17)
    
    
    print('')
    print('adding bottom wires')
    #thin_wires = [[(1100, 400), (1030, 330), (1030, 300), (1000, 270)]]
    thin_wires = [[(1100, 400), (970, 270), (950, 270)], \
                  [(1130, 400), (985, 255), (985, 235)]]
    for wire in thin_wires:
        addWire(background, 10, wire)
        
    print('adding rings')
    addRing(background, 950, 270, 17)
    addRing(background, 985, 235, 17)
    
    
    print('')
    print('adding fade')
    roundFade(fade_layer, bgX, bgY)
    faded_background = Image.blend(background, fade_layer, 0.2)
    faded_background.show()
    
    faded_background.save('Background.png')
    